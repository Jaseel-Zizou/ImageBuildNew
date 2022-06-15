/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'

export default class OptimizingOperatingSystem extends Component {
   render() {
      return (
         <div>
            <article role="article" aria-labelledby="ariaid-title1">
               <h1 className="title topictitle1" id="ariaid-title1">Task 2: Optimizing the Operating System</h1>
               <div className="body conbody">
                  <p className="p">In this exercise, you will use the Citrix Optimizer tool to optimize the Windows operating system
                     for Citrix XenDesktop.</p>
                  <ol className="ol">
                     <li className="li">If needed, log in to your Windows-Base VM.</li>
                     <li className="li">In the upper-right of the VM console window, click <span className="ph uicontrol">Mount ISO</span>,
                        select the Citrix Optimizer from the <span className="ph uicontrol">ISO File</span> drop down menu, then click
                        <span className="ph uicontrol">Mount</span>.</li>
                     <li className="li">Open File Explorer, open the Citrix Optimizer CD, then drag the <span
                        className="ph uicontrol">Citrix Optimizer</span> zip file to the Desktop.
                        <div className="note note note_note"><span className="note__title">Note:</span> For the purpose of these labs, we
                           are using the Citrix Optimizer tool since we are leveraging Citrix XenDesktop. In your work environment,
                           you should use the appropriate OS optimization tool.</div>
                     </li>
                     <li className="li">Right-click on the Citrix Optimizer file, and click <span className="ph uicontrol">Extract
                        All...</span>, then click <span className="ph uicontrol">Extract</span>.</li>
                     <li className="li">Right-click CitrixOptimizer, and click <span className="ph uicontrol">Run as administrator</span>.
                        If prompted, Select <span className="ph uicontrol">Yes</span> on the "<span className="ph uicontrol">Do you want to
                           allow this app to make changes to your device?</span>" prompt.
                        <div className="note note note_note"><span className="note__title">Note:</span> Citrix Optimizer may take a few
                           minutes to start.</div>
                     </li>
                     <li className="li">Choose the <span className="ph uicontrol">Windows 10 build &lt;BUILD_NUMBER&gt;
                        (Recommended)</span> from Citrix. </li>
                     <li className="li">Select <span className="ph uicontrol">All</span> and click <span
                        className="ph uicontrol">Analyze</span> in the lower right.</li>
                     <li className="li">After the analysis finishes, click <span className="ph uicontrol">Done</span>.</li>
                     <li className="li">Click <span className="ph uicontrol">Optimize</span> to begin optimizing the VM.</li>
                     <li className="li">After the optimizer finishes, click <span className="ph uicontrol">Done</span>.</li>
                     <li className="li">Right-click on the Windows icon, highlight <span className="ph uicontrol">Shut down or sign
                        out</span> and click <span className="ph uicontrol">Shut down</span> to shut down the VM, then close the
                        console session.</li>
                     <li className="li">Navigate to the <span className="ph uicontrol">VM </span> dashboard in your Prism Element.</li>
                     <li className="li">Highlight the Windows-Base VM and click <span className="ph uicontrol">Update</span>.</li>
                     <li className="li">Scroll down to the <span className="ph uicontrol">Disk</span> section, and click the eject button
                        next to the CD-ROM device. Click <span className="ph uicontrol">Save</span>.</li>
                     <li className="li">Highlight the <span className="ph uicontrol">Windows-Base</span> VM and click <span
                        className="ph uicontrol">Take Snapshot</span>. Name the snapshot <span
                           className="ph uicontrol">&lt;your_initials&gt;-base</span> and click <span className="ph uicontrol">Submit</span>.
                     </li>
                  </ol>
               </div>
            </article>
         </div>
      )
   }
}
