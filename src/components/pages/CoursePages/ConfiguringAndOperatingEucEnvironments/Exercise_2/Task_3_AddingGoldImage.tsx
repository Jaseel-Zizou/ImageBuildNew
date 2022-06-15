/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'

export default class AddingGoldImage extends Component {
   render() {
      return (
         <div>
            <article role="article" aria-labelledby="ariaid-title1">
               <h1 className="title topictitle1" id="ariaid-title1">Task 3: Adding a Gold Image</h1>
               <div className="body conbody">
                  <p className="p">In this exercise, you will update the image used to create desktops.</p>
                  <ol className="ol">
                     <li className="li">Navigate to the <span className="ph uicontrol">VM</span> dashboard.</li>
                     <li className="li">Verify the <span className="ph uicontrol">Windows-Base</span> VM is powered off.</li>
                     <li className="li">Select your DDC from the VM list and click <span className="ph uicontrol">Launch Console</span>.
                     </li>
                     <li className="li">Log in as the Domain Administrator. Refer to your lab handout for user credentials.</li>
                     <li className="li">Launch Citrix Studio from the start menu. If it's already running, click <span
                        className="ph uicontrol">Citrix Studio</span> in the Studio Navigation Pane.</li>
                     <li className="li">Click the <span className="ph uicontrol">2 (Machine Catalogs)</span> from the center panel.</li>
                     <li className="li">
                        <p className="p">Use the following table to complete the appropriate fields in the Machine Catalog Setup Wizard.
                        </p>
                        <table className="table frame-all">
                           <caption></caption>
                           <colgroup>
                              <col style={{ width: "157.25pt" }} />
                              <col style={{ width: "287.75pt" }} />
                           </colgroup>
                           <thead className="thead">
                              <tr className="row rowsep-1">
                                 <th className="entry colsep-1 rowsep-1 valign-middle"
                                    id="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__1">
                                    <p className="p"><span className="ph uicontrol">Machine Catalog Setup Wizard</span></p>
                                 </th>
                                 <th className="entry colsep-1 rowsep-1 valign-middle"
                                    id="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__2">
                                    <p className="p"><span className="ph uicontrol">Action</span></p>
                                 </th>
                              </tr>
                           </thead>
                           <tbody className="tbody">
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Introduction</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__2 ">
                                    <p className="p">Click <span className="ph uicontrol">Next</span></p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Operating System</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__2 ">
                                    <p className="p">Select <span className="ph uicontrol">Single-session OS</span> and click <span
                                       className="ph uicontrol">Next</span></p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Machine Management</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__2 ">
                                    <p className="p">Accept the defaults and click <span className="ph uicontrol">Next</span></p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Desktop Experience</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__2 ">
                                    <p className="p">Click <span className="ph uicontrol">I want users to connect to a new (random) desktop each
                                       time they log on</span> and click <span className="ph uicontrol">Next</span>.</p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Container</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__2 ">
                                    <p className="p">Select the container named <span className="ph uicontrol">default-container-######</span>
                                       and click <span className="ph uicontrol">Next</span>.</p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Master Image</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__2 ">
                                    <p className="p">Select &lt;your_initials&gt;-base snapshot and click <span
                                       className="ph uicontrol">Next</span>.</p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Virtual Machines</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__2 ">
                                    <div className="p">
                                       <ul className="ul">
                                          <li className="li">How many virtual machines do you want to create? <span
                                             className="ph uicontrol">2</span></li>
                                          <li className="li">Total memory (MB) on each machine: <span className="ph uicontrol">2048</span></li>
                                          <li className="li">Virtual CPUs: <span className="ph uicontrol">2</span></li>
                                          <li className="li">Cores per vCPU: <span className="ph uicontrol">1</span></li>
                                          <li className="li">Click <span className="ph uicontrol">Next</span>.</li>
                                       </ul>
                                    </div>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Computer Accounts</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__2 ">
                                    <p className="p">Leave <span className="ph uicontrol">Create new Active Directory accounts</span> selected
                                       and choose the <span className="ph uicontrol">Computers</span> OU for the default computer account
                                       location.</p>
                                    <p className="p">For the <span className="ph uicontrol">Account naming scheme</span> field, type the <span
                                       className="ph uicontrol">Deployed Desktop Name</span> string from your lab handout and click <span
                                          className="ph uicontrol">Next</span>.</p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Summary</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_685c4f04-e5ff-4bb1-a705-66ae6da32ddd__entry__2 ">
                                    <p className="p">Type <span className="ph uicontrol">Student Desktops</span> for <span
                                       className="ph uicontrol">Machine Catalog name</span> and click <span
                                          className="ph uicontrol">Finish</span>. This may take 10-15 minutes to complete.</p>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </li>
                  </ol>
               </div>
            </article>
         </div>
      )
   }
}
