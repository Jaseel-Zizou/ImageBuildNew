/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'
import "../../../../../assets/styles/dita-ot-doc.css"
import "../../../../../assets/styles/MainCourse.css"

export default class InstallingVda extends Component {
   render() {
      return (
         <div>
            <article role="article" aria-labelledby="ariaid-title1">
               <h1 className="title topictitle1" id="ariaid-title1">Task 1: Installing the VDA</h1>
               <div className="body conbody">
                  <p className="p">In this task, you are going to install the VDA on a Windows desktop.</p>
                  <ol className="ol">
                     <li className="li">If you are currently logged on to Prism Element, continue with Step 2. if not, log on now.</li>
                     <li className="li">Navigate to the <span className="ph uicontrol">VM</span> dashboard.</li>
                     <li className="li">Click the <span className="ph uicontrol">Windows-Base</span> VM. If it is not powered on, click
                        <span className="ph uicontrol">Power On</span>, then click <span className="ph uicontrol">Launch Console</span>.
                     </li>
                     <li className="li">Sign in using the credentials from your lab handout.</li>
                     <li className="li">In the upper-right of the console window, click the <span className="ph uicontrol">Mount ISO</span>
                        button. Click the <span className="ph uicontrol">ISO File</span> drop-down menu, and select the <span
                           className="ph uicontrol">Citrix VDA ISO</span>, then click <span className="ph uicontrol">Mount</span>.
                        <div className="note note note_note"><span className="note__title">Note:</span> The name of the ISO may not match
                           exactly, but it should be obvious which is the correct ISO.</div>
                     </li>
                     <li className="li">Open File Explorer and select the <span className="ph uicontrol">CD Drive (D:) CVAD 1912</span>.
                     </li>
                     <li className="li">Double-click <span className="ph uicontrol">AutoSelect</span>.</li>
                     <li className="li">If prompted, select <span className="ph uicontrol">Yes</span> to <span className="ph uicontrol">"Do you
                        want to allow this app to make changes to your device?"</span></li>
                     <li className="li">Click <span className="ph uicontrol">Start</span> to the right of <span
                        className="ph uicontrol">Virtual Apps and Desktops</span>.</li>
                     <li className="li">On the next page, click <span className="ph uicontrol">Prepare Machines and Images</span> in the
                        upper-right area.</li>
                     <li className="li">
                        <p className="p">Use the following table to fill out the appropriate fields.</p>
                        <table className="table frame-all">
                           <caption></caption>
                           <colgroup>
                              <col style={{ width: "157.25pt" }} />
                              <col style={{ width: "287.75pt" }} />
                           </colgroup>
                           <thead className="thead">
                              <tr className="row rowsep-1">
                                 <th className="entry colsep-1 rowsep-1 valign-middle"
                                    id="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__1">
                                    <p className="p"><span className="ph uicontrol">Install UI Page</span></p>
                                 </th>
                                 <th className="entry colsep-1 rowsep-1 valign-middle"
                                    id="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__2">
                                    <p className="p"><span className="ph uicontrol">Action</span></p>
                                 </th>
                              </tr>
                           </thead>
                           <tbody className="tbody">
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Environment</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__2 ">
                                    <p className="p">Create a master MCS image, and click <span className="ph uicontrol">Next</span>.</p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Core Components</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__2 ">
                                    <p className="p">Accept the default values, and click <span className="ph uicontrol">Next</span></p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Additional Components</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__2 ">
                                    <p className="p">Accept the default values, and click <span className="ph uicontrol">Next</span></p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Delivery Controller</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__2 ">
                                    <div className="p">
                                       <ul className="ul">
                                          <li className="li">Select <span className="ph uicontrol">Do it manually</span> from the drop-down menu.
                                          </li>
                                          <li className="li">Type the Citrix Controller FQDN (refer to your lab handout).</li>
                                          <li className="li">Click <span className="ph uicontrol">Test Connection</span>. If the test succeeds,
                                             click <span className="ph uicontrol">Add.</span></li>
                                          <li className="li">Click <span className="ph uicontrol">Next</span></li>
                                       </ul>
                                    </div>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Features</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__2 ">
                                    <p className="p">Verify that <span className="ph uicontrol">Optimize Performance</span> is selected, and
                                       click <span className="ph uicontrol">Next</span></p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Firewall</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__2 ">
                                    <p className="p">Verify that <span className="ph uicontrol">Automatically</span> is selected and click <span
                                       className="ph uicontrol">Next</span>.</p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Summary</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__2 ">
                                    <p className="p">Review the configuration and click <span className="ph uicontrol">Install</span>. The
                                       installation runs approximately 15 minutes and requires a reboot.</p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Diagnostics</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__2 ">
                                    <p className="p">Uncheck <span className="ph uicontrol">Collect diagnostic information</span> and click
                                       <span className="ph uicontrol">Next</span>.</p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Finish</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_1a7284e5-c191-4c74-a945-7b79c34d27cb__entry__2 ">
                                    <p className="p">Leave the <span className="ph uicontrol">Restart machine</span> box checked, and click
                                       <span className="ph uicontrol">Finish</span>.</p>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </li>
                     <li className="li">Select the <span className="ph uicontrol">Windows-Base VM</span> from the VM table and click <span
                        className="ph uicontrol">Update</span>.</li>
                     <li className="li">Scroll down to the <span className="ph uicontrol">Disks</span> section, and click the eject button
                        next to the CD-ROM device. Click <span className="ph uicontrol">Save</span>.</li>
                  </ol>
               </div>
            </article>
         </div>
      )
   }
}
