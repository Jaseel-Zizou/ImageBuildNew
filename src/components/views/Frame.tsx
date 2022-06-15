import React from 'react';
import { Terminal, TerminalEvent, createInstance } from '@fra.me/terminal-factory';
import { Button } from 'reactstrap'
import { mainServiceRequest } from './ServiceRequest'
import '../../assets/styles/frame.css';
import { getCluster, getClusterCredentials, clearClusterCredentials, checkClusterStatus } from './NutanixClusterService.js';

enum FrameStatus {
  AUTHENTICATING,
  STARTING_CLUSTER,
  AWAITING_CLUSTER,
  STARTING_FRAME,
  STARTED,
  DONE,
  ERROR,
}

const AWAIT_CLUSTER_SECONDS = 10;


interface OuterProps {
  workspaceId: string;
  poolId: string;
  nutanixPoolId: string;
  // dummyFun: () => {};
}

interface State {
  terminal?: Terminal;
  authToken?: string;
  downloadUrl?: string;
  userId?: string;
  displayMessage: string;
  status: FrameStatus;
  warmupStatus: WarmupStatus;
  isLoading: boolean;
  isXreadyUser: boolean;
}

// interface AuthResponse {
//   satToken: string;
//   authToken: string;
//   downloadUrl: string;
//   userId: string;
// }

// const Config: any = {
//   CLIENT_ID: '4ccb6930-bcfc-42fd-ab3f-c37822233c79.img.frame.nutanix.com',
//   CLIENT_SECRET: '05d28803666d36e084ffc388adf30d4de8faf831',
//   SERVICE_URL: 'https://cpanel-backend.console.nutanix.com/api/graphql',
//   POOL_ID: 'bf4eb204-3e86-4de5-9baf-7dc0d3fd1b30.b16a1436-bdc5-4d9b-9b82-715d3991c911',
//   TERMINAL_CONFIG_ID: 'bf4eb204-3e86-4de5-9baf-7dc0d3fd1b30.6f47e5f7-1c5c-4f53-863e-0b108e0dd73e',
//   NEBULIX_URL: 'http://35.230.83.155:3001'
// }

enum WarmupStatus {
  NOT_STARTED,
  STARTING,
  STARTED,
  ERROR,
}

class Frame extends React.Component<OuterProps, State> {
  state: State = {
    displayMessage: '',
    status: FrameStatus.AUTHENTICATING,
    warmupStatus: WarmupStatus.NOT_STARTED,
    isLoading: false,
    isXreadyUser: false,
  };

  componentDidMount = async () => {
    const isXreadyUser = localStorage.getItem("isXreadyUser")
    const boolValue = isXreadyUser === "true"
    await this.setState({
      isXreadyUser: boolValue
    })
    if (boolValue) {
      await this.setState({
        isLoading: true
      })
      await this.startupCluster();
    }
  }

  async startupCluster() {
    try {
      const credentials = getClusterCredentials();
      if (credentials === null) {
        this.setState({
          status: FrameStatus.STARTING_CLUSTER,
        });

        await getCluster();
      }

      this.awaitCluster(() => {
        this.startupFrame();
      });
    } catch (err: any) {
      this.setError(err);
    }
  }

  async awaitCluster(onClusterStarted: () => void) {
    const status = await checkClusterStatus();
    if (status !== 'RUNNING') {
      setTimeout(() => {
        this.setState({
          status: FrameStatus.AWAITING_CLUSTER,
          displayMessage: 'Lab environment isn\'t ready yet. Please wait.',
        });
        this.awaitCluster(onClusterStarted);
      }, AWAIT_CLUSTER_SECONDS * 1000);
    } else {
      onClusterStarted();
    }
  }

  async componentWillUnmount() {
    const { terminal } = this.state;
    if (terminal !== undefined) {
      await terminal.stop();
    }
  }

  setError(error: Error) {

    this.setState({
      displayMessage:
        'An error has occurred. Please reload the page and try again',
      status: FrameStatus.ERROR,
    });

  }

  async startupFrame() {
    try {
      const authResponse: any = await mainServiceRequest();

      const terminalOptions = {
        serviceUrl: 'https://cpanel-backend.console.nutanix.com/api/graphql',
        terminalConfigId: '01792e1c-c607-4ab1-b0bc-570372d6b5d2.444fac8c-c078-40eb-8c99-f31d8ac4a5b9',
        token: authResponse.satToken,
      };

      this.setState({
        displayMessage: 'Connecting to Virtual Machine',
        status: FrameStatus.STARTING_FRAME,
      });
      console.log(terminalOptions, 'terminalOptions');

      const terminal = await createInstance(terminalOptions);

      terminal.bind(TerminalEvent.SESSION_CLOSED, () => {
        this.setState({
          displayMessage:
            'Session has finished. If this was unexpected, refresh the page to launch again.',
          status: FrameStatus.DONE,
        });
        clearClusterCredentials();
      });

      terminal.bind(TerminalEvent.SESSION_DISCONNECTED, () => {
        this.setState({
          displayMessage:
            'Session has finished. If this was unexpected, refresh the page to launch again.',
          status: FrameStatus.DONE,
        });
      });

      this.setState(
        {
          terminal,
          authToken: authResponse.authToken,
          downloadUrl: authResponse.downloadUrl,
          userId: authResponse.userId,
          displayMessage: 'Booting up Virtual Machine',
        },
        () => {
          this.startFrame();
        }
      );
    } catch (error: any) {
      this.setError(error);
    }
  }

  async startFrame() {
    const { terminal, authToken, downloadUrl, userId } = this.state;
    const clusterCredentials = getClusterCredentials();

    if (terminal === undefined) {
      console.error('terminal not yet started. trying again');
      this.startupFrame();
    } else if (clusterCredentials === null) {
      this.startupCluster();
    } else {
      try {
        const session = await terminal.getOpenSession();
        if (session) {
          await terminal.resume(session.id)
        } else {
          const userData = JSON.stringify({
            authToken,
            downloadUrl,
            userId,
            nx: JSON.parse(clusterCredentials),
            nebulixUrl: 'http://35.230.83.155:3001',
          });
          await terminal.start({ userData })
        }

        this.setState({
          displayMessage:
            ' Virtual machine is ready! If nothing happens momentarily, an error may have occurred.',
          status: FrameStatus.STARTED,
        });
      } catch (error: any) {
        this.setError(error);
      }
    }
  }

  renderMessage() {
    switch (this.state.status) {
      case FrameStatus.ERROR:
        return (
          <>
            <div className="error">{this.state.displayMessage}</div>
          </>
        );
      case FrameStatus.STARTED:
      case FrameStatus.DONE:
        return (
          <>
            <div>{this.state.displayMessage}</div>
          </>
        );
      case FrameStatus.STARTING_CLUSTER:
        return (
          <>
            <div className="vds-full-loader">
              <div
                className="vds-loading vds-loading--md"
                role="status"
                aria-label="Loading…"
              >
                <i className="vds-loading__spinner" />
              </div>
            </div>
            <div>
              Lab was not reserved. Now setting up a lab environment for you.
            </div>
            <div>
              This may take up to 15 minutes. Please reserve the lab next time
              to skip this wait time.
            </div>
          </>
        );
      case FrameStatus.AUTHENTICATING:
      case FrameStatus.AWAITING_CLUSTER:
      case FrameStatus.STARTING_FRAME:
        return (
          <>
            <div className="vds-full-loader">
              <div
                className="vds-loading vds-loading--md"
                role="status"

                aria-label="Loading…"
              >
                <i className="vds-loading__spinner" />
              </div>
            </div>
            <div>{this.state.displayMessage}</div>
          </>
        );
      default:
        throw Error(`unexpected state ${this.state.status}`);
    }
  }

  onClick = async (e: any) => {
    e.preventDefault();
    this.setState({
      isLoading: true
    })
    this.startupCluster();
  }

  render() {
    return (
      <div className="container nutanix-access-lab" style={{ width: "100%", height: "100%" }}>
        <div className="accessLabButton" >
          {!this.state.isXreadyUser ?
            <>
              <Button color="success" onClick={this.onClick}> Access Lab </Button>
            </>
            : <> </>
          }
        </div>
        {this.state.isLoading &&
          <div className="loading">{this.renderMessage()}</div>
        }
      </div>
    );
  }
}

export default Frame;
