/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'

export default class Exercise_3_ViewingOvsBridgesFromPrismElement extends Component {
   render() {
      return (
         <div>
            <article role="article" aria-labelledby="ariaid-title1">
               <h1 className="title topictitle1" id="ariaid-title1">Exercise 3: Viewing OVS Bridges from Prism Element</h1>
               <div className="body conbody">
                  <p className="p">In this exercise, you will view OVS bridge configuration visually from the <span
                     className="ph uicontrol">Network</span> dashboard.</p>
                  <ol className="ol">
                     <li className="li">
                        <p className="p">Log on to Prism Element using the cluster Virtual IP address from your lab handout guide, and
                           the admin user with the password from your lab handout guide.</p>
                     </li>
                     <li className="li">
                        <p className="p">Select <span className="ph uicontrol">Network</span> dashboard and click one of the hosts.</p>
                     </li>
                     <li className="li">
                        <p className="p">Identify the bridges and their uplinks in the host networking diagram.</p>
                     </li>
                     <li className="li">
                        <p className="p">Click an active<span className="ph uicontrol">10G</span> port on the bridge <span
                           className="ph uicontrol">br0</span>.</p>
                     </li>
                     <li className="li">
                        <p className="p">Scroll down the panel to look at the port utilization and dropped packets.</p>
                     </li>
                  </ol>
               </div>
            </article>
         </div>
      )
   }
}
