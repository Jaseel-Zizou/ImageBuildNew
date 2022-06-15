import React, { Component } from 'react'
import Sidebar from './common/sidebar_components/sidebar';
import Footer from './common/footer';
import Header from './common/header_components/header';
import { withRouter } from 'react-router';
export class App extends Component {

    render() {
        return (
            <div>
                <div className="page-wrapper" >
                    <Header />
                    <div className="page-body-wrapper" style={{ marginTop: "0!important" }}>
                        <Sidebar />
                        <div className="page-body">
                            {this.props.children}
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(App);
