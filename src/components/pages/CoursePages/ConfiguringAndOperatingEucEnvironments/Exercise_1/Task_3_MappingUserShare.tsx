/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'

export default class Task_3_MappingUserShare extends Component {
   render() {
      return (
         <div>
            <article role="article" aria-labelledby="ariaid-title1">
               <h1 className="title topictitle1" id="ariaid-title1">Task 3: Mapping a User Share</h1>
               <div className="body conbody">
                  <p className="p">In this task, you will map the user share that you created in the previous exercise to use for
                     virtual desktops.</p>
                  <ol className="ol">
                     <li className="li">Navigate to the <span className="ph uicontrol">VM</span> dashboard and switch to <span
                        className="ph uicontrol">Table</span> view if needed.</li>
                     <li className="li">Select the Citrix Management server (its name is listed in the lab handout) and click <span
                        className="ph uicontrol">Power On</span>, then click <span className="ph uicontrol">Launch Console</span>.
                        <div className="note note note_note"><span className="note__title">Note:</span> You may need to disable the browser
                           pop-up blocker for the VM console window to appear.</div>
                     </li>
                     <li className="li">Log on to the Citrix Management server using the credentials from your lab handout.</li>
                     <li className="li">Open File Explorer (previously Windows Explorer) and enter <span
                        className="ph uicontrol">\\FS-&lt;your_initials&gt;</span> in the address field.</li>
                     <li className="li">Right click on the file share, and click <span className="ph uicontrol">Properties</span>.</li>
                     <li className="li">Select the <span className="ph uicontrol">Security</span> tab and click <span
                        className="ph uicontrol">Advanced</span>.</li>
                     <li className="li">Click <span className="ph uicontrol">Add</span> to add a new user/group, then click <span
                        className="ph uicontrol">Select a principal</span>.</li>
                     <li className="li">Type <span className="ph uicontrol">Everyone</span> in the object name field, then click <span
                        className="ph uicontrol">Check Names</span>. Click <span className="ph uicontrol">OK</span>.</li>
                     <li className="li">On the <span className="ph uicontrol">Permissions</span> field, check the <span
                        className="ph uicontrol">Full Control</span> box, then click <span className="ph uicontrol">OK</span>.</li>
                     <li className="li">Click <span className="ph uicontrol">OK</span> on the <span className="ph uicontrol">Advanced Security
                        Sessions</span> page, on the <span className="ph uicontrol">Security Settings</span> page, then again on the
                        <span className="ph uicontrol">Properties</span> window.</li>
                     <li className="li">Launch Citrix Studio by clicking the <span className="ph uicontrol">Windows</span> menu, then <span
                        className="ph uicontrol">Citrix</span>, and <span className="ph uicontrol">Citrix Studio</span>. If you receive a
                        pop-up, click <span className="ph uicontrol">Yes</span>. After Citrix studio starts, click <span
                           className="ph uicontrol">Policies</span>.
                        <div className="note note note_note"><span className="note__title">Note:</span> Citrix Studio may take several
                           minutes to start.</div>
                     </li>
                     <li className="li">If you get the Citrix Policies Welcome window, click <span className="ph uicontrol">Close</span>.
                        Right-click <span className="ph uicontrol">Policies</span> and click <span className="ph uicontrol">Create
                           Policy</span>.</li>
                     <li className="li">
                        <p className="p">Use the following table to create the policies in Citrix.</p>
                        <table className="table frame-all">
                           <caption></caption>
                           <colgroup>
                              <col style={{ width: "157.25pt" }} />
                              <col style={{ width: "287.75pt" }} />
                           </colgroup>
                           <thead className="thead">
                              <tr className="row rowsep-1">
                                 <th className="entry colsep-1 rowsep-1 valign-middle"
                                    id="concept.dita_6e0d4b40-5283-4627-bb28-65fc2f3f2977__entry__1">
                                    <p className="p"><span className="ph uicontrol">Create Policy Wizard</span></p>
                                 </th>
                                 <th className="entry colsep-1 rowsep-1 valign-middle"
                                    id="concept.dita_6e0d4b40-5283-4627-bb28-65fc2f3f2977__entry__2">
                                    <p className="p"><span className="ph uicontrol">Action</span></p>
                                 </th>
                              </tr>
                           </thead>
                           <tbody className="tbody">
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_6e0d4b40-5283-4627-bb28-65fc2f3f2977__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Settings</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1"
                                    headers="concept.dita_6e0d4b40-5283-4627-bb28-65fc2f3f2977__entry__2 ">
                                    <div className="p">
                                       <ul className="ul">
                                          <li className="li">Click the <span className="ph uicontrol">All Settings</span> drop-down menu.</li>
                                          <li className="li">Select <span className="ph uicontrol">Profile Management</span>.</li>
                                          <li className="li">
                                             <p className="p">Type <span className="ph uicontrol">Path to user store</span> in the Search Box and
                                                press the enter key.</p>
                                             <ul className="ul">
                                                <li className="li">Click <span className="ph uicontrol">Select</span>.</li>
                                                <li className="li">If <span className="ph uicontrol">Enabled</span> is not selected, click to select
                                                   <span className="ph uicontrol">Enabled</span> and type the file path: <span
                                                      className="ph uicontrol">\\fs-&lt;your_initials&gt;\home\%USERNAME%\!CTX_OSNAME!!CTX_OSBITNESS!</span>
                                                </li>
                                                <li className="li">Click <span className="ph uicontrol">OK</span>, then click <span
                                                   className="ph uicontrol">Next</span>.</li>
                                             </ul>
                                          </li>
                                       </ul>
                                    </div>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_6e0d4b40-5283-4627-bb28-65fc2f3f2977__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Users and Machines</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_6e0d4b40-5283-4627-bb28-65fc2f3f2977__entry__2 ">
                                    <p className="p">Accept the default values and click <span className="ph uicontrol">Next</span></p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_6e0d4b40-5283-4627-bb28-65fc2f3f2977__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Summary</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_6e0d4b40-5283-4627-bb28-65fc2f3f2977__entry__2 ">
                                    <div className="p">
                                       <ul className="ul">
                                          <li className="li">Type <span className="ph uicontrol">&lt;your_initials&gt;-UPM</span> for the Policy
                                             Name</li>
                                          <li className="li">Click the <span className="ph uicontrol">Enable policy</span> check box.</li>
                                          <li className="li">Click <span className="ph uicontrol">Finish</span></li>
                                       </ul>
                                    </div>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </li>
                     <li className="li">Minimize Citrix Studio.</li>
                  </ol>
               </div>
            </article>
         </div>
      )
   }
}
