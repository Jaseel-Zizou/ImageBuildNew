/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'

export default class Task_4_VerifyingDesktopSecurity extends Component {
   render() {
      return (
         <div>
            <article role="article" aria-labelledby="ariaid-title1">
               <h1 className="title topictitle1" id="ariaid-title1">Task 4: Verifying Desktop Security</h1>
               <div className="body conbody">
                  <p className="p">In this exercise, you will verify the policies created in the previous exercise.</p>
                  <ol className="ol">
                     <li className="li">In Prism Central, navigate to the <span className="ph uicontrol">VM</span> dashboard by clicking
                        the <span className="ph uicontrol">Entities</span> menu, <span className="ph uicontrol">Virtual
                           Infrastructure</span>, then <span className="ph uicontrol">VMs</span>. Make sure both deployed virtual
                        desktops are powered on. If not, power them on.</li>
                     <li className="li">Note the IP address of ClusterXXXVDI02.</li>
                     <li className="li">Launch the console of the ClusterXXXVDI01 and log in using credentials from your lab handout.
                     </li>
                     <li className="li">Open command prompt on the first deployed virtual desktop and try to ping the IP address for
                        the second deployed virtual desktop.
                        <ol className="ol" type="a">
                           <li className="li">Are you able to ping the desktop? Why?</li>
                        </ol>
                     </li>
                     <li className="li">In Prism Central, navigate to <span className="ph uicontrol">Entities</span>, <span
                        className="ph uicontrol">Policies</span>, then <span className="ph uicontrol">Security Policies</span>. Select the
                        <span className="ph uicontrol">&lt;your_initials&gt;-Desktop</span> policy (click on the policy name, not the
                        checkbox).</li>
                     <li className="li">Click <span className="ph uicontrol">Apply</span>. When prompted, type <span
                        className="ph uicontrol">APPLY</span> in the field, then click <span className="ph uicontrol">OK</span>.</li>
                     <li className="li">Change to the console for the first virtual desktop and try to ping the second deployed desktop
                        again.</li>
                     <li className="li">Are you able to ping the other desktop?</li>
                  </ol>
               </div>
            </article>
         </div>
      )
   }
}
