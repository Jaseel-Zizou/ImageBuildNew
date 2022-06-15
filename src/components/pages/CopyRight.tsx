/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'

export default class CopyRight extends Component {
   render() {
      return (
         <div>
            <article role="article" aria-labelledby="ariaid-title1">
               <article className="nested0" aria-labelledby="ariaid-title1" id="topic_3t2_yd5_rf">
                  <h1 className="title topictitle1" id="ariaid-title1">Copyright</h1>
                  <div className="body">
                     <p className="p">Copyright Nutanix, Inc.</p>
                     <ul className="sl simple">
                        <li className="sli">Nutanix, Inc.</li>
                        <li className="sli">1740 Technology Drive, Suite 150</li>
                        <li className="sli">San Jose, CA 95110</li>
                     </ul>
                     <p className="p">All rights reserved. This product is protected by U.S. and international copyright and
                        intellectual property laws. Nutanix and the Nutanix logo are registered trademarks of
                        Nutanix, Inc. in the United States and/or other jurisdictions. All other brand and product
                        names mentioned herein are for identification purposes only and may be trademarks of their
                        respective holders.</p>
                  </div>
                  <article className="topic nested1" aria-labelledby="ariaid-title2" id="topic_b4m_1vf_yl">
                     <h2 className="title topictitle2" id="ariaid-title2">License</h2>
                     <div className="body">
                        <p className="p">The provision of this software to you does not grant any licenses or
                           other rights under any Microsoft patents with respect to anything
                           other than the file server implementation portion of the binaries for
                           this software, including no licenses or any other rights in any
                           hardware or any devices or software that are used to communicate with
                           or in connection with this software.</p>
                     </div>
                  </article>
                  <article className="topic reference nested1" aria-labelledby="ariaid-title3" id="reference_qt5_phh_bf">
                     <h2 className="title topictitle2" id="ariaid-title3">Conventions</h2>
                     <div className="body refbody">
                        <table className="table frame-bottom" id="reference_qt5_phh_bf__table_l3d_qyz_y2">
                           <caption></caption>
                           <colgroup>
                              <col style={{ width: "157.25pt" }} />
                              <col style={{ width: "287.75pt" }} />
                           </colgroup>
                           <thead className="thead">
                              <tr className="row">
                                 <th className="entry rowsep-1" id="reference_qt5_phh_bf__table_l3d_qyz_y2__entry__1">Convention</th>
                                 <th className="entry rowsep-1" id="reference_qt5_phh_bf__table_l3d_qyz_y2__entry__2">Description</th>
                              </tr>
                           </thead>
                           <tbody className="tbody">
                              <tr className="row">
                                 <td className="entry rowsep-1" headers="reference_qt5_phh_bf__table_l3d_qyz_y2__entry__1 "><var
                                    className="keyword varname">variable_value</var></td>
                                 <td className="entry rowsep-1" headers="reference_qt5_phh_bf__table_l3d_qyz_y2__entry__2 ">The action
                                    depends on a value that is unique to your
                                    environment.</td>
                              </tr>
                              <tr className="row">
                                 <td className="entry rowsep-1" headers="reference_qt5_phh_bf__table_l3d_qyz_y2__entry__1 ">
                                    <pre className="pre codeblock"><code>ncli&gt; <var className="keyword varname">command</var></code></pre>
                                 </td>
                                 <td className="entry rowsep-1" headers="reference_qt5_phh_bf__table_l3d_qyz_y2__entry__2 ">The commands
                                    are executed in the Nutanix nCLI.</td>
                              </tr>
                              <tr className="row">
                                 <td className="entry rowsep-1" headers="reference_qt5_phh_bf__table_l3d_qyz_y2__entry__1 ">
                                    <pre className="pre codeblock"><code>user@host$ <var className="keyword varname">command</var></code></pre>
                                 </td>
                                 <td className="entry rowsep-1" headers="reference_qt5_phh_bf__table_l3d_qyz_y2__entry__2 ">The commands
                                    are executed as a non-privileged user (such
                                    as nutanix) in the system shell.</td>
                              </tr>
                              <tr className="row">
                                 <td className="entry rowsep-1" headers="reference_qt5_phh_bf__table_l3d_qyz_y2__entry__1 ">
                                    <pre className="pre codeblock"><code>root@host# <var className="keyword varname">command</var></code></pre>
                                 </td>
                                 <td className="entry rowsep-1" headers="reference_qt5_phh_bf__table_l3d_qyz_y2__entry__2 ">The commands
                                    are executed as the root user in the vSphere
                                    or Acropolis host shell.</td>
                              </tr>
                              <tr className="row">
                                 <td className="entry rowsep-1" headers="reference_qt5_phh_bf__table_l3d_qyz_y2__entry__1 ">
                                    <pre className="pre codeblock"><code>&gt; <var className="keyword varname">command</var></code></pre>
                                 </td>
                                 <td className="entry rowsep-1" headers="reference_qt5_phh_bf__table_l3d_qyz_y2__entry__2 ">The commands
                                    are executed in the Hyper-V host
                                    shell.</td>
                              </tr>
                              <tr className="row">
                                 <td className="entry rowsep-1" headers="reference_qt5_phh_bf__table_l3d_qyz_y2__entry__1 ">
                                    <pre className="pre msgblock">output</pre>
                                 </td>
                                 <td className="entry rowsep-1" headers="reference_qt5_phh_bf__table_l3d_qyz_y2__entry__2 ">The information
                                    is displayed as output from a command or
                                    in a log file.</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </article>
                  <article className="topic nested1" aria-labelledby="ariaid-title4" id="topic_fcp_pjx_sj">
                     <h2 className="title topictitle2" id="ariaid-title4">Version</h2>
                     <div className="body">
                        <p className="p"><strong className="ph b">Last modified:</strong>

                        </p>
                     </div>
                  </article>
               </article>
            </article>
         </div>
      )
   }
}
