/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'

export default class Task_1_RecoveringFromFailure extends Component {
   render() {
      return (
         <div>
            <article role="article" aria-labelledby="ariaid-title1">
               <h1 className="title topictitle1" id="ariaid-title1">Task 1: Recovering from a Failure</h1>
               <div className="body conbody">
                  <ol className="ol">
                     <li className="li">Log on to Prism Element and navigate to the <span className="ph uicontrol">VM</span> dashboard.
                     </li>
                     <li className="li">Note which host the first deployed virtual desktop is on.</li>
                     <li className="li">Using the lab handout, find the IPMI address corresponding to the node the VM is running on.
                     </li>
                     <li className="li">Open a new tab in your browser and enter the IP address of the IPMI interface for the node the
                        first deployed virtual desktop is running on. Log on to IPMI using the IPMI username and password from your
                        lab handout.</li>
                     <li className="li">Click <span className="ph uicontrol">Power Down</span> (You may need to scroll down the page to see
                        this button). </li>
                     <li className="li">In Prism Element, change to the <span className="ph uicontrol">Hardware</span> dashboard from the
                        drop-down menu and change to <span className="ph uicontrol">Table</span> view, and the <span
                           className="ph uicontrol">Host</span> tab. You should see the host powered down, if not, wait a few minutes,
                        and refresh the page.</li>
                     <li className="li">Wait 5 minutes, then change to the <span className="ph uicontrol">VM</span> dashboard in Prism
                        Element. Is the VM on the same host?
                        <div className="note note note_note"><span className="note__title">Note:</span> If you are connected to Prism
                           Element on the node you powered down, you must reconnect your web browser to either the cluster virtual IP
                           or another CVM to manage the cluster.</div>
                     </li>
                     <li className="li">Switch back to the <span className="ph uicontrol">IPMI</span> browser tab and click <span
                        className="ph uicontrol">Power On</span> (you may need to scroll down the page to see this button).</li>
                     <li className="li">Wait 5 minutes, then refresh the VM dashboard in Prism Element. Is the VM on the original host?
                        <div className="note note note_note"><span className="note__title">Note:</span> Change to the <span
                           className="ph uicontrol">Home</span> dashboard and wait for the cluster <span className="ph uicontrol">Data
                              Resiliency Status</span> to show <span className="ph uicontrol">OK</span> (not <span
                                 className="ph uicontrol">Critical</span>) before continuing to the next lab exercise.</div>
                     </li>
                  </ol>
               </div>
            </article>
         </div>
      )
   }
}
