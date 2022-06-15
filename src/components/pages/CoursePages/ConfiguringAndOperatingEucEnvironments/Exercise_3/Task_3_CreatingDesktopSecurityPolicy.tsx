import React, { Component } from 'react'

export default class Task_3_CreatingDesktopSecurityPolicy extends Component {
   render() {
      return (
         <div>
            <article role="article" aria-labelledby="ariaid-title1">
               <h1 className="title topictitle1" id="ariaid-title1">Task 3: Creating a Desktop Security Policy</h1>
               <div className="body conbody">
                  <p className="p">In this task, you will create a policy to protect your VDI desktops.</p>
                  <ol className="ol">
                     <li className="li">In Prism Central, select the <span className="ph uicontrol">Entities</span> menu, then choose <span
                        className="ph uicontrol">Policies</span> and <span className="ph uicontrol">Security Policies</span>.</li>
                     <li className="li">Click <span className="ph uicontrol">Create Security Policy</span>, accept the default selection,
                        then <span className="ph uicontrol">Create</span>.</li>
                     <li className="li">Type the information in the following table, and leave the rest of the fields default:
                        <table className="table frame-all">
                           <caption></caption>
                           <colgroup>
                              <col style={{ width: "157.25pt" }} />
                              <col style={{ width: "287.75pt" }} />
                           </colgroup>
                           <tbody className="tbody">
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1">
                                    <p className="p">Name</p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1">
                                    <p className="p"><span className="ph uicontrol">&lt;your_initials&gt;-Desktops</span></p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1">
                                    <p className="p">Purpose</p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1">
                                    <p className="p"><span className="ph uicontrol">Restrict unnecessary traffic between desktops</span></p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1">
                                    <p className="p">Secure this app</p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1">
                                    <p className="p"><span className="ph uicontrol">AppType:&lt;your_initials&gt;-Desktop</span></p>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </li>
                     <li className="li">Click <span className="ph uicontrol">Next</span>.</li>
                     <li className="li">If prompted, click <span className="ph uicontrol">OK, Got it!</span> on the Securing an App dialog
                        box.</li>
                     <li className="li">Near the center of the web page, click <span className="ph uicontrol">Set Rules on App Tiers,
                        instead</span>.</li>
                     <li className="li">Click <span className="ph uicontrol">+ Add Tier</span>.</li>
                     <li className="li">Select <span className="ph uicontrol">AppTier:Default</span> from the list of options.</li>
                     <li className="li">Allow all inbound traffic by changing <span className="ph uicontrol">Inbound from Whitelist
                        only</span> (on the left side of the window) to <span className="ph uicontrol">Allow All</span>.</li>
                     <li className="li">Ensure that Outbound Traffic is set to <span className="ph uicontrol">Allow All</span> to allow all
                        outbound traffic.</li>
                     <li className="li">Click <span className="ph uicontrol">Set Rules within App</span>.
                        <div className="note note note_note"><span className="note__title">Note:</span> This defines how machines within the
                           specified AppTier communicate.</div>
                     </li>
                     <li className="li">Click <span className="ph uicontrol">AppTier:Default</span> and select <span
                        className="ph uicontrol">No</span> to prevent communication between VMs in this tier.</li>
                     <li className="li">Click <span className="ph uicontrol">Next</span> and review the security policy.</li>
                     <li className="li">Click <span className="ph uicontrol">Save and Monitor</span>.</li>
                  </ol>
               </div>
            </article>
         </div>
      )
   }
}
