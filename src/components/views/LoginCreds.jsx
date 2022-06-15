import React, { Component } from 'react'
import {
   getClusterCredentials,
} from './NutanixClusterService.js';
export default class loginCreds extends Component {
   constructor(props) {
      super(props);
      this.state = {
         credentials: {}
      }
   }

   async componentDidMount() {
      const creds = getClusterCredentials()
      if (creds !== null) {
         await this.setState({
            credentials: JSON.parse(creds)
         })
      }
   }

   render() {
      // const { credentials } = this.state;
      const credentials = { 'cluster': { 'requestId': 'a03a0485-ab2b-488a-aa16-736411b9dff9', 'hibernation': 'RUNNING', 'name': 'plugin-16-24', 'rdmId': '60bf0ccb8a4576091a99552c' }, 'credentials': { 'pe': { 'username': 'admin', 'password': 'Nutanix.123' } } }
      return (
         <div>
            <h5>
               Please use the following credentials to access Prism Dashboard.
            </h5>
            {credentials !== null &&
               <span>
                  url : https://34.145.65.158:9440 <br />
                  username : {credentials.credentials.pe.username} <br />
                  password : {credentials.credentials.pe.password} <br />
               </span>

            }
         </div>
      )
   }
}
