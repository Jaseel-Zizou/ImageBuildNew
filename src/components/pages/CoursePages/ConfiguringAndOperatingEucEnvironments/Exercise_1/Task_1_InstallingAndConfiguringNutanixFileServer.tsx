/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react';
import Image from '../../../../../assets/images/image1.png';
import PrismElement from '../../../../../assets/images/Prism_Element1.png';

export default class Task_1_InstallingAndConfiguringNutanixFileServer extends Component {
   render() {
      return (
         <div>
            <article role="article" aria-labelledby="ariaid-title1">
               <h1 className="title topictitle1" id="ariaid-title1">Task 1: Installing and Configuring a Nutanix File Server</h1>
               <div className="body conbody">
                  <p className="p">In this task, you will install and configure a Nutanix file server on your AHV cluster.</p>
                  <ol className="ol">
                     <li className="li">
                        <p className="p">Log on to Prism Element using the using the cluster Virtual IP (VIP), username, and password
                           from your lab handout.</p>
                     </li>
                     <li className="li">
                        <p className="p">Select the <span className="ph uicontrol">File Server</span> dashboard and click <span
                           className="ph uicontrol">+ File Server</span>.</p>
                     </li>
                     <li className="li">
                        <p className="p">The <span className="ph uicontrol">New File Server : Pre-Check</span> window displays in Prism
                           Element. If your cluster has not met all the Nutanix Files prerequisites, you should see an output similar
                           to the following:</p>
                        <div className="p">
                           <figure className="fig fignone">
                              <img className="image" height="200%" src={Image} width="100%" alt={Image} />
                           </figure>
                        </div>
                        <p className="p">In this case, it has detected the configuration of the iSCSI data services IP and an AHV
                           network, but not the Nutanix Files binary and metadata files.</p>
                     </li>
                     <li className="li">
                        <p className="p">In the <span className="ph uicontrol">New File Server: Pre-Check</span> window, click <span
                           className="ph uicontrol">Download or Upload File Server Software</span>.</p>
                     </li>
                     <li className="li">
                        <p className="p">If your cluster is a dark site, you need to upload the Nutanix Files binary. If your cluster
                           has access to the Internet, go to step 7.</p>
                        <ol className="ol" type="a">
                           <li className="li">
                              <p className="p">Click <span className="ph uicontrol">upload the File Server binary</span> in the <span
                                 className="ph uicontrol">Upgrade Software</span> dialog window.</p>
                           </li>
                           <li className="li">
                              <p className="p">Click <span className="ph uicontrol">Choose File</span> under <span className="ph uicontrol">FILE
                                 SERVER METADATA FILE</span> to upload Nutanix Files metadata file</p>
                           </li>
                           <li className="li">
                              <p className="p">Click <span className="ph uicontrol">Choose File </span>under <span className="ph uicontrol">FILE
                                 SERVER BINARY FILE</span> to upload Nutanix Files binary file.</p>
                              <div className="note note note_note"><span className="note__title">Note:</span> See your lab handout for file
                                 locations.</div>
                           </li>
                        </ol>
                     </li>
                     <li className="li">
                        <p className="p">Click <span className="ph uicontrol">Upload Now</span>.</p>
                     </li>
                     <li className="li">
                        <p className="p">If your cluster has access to the Internet, it contacts the Nutanix portal and detects
                           available compatible versions. Select one from the available compatible versions in the <span
                              className="ph uicontrol">Upgrade Software</span> dialog window and click <span
                                 className="ph uicontrol">Download</span>.</p>
                     </li>
                     <li className="li">
                        <p className="p">Once the upload or download is complete, click <span className="ph uicontrol">Continue</span>.</p>
                     </li>
                     <li className="li">
                        <p className="p">In the <span className="ph uicontrol">New File Server : Pre-Check</span> window, it now indicates
                           that all the Nutanix Files pre-requisites are met. Click <span className="ph uicontrol">Continue</span>.</p>
                     </li>
                     <li className="li">
                        <p className="p">The <span className="ph uicontrol">Create File Server &gt; Basics</span> dialog window is
                           displayed. Enter the following values:</p>
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
                                    <p className="p">FS-&lt;your initials&gt;</p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle">
                                    <p className="p"><span className="ph uicontrol">Domain</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle">
                                    <p className="p">See lab handout</p>
                                 </td>
                              </tr>
                              <tr className="row rowsep-1">
                                 <td className="entry colsep-1 rowsep-1 valign-middle">
                                    <p className="p"><span className="ph uicontrol">File Server Storage</span></p>
                                 </td>
                                 <td className="entry colsep-1 rowsep-1 valign-middle">
                                    <p className="p">1</p>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <div className="note note note_note"><span className="note__title">Note:</span> By default, 3 File Server VMs (FSVM)
                           will be created, 4 vCPUs, and 12GB memory will be allocated to each FSVM.</div>
                     </li>
                     <li className="li">
                        <p className="p">Click <span className="ph uicontrol">Next</span>.</p>
                     </li>
                     <li className="li">Choose <span className="ph uicontrol">VLAN0</span> in the <span className="ph uicontrol">Network
                        Details</span>.
                        <div className="note note note_note"><span className="note__title">Note:</span> Since VLAN0 is a managed network,
                           the networking information is automatically configured. If using an unmanaged network, you would need to
                           add valid information.</div>
                     </li>
                     <li className="li">
                        <p className="p"><span className="ph uicontrol">DNS Resolver IP</span> and <span className="ph uicontrol">NTP
                           Servers</span> fields are automatically populated.</p>
                     </li>
                     <li className="li">
                        <p className="p">Verify that the DNS Resolver IP matches the Files instance DNS IP in your lab handout. If the
                           IP address does not match, change it now.</p>
                     </li>
                     <li className="li">
                        <p className="p">Click <span className="ph uicontrol">Next</span>.</p>
                     </li>
                     <li className="li">Select <span className="ph uicontrol">VLAN0</span> for the <span className="ph uicontrol">Storage
                        Networking</span> details. </li>
                     <li className="li">
                        <p className="p">Click <span className="ph uicontrol">Next</span>.</p>
                     </li>
                     <li className="li">
                        <p className="p">In the <span className="ph uicontrol">Create File Server &gt; Directory Services</span> dialog
                           window, select the <span className="ph uicontrol">Use SMB Protocol </span>check box.</p>
                     </li>
                     <li className="li">
                        <p className="p">Type your AD username and password in the <span className="ph uicontrol">Username</span> and <span
                           className="ph uicontrol">Password</span> fields respectively (see lab handout).</p>
                     </li>
                     <li className="li">
                        <p className="p">Select the <span className="ph uicontrol">Make this user a File Server admin</span> check box and
                           click <span className="ph uicontrol">Next</span>.</p>
                     </li>
                     <li className="li">
                        <p className="p">In the <span className="ph uicontrol">Create File Server &gt; Summary</span> dialog window, it
                           indicates that a protection domain will be created automatically for your Files instance and scheduled to
                           take snapshot daily. Click <span className="ph uicontrol">Create</span>.</p>
                     </li>
                     <li className="li">
                        <p className="p">Click the <span className="ph uicontrol">Task</span> icon to view the installation progress.</p>
                        <div className="p">
                           <figure className="fig fignone">
                              <img className="image" height="200%" width="100%" src={PrismElement} alt={PrismElement} />
                           </figure>
                        </div>
                     </li>
                     <li className="li">
                        <p className="p">Click <span className="ph uicontrol">View All Tasks</span> on the <span
                           className="ph uicontrol">Task</span> drop down menu for a listing of all subtasks and their status.</p>
                     </li>
                     <li className="li">
                        <p className="p">Navigate to the <span className="ph uicontrol">VM</span> dashboard and click <span
                           className="ph uicontrol">Table</span> to verify creation of three FSVMs.</p>
                     </li>
                  </ol>
                  <div className="note note note_note"><span className="note__title">Note:</span> The Files installation will take
                     approximately 10 to 20 minutes. Wait for the Files installation to complete before continuing to the next
                     task.</div>
               </div>
            </article>
         </div>
      )
   }
}
