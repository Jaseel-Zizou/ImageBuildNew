/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'

export default class Task_4_AddingDeliveryGroup extends Component {
   render() {
      return (
         <div>
            <article role="article" aria-labelledby="ariaid-title1">
               <h1 className="title topictitle1" id="ariaid-title1">Task 4: Adding a Delivery Group</h1>
               <div className="body conbody">
                  <p className="p">In this task, you will add a delivery group to your Citrix Environment.</p>
                  <ol className="ol">
                     <li className="li">If needed, connect to your Citrix Deliver Controller and launch Citrix Studio.</li>
                     <li className="li">In the center panel, click <span className="ph uicontrol">3 (Delivery Groups)</span>.</li>
                     <li className="li">
                        <p className="p">Use the table below to complete the appropriate fields in the Create Delivery Group Wizard.</p>
                        <table className="table frame-all">
                           <caption></caption>
                           <colgroup>
                              <col style={{ width: "157.25pt" }} />
                              <col style={{ width: "287.75pt" }} />
                           </colgroup>
                           <thead className="thead">
                              <tr className="row rowsep-1">
                                 <th className="entry colsep-1 rowsep-1 valign-middle"
                                    id="concept.dita_9d7f97c5-1ea2-408b-b247-ab493640c961__entry__1">
                                    <p className="p"><span className="ph uicontrol">Create Delivery Group Wizard</span></p>
                                 </th>
                                 <th className="entry colsep-1 rowsep-1 valign-middle"
                                    id="concept.dita_9d7f97c5-1ea2-408b-b247-ab493640c961__entry__2">
                                    <p className="p"><span className="ph uicontrol">Action</span></p>
                                 </th>
                              </tr>
                           </thead>
                           <tbody className="tbody">
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_9d7f97c5-1ea2-408b-b247-ab493640c961__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Introduction</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_9d7f97c5-1ea2-408b-b247-ab493640c961__entry__2 ">
                                    <p className="p">Click <span className="ph uicontrol">Next</span>.</p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_9d7f97c5-1ea2-408b-b247-ab493640c961__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Machines</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_9d7f97c5-1ea2-408b-b247-ab493640c961__entry__2 ">
                                    <p className="p"><span className="ph uicontrol">Student Desktops</span> should be pre-selected. If it is
                                       not, select it now.</p>
                                    <p className="p"><span className="ph uicontrol">Choose the number of machines for this Delivery
                                       Group:</span> Increase to <span className="ph uicontrol">2</span></p>
                                    <p className="p">Click <span className="ph uicontrol">Next</span>.</p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_9d7f97c5-1ea2-408b-b247-ab493640c961__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Users</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_9d7f97c5-1ea2-408b-b247-ab493640c961__entry__2 ">
                                    <p className="p">Accept default values and click <span className="ph uicontrol">Next</span>.</p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_9d7f97c5-1ea2-408b-b247-ab493640c961__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Applications</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_9d7f97c5-1ea2-408b-b247-ab493640c961__entry__2 ">
                                    <p className="p">Accept default values and click <span className="ph uicontrol">Next</span>.</p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_9d7f97c5-1ea2-408b-b247-ab493640c961__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Desktop Assignment Rules</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_9d7f97c5-1ea2-408b-b247-ab493640c961__entry__2 ">
                                    <p className="p">Click <span className="ph uicontrol">Add...</span></p>
                                    <ol className="ol" type="a">
                                       <li className="li"><span className="ph uicontrol">Display name</span>: Type <span className="ph uicontrol">All
                                          Users</span></li>
                                       <li className="li">Ensure <span className="ph uicontrol">Allow everyone with access to this Delivery Group
                                          to use a desktop</span> is selected.</li>
                                       <li className="li">Accept the default values of all other settings on this page</li>
                                       <li className="li">Click <span className="ph uicontrol">OK</span>.</li>
                                       <li className="li">Click <span className="ph uicontrol">Next</span>.</li>
                                    </ol>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_9d7f97c5-1ea2-408b-b247-ab493640c961__entry__1 ">
                                    <p className="p"><span className="ph uicontrol">Summary</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle"
                                    headers="concept.dita_9d7f97c5-1ea2-408b-b247-ab493640c961__entry__2 ">
                                    <p className="p">Type <span className="ph uicontrol">Student-Desktops</span> for the <span
                                       className="ph uicontrol">Delivery Group name</span> and click <span
                                          className="ph uicontrol">Finish</span>.</p>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </li>
                     <li className="li">In the <span className="ph uicontrol">Studio Navigation Pane</span>, click <span
                        className="ph uicontrol">Delivery Groups</span>.
                        <div className="note note note_note"><span className="note__title">Note:</span> The following steps ensure that both
                           of your virtual desktops are powered on at all times.</div>
                     </li>
                     <li className="li">Your Delivery Group is highlighted in blue. <span className="ph uicontrol">Click Edit Delivery
                        Group</span>.
                        <div className="note note note_note"><span className="note__title">Note:</span> For this training class, if you see
                           a message in Citrix indicating a VM that is not registered, you can ignore the error.</div>
                     </li>
                     <li className="li">Click <span className="ph uicontrol">Power Management.</span></li>
                     <li className="li">In the Machines table, drag the left edge of the blue line all the way to the left, then drag
                        the right edge of the blue line all the way to the right , then drag the top edge of the blue line upwards
                        so that it includes 2 machines.</li>
                     <li className="li">Click <span className="ph uicontrol">OK</span>.</li>
                  </ol>
               </div>
            </article>
         </div>
      )
   }
}
