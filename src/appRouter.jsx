import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./index.scss";
import App from "./components/app";
import Main from "./components/views/Main";
import Frame from "./components/views/Frame";
import AssignCaptain from "./components/views/ListCourses";
import AddCourse from "./components/views/AddCourse";
import Login from './components/auth/login';
import { getUser } from "./api/user"
import PrivateRoute from "./PrivateRoute.js";

class appRouter extends Component {
    state = {
        loading: true,
        user: null
    }

    componentWillMount = async () => {
        const windowUrl = window.location.search;
        const params = new URLSearchParams(windowUrl).get("accessToken");
        if (params) {
            localStorage.setItem("accessToken", params)
            localStorage.setItem("isXreadyUser", true)
            const user = await getUser()
            await this.setState({
                loading: false,
                user
            })
        }
        else {
            await this.setState({
                loading: false
            })
        }
    }

    render() {
        if (this.state.loading) {
            return <div>Loading ...</div>
        }
        return (
            <BrowserRouter basename={'/'}>
                <Switch>
                    <Route exact path={`${process.env.PUBLIC_URL}/auth/login`} component={Login} />
                    <PrivateRoute data={this.state.user} exact path={`${process.env.PUBLIC_URL}/frame`} component={Frame} />
                    <PrivateRoute data={this.state.user} exact path={`${process.env.PUBLIC_URL}/admin/manage/courses`} component={AssignCaptain} />
                    <PrivateRoute data={this.state.user} exact path={`${process.env.PUBLIC_URL}/admin/manage/courses/add`} component={AddCourse} />
                    <PrivateRoute data={this.state.user} exact path={`${process.env.PUBLIC_URL}/`} component={() => <Redirect to="/home/CopyRight" />} />
                    <App>
                        <PrivateRoute data={this.state.user} exact path={`${process.env.PUBLIC_URL}/home/:id`} component={Main} />
                    </App>
                </Switch>
            </BrowserRouter>
        )
    }
}


export default appRouter
