/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'

export default class Exercise_5_ConfiguringVlan extends Component {
   render() {
      return (
         <div>
            <article role="article" aria-labelledby="ariaid-title1">
               <h1 className="title topictitle1" id="ariaid-title1">Exercise 5: Configuring a VLAN </h1>
               <div className="body conbody">
                  <ol className="ol">
                     <li className="li">
                        <p className="p">If you are not logged on to Prism Element, log on.</p>
                     </li>
                     <li className="li">
                        <p className="p">Select the <span className="ph uicontrol">Settings/Gear</span> icon and click <span
                           className="ph uicontrol">Network Configuration</span>.</p>
                     </li>
                     <li className="li">
                        <p className="p">In the <span className="ph uicontrol">Network Configuration</span> window, click <span
                           className="ph uicontrol">+ Create Network</span>.</p>
                     </li>
                     <li className="li">
                        <p className="p">In the <span className="ph uicontrol">Create Network</span> dialog window,&nbsp;enter the <span
                           className="ph uicontrol">VLAN Name</span> from your lab handout in the <span className="ph uicontrol">Network
                              Name</span> field&nbsp;and the <span className="ph uicontrol">VLAN Number</span> from your lab handout in
                           the <span className="ph uicontrol">VLAN ID</span> field. Do not select the <span className="ph uicontrol">Enable
                              IP address management</span> check box.</p>
                     </li>
                     <li className="li">
                        <p className="p">Click <span className="ph uicontrol">Save</span>.</p>
                        <p className="p">The <span className="ph uicontrol">Create Network</span> dialog window does not allow you to select
                           a bridge. On which bridge is the network created?</p>
                     </li>
                     <li className="li">
                        <p className="p">Log on to a cluster CVM.</p>
                     </li>
                     <li className="li">
                        <p className="p">Enter the <span className="ph uicontrol">acli</span> shell.</p>
                     </li>
                     <li className="li">
                        <p className="p">Create a network on the bridge <span className="ph uicontrol">br1</span>.</p>
                        <pre className="pre codeblock"><code>net.create VLAN999 vswitch_name=br1 vlan=999</code></pre>
                     </li>
                     <li className="li">
                        <p className="p">Retrieve VLAN999 configuration:</p>
                        <code className="ph codeph">net.get VLAN999</code>&nbsp;
                     </li>
                     <li className="li">
                        <p className="p">List all networks:</p>
                        <code className="ph codeph">net.list</code>&nbsp;
                     </li>
                  </ol>
               </div>
            </article>
         </div>
      )
   }
}
