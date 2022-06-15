/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'

export default class Exercise_2_ManagingBridgesAndUplinks extends Component {
   render() {
      return (
         <div>
            <article role="article" aria-labelledby="ariaid-title1">
               <h1 className="title topictitle1" id="ariaid-title1">Exercise 2: Managing Bridges and Uplinks</h1>
               <div className="body conbody">
                  <p className="p">In this exercise, you will modify the default network configuration. You will add a new bridge and
                     move any 1GbE NICs which may be connected to the default bridge to the new, added bridge.</p>
                  <ol className="ol">
                     <li className="li">
                        <p className="p">If you are not still logged on from the previous exercise, log on to one of your CVMs using the
                           IP address and credentials in the lab handout.</p>
                     </li>
                     <li className="li">
                        <p className="p">Create and verify a new OVS bridge<span className="ph uicontrol"> br1 </span>on all CVMs.</p>
                        <pre className="pre codeblock"><code>allssh manage_ovs --bridge_name br1 create_single_bridge</code></pre>
                        <pre className="pre codeblock"><code>allssh manage_ovs show_bridges</code></pre>
                     </li>
                     <li className="li">
                        <p className="p">Assign <span className="ph uicontrol">10g Ethernet</span> interfaces to the OVS bridge <span
                           className="ph uicontrol">br0</span> and verify their assignment.</p>
                        <pre className="pre codeblock"><code>allssh manage_ovs show_uplinks</code></pre>
                        <pre
                           className="pre codeblock"><code>allssh manage_ovs --bridge_name br0 --interfaces 10G --bond_mode active-backup update_uplinks</code></pre>
                        <pre className="pre codeblock"><code>allssh manage_ovs show_uplinks</code></pre>
                     </li>
                     <li className="li">
                        <p className="p">Assign <span className="ph uicontrol">1g ethernet</span> interfaces to the OVS bridge <span
                           className="ph uicontrol">br1</span> and verify their assignment.</p>
                        <pre
                           className="pre codeblock"><code>allssh manage_ovs --bridge_name br1 --bond_name bond1 --interfaces 1G --bond_mode active-backup update_uplinks</code></pre>
                        <pre className="pre codeblock"><code>allssh manage_ovs show_uplinks</code></pre>
                        <ul className="ul">
                           <li className="li">
                              <p className="p">Which interfaces are 1G Ethernet? __________________________________</p>
                           </li>
                           <li className="li">
                              <p className="p">Which interfaces are 10G Ethernet? _________________________________</p>
                           </li>
                        </ul>
                     </li>
                     <li className="li">
                        <p className="p">Confirm your answers by using the <span className="ph uicontrol">ethtool</span> command for each
                           interface:</p>
                        <pre className="pre codeblock"><code>hostssh ethtool eth&lt;N&gt;</code></pre>
                     </li>
                  </ol>
               </div>
            </article>
         </div>
      )
   }
}
