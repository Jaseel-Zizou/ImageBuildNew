import React, { Component, Fragment } from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { User, Unlock } from 'react-feather';
import { withRouter } from 'react-router-dom';

import axios from 'axios';
import Config from '../../Config';

export class LoginTabset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeShow: true,
            startDate: new Date(),
            "email": "",
            "password": "",
            isLoading: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillMount() {
        const user = localStorage.getItem("credentials");
        const isLoggedIn = user && JSON.parse(user) !== null && JSON.parse(user).email ? true : false;
        if (isLoggedIn) this.props.history.push(`${process.env.PUBLIC_URL}/home/CopyRight`);
    }

    clickActive = (event) => {
        document.querySelector(".nav-link").classList.remove('show');
        event.target.classList.add('show');
    }
    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    changeEmail = async (e) => {
        await this.setState({
            email: e.target.value
        });
    }
    changePassword = async (e) => {
        await this.setState({
            password: e.target.value
        });
    }

    routeChange = async (e) => {
        e.preventDefault()
        await this.setState({
            isLoading: true
        })
        const requestBody = {
            "email": this.state.email,
            "password": this.state.password
        }
        const url = `${Config.hostName}/user/login`;
        const data = await axios.post(url, requestBody).then(async response => {
            if (!response.data.success) {
                await this.setState({
                    isLoading: false
                })
                return alert(response.data.error)
            }
            else {
                localStorage.setItem("credentials", JSON.stringify(response.data.data[0]))
                localStorage.setItem("accessToken", response.data.data[0].token)
                setTimeout(async () => {
                    await this.setState({
                        isLoading: false
                    })
                    this.props.history.push(`${process.env.PUBLIC_URL}/home/CopyRight`);
                }, 2000);
            }
        }).catch(err => {
            alert(err)
            this.setState({
                isLoading: false
            })
        })
    }
    render() {
        return (
            <div>
                <Fragment>
                    <Tabs>
                        <TabList className="nav nav-tabs tab-coupon" >
                            <Tab className="nav-link" onClick={(e) => this.clickActive(e)}><User />Login</Tab>
                        </TabList>

                        <TabPanel>
                            <form className="form-horizontal auth-form">
                                <div className="form-group">
                                    <input value={this.state.email} onChange={this.changeEmail} required="" name="login[username]" type="email" className="form-control" placeholder="Username" id="exampleInputEmail1" />
                                </div>
                                <div className="form-group">
                                    <input value={this.state.password} onChange={this.changePassword} required="" name="login[password]" type="password" className="form-control" placeholder="Password" />
                                </div>

                                <div className="form-button">
                                    <button className="btn btn-primary" disabled={this.state.isLoading} onClick={this.routeChange}>
                                        {
                                            this.state.isLoading ?
                                                <span><i className="fa fa-refresh fa-spin" style={{ marginRight: '5px' }} /> Signing In... </span> :
                                                <span><i className="fa fa-save" style={{ marginRight: '5px' }} /> Sign In </span>
                                        }
                                    </button>
                                </div>

                            </form>
                        </TabPanel>
                    </Tabs>
                </Fragment>
            </div>
        )
    }
}

export default withRouter(LoginTabset)

