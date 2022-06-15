import React, { Component } from 'react'


export class User_panel extends Component {
    state = { user: {} }
    componentDidMount = async () => {

        const user = JSON.parse(localStorage.getItem('user'));
        await this.setState({
            user: user
        })
    }


    render() {
        const { user } = this.state

        return (
            <div>
                <div className="sidebar-user text-center">
                    <h6 className="mt-3 f-14">{user.firstName}{' '}{user.lastName}</h6>
                    <p>{user.role}</p>
                </div>
            </div>
        )
    }
}

export default User_panel

