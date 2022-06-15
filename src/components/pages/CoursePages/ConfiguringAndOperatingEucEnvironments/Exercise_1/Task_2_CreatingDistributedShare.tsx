import React, { Component } from 'react'

export default class Task_2_CreatingDistributedShare extends Component {
   render() {
      return (
         <div>
            <article role="article" aria-labelledby="ariaid-title1">
               <h1 className="title topictitle1" id="ariaid-title1">Task 2: Creating a Distributed Share</h1>
               <div className="body conbody">
                  <p className="p">In this task, you will create a distributed share.</p>
                  <ol className="ol">
                     <li className="li">
                        <p className="p">Log on to Prism Element if you are not already.</p>
                     </li>
                     <li className="li">
                        <p className="p">Select the <span className="ph uicontrol">File Server</span> dashboard and click <span
                           className="ph uicontrol">+ Share/Export</span>.</p>
                     </li>
                     <li className="li">
                        <p className="p">In the <span className="ph uicontrol">Create a share/export &gt; Basics</span> dialog window, enter
                           the following information:</p>
                        <table className="table frame-all">
                           <caption></caption>
                           <colgroup>
                              <col style={{ width: "157.25pt" }} />
                              <col style={{ width: "287.75pt" }} />
                           </colgroup>
                           <tbody className="tbody">
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle">
                                    <p className="p"><span className="ph uicontrol">Name</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle">
                                    <p className="p">Home</p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle">
                                    <p className="p"><span className="ph uicontrol">Description</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle">
                                    <p className="p">Shared folder for Home Org</p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle">
                                    <p className="p"><span className="ph uicontrol">File Server</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle">
                                    <p className="p">FS-&lt;your initials&gt;</p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle">
                                    <p className="p"><span className="ph uicontrol">Share Path (Optional)</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle">
                                    <p className="p">&lt;leave blank&gt;</p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle">
                                    <p className="p"><span className="ph uicontrol">Max Size (Optional)</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle">
                                    <p className="p">1024</p>
                                 </td>
                              </tr>
                              <tr className="row">
                                 <td className="entry colsep-1 rowsep-1 valign-middle">
                                    <p className="p"><span className="ph uicontrol">Select Protocol</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle">
                                    <p className="p">SMB</p>
                                 </td>
                              </tr>
                              <tr className="row">
                                 <td className="entry colsep-1 rowsep-1 valign-middle">
                                    <p className="p"><span className="ph uicontrol">Enable multiprotocol access for NFS</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle">
                                    <p className="p">Leave unchecked</p>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </li>
                     <li className="li">
                        <p className="p">Click <span className="ph uicontrol">Next</span>.</p>
                     </li>
                     <li className="li">
                        <p className="p">In the <span className="ph uicontrol">Create a share/export &gt; Settings</span> dialog window,
                           select the <span className="ph uicontrol">Use “Distributed” share/export Type instead of “Standard”</span>
                           check box and select the <span className="ph uicontrol">Enable Self Service Restore</span> check box.</p>
                     </li>
                     <li className="li">
                        <p className="p">Click <span className="ph uicontrol">Next</span>.</p>
                     </li>
                     <li className="li">
                        <p className="p">Under <span className="ph uicontrol">Summary</span>, verify the <span
                           className="ph uicontrol">Share/export Type </span>is <span className="ph uicontrol">Distributed</span> and click
                           <span className="ph uicontrol">Create</span>.</p>
                     </li>
                  </ol>
               </div>
            </article>
         </div>
      )
   }
}
