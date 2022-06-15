/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'

export default class Exercise_4_ConfiguringBondModeForTrafficLoadBalancing extends Component {
   render() {
      return (
         <div>
            <article role="article" aria-labelledby="ariaid-title1">
               <h1 className="title topictitle1" id="ariaid-title1">Exercise 4: Configuring the Bond Mode for Traffic Load-Balancing
               </h1>
               <div className="body conbody">
                  <p className="p">In this exercise, you will configure the bond mode for OVS bridges.</p>
                  <ol className="ol">
                     <li className="li">
                        <p className="p">From a cluster CVM, identify the default bond mode.</p>
                        <pre className="pre codeblock"><code>hostssh ovs-appctl bond/show br0-up | grep bond_mode</code></pre>
                     </li>
                     <li className="li">
                        <p className="p">Configure the bond mode to <span className="ph uicontrol">balance-</span><span
                           className="ph uicontrol">slb</span>.</p>
                        <pre className="pre codeblock"><code>hostssh ovs-vsctl set port br0-up bond_mode=balance-slb</code></pre>
                     </li>
                     <li className="li">
                        <p className="p">Configure rebalance interval from 10 seconds (default) to <span className="ph uicontrol">60
                           seconds</span>.</p>
                        <pre
                           className="pre codeblock"><code>hostssh ovs-vsctl set port br0-up other_config:bond-rebalance-interval=60000</code></pre>
                     </li>
                     <li className="li">
                        <p className="p">Verify the new bond mode and the rebalance interval.</p>
                        <pre className="pre codeblock"><code>hostssh ovs-appctl bond/show br0-up</code></pre>
                     </li>
                  </ol>
                  <p className="p">How much network throughput potential is available to a single VM in Active/Standby vs. Balance-SLB
                     (bond) mode?</p>
                  <p className="p">Which OVS switch feature must be configured before implementing balance-tcp?</p>
                  <div className="note note note_note"><span className="note__title">Note:</span> <span className="ph uicontrol">WARNING: Do
                     not configure the bond mode to balance-tcp.</span> This could potentially break your lab environment.</div>
               </div>
            </article>
         </div>
      )
   }
}
