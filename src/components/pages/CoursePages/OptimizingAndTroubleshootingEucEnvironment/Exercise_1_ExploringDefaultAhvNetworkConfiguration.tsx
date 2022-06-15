/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'

export default class Exercise_1_ExploringDefaultAhvNetworkConfiguration extends Component {
   render() {
      return (
         <div>
            <article role="article" aria-labelledby="ariaid-title1">
               <h1 className="title topictitle1" id="ariaid-title1">Exercise 1: Exploring the Default AHV Network Configuration</h1>
               <div className="body conbody">
                  <p className="p">In this exercise, you will look at using <span className="ph uicontrol">manage_ovs</span> to view the
                     OVS bridges in an AHV hypervisor.</p>
                  <ol className="ol">
                     <li className="li">
                        <p className="p">Log on to one of your CVMs using the IP address and credentials in the lab handout.</p>
                     </li>
                     <li className="li">
                        <p className="p">Show currently configured bridges:</p>
                        <pre className="pre codeblock"><code>allssh manage_ovs show_bridges</code></pre>
                     </li>
                     <li className="li">
                        <p className="p">Show available physical interfaces on the AHV hosts:</p>
                        <pre className="pre codeblock"><code>allssh manage_ovs show_interfaces</code></pre>
                     </li>
                     <li className="li">
                        <p className="p">Show the uplinks on the bridges:</p>
                        <pre className="pre codeblock"><code>allssh manage_ovs show_uplinks</code></pre>
                     </li>
                  </ol>
                  <div className="note note note_note"><span className="note__title">Note:</span> Any interfaces which are displayed with
                     a Link state equal to False are most likely not plugged into a physical switch. You may see this for some
                     links in your training environment and you should feel free to ask your trainer if this is the case in your
                     training environment.</div>
                  <div className="note note note_note"><span className="note__title">Note:</span> This exercise verifies that by default
                     an OVS bridge <span className="ph uicontrol">br0</span> is created on all AHV hosts and all the physical
                     interfaces on a host&nbsp;are attached to it.</div>
               </div>
            </article>
         </div>
      )
   }
}
