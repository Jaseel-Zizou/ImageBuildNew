/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component, Fragment } from 'react'
import { MoreHorizontal, LogOut, ArrowLeft, ArrowRight, AlignJustify } from 'react-feather';
import { withRouter } from 'react-router-dom';


export class Header extends Component {

    state = {
        sidebar: true,
        rightSidebar: true,
        navMenus: false
    }

    toggle() {
        this.setState(prevState => ({
            navMenus: !prevState.navMenus
        }));
    }

    showRightSidebar = () => {
        if (this.state.rightSidebar) {
            this.setState({ rightSidebar: false })
            document.querySelector(".right-sidebar").classList.add('show');
        } else {
            this.setState({ rightSidebar: true })
            document.querySelector(".right-sidebar").classList.remove('show');
        }
    }

    goFull = () => {
        if ((document.fullScreenElement && document.fullScreenElement !== null) ||
            (!document.mozFullScreen && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }

    openCloseSidebar = () => {
        if (this.state.sidebar) {
            this.setState({ sidebar: false })
            document.querySelector(".page-main-header").classList.add('open');
            document.querySelector(".page-sidebar").classList.add('open');
        } else {
            this.setState({ sidebar: true })
            document.querySelector(".page-main-header").classList.remove('open');
            document.querySelector(".page-sidebar").classList.remove('open');
        }
    }

    logOut = (e) => {
        e.preventDefault();
        this.props.history.push(`${process.env.PUBLIC_URL}/auth/login`);
        localStorage.setItem("credentials", null)
        localStorage.setItem("accessToken", null)
    }

    render() {
        return (
            <Fragment>
                {/* open */}
                <div className="page-main-header " style={{ backgroundColor: "#1f1b24", marginBottom: 0 }}>
                    <div className="main-header-right row">
                        <div className="mobile-sidebar" >
                            <div className="media-body text-right switch-sm" >
                                <label className="switch" style={{ cursor: 'pointer' }}>
                                    <a onClick={this.openCloseSidebar}>
                                        <AlignJustify color="#86ABF3" />
                                    </a></label>
                            </div>
                        </div>

                        <div className="nav-right col ml-0 align-center" >
                            <label className="switch" >
                                <a
                                    style={{ color: "#fff", fontFamily: "Sans-serif, Arial", fontSize: "1.2rem" }}
                                >
                                    Nutanix LMS Dashboard
                                </a>
                            </label>
                        </div>

                        <div className="nav-right col">
                            <div className="d-lg-none mobile-toggle pull-right" onClick={() => this.toggle()}><MoreHorizontal /></div>
                        </div>
                        
                        <div className="nav-right col ml-0 pull-right" >
                            <div className="media-body text-right switch-sm" >
                                <label className="switch" style={{ cursor: 'pointer' }} >
                                    <a
                                        style={{ cursor: 'pointer' }}
                                        onClick={this.logOut}>
                                        <LogOut />
                                    </a>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default withRouter(Header)
