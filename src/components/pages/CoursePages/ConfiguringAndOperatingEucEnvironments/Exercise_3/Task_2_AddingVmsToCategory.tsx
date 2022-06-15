/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'

export default class Task_2_AddingVmsToCategory extends Component {
   render() {
      return (
         <div>
            <article role="article" aria-labelledby="ariaid-title1">
               <h1 className="title topictitle1" id="ariaid-title1">Task 2: Adding VMs to a Category</h1>
               <div className="body conbody">
                  <p className="p">In this exercise, you will add VMs to categories, preparing for security.</p>
                  <ol className="ol">
                     <li className="li">In Prism Central, click the <span className="ph uicontrol">Entities</span> menu, <span
                        className="ph uicontrol">Virtual Infrastructure</span>, then <span className="ph uicontrol">Categories</span>.
                     </li>
                     <li className="li">Select the checkbox for <span className="ph uicontrol">AppType</span> and click <span
                        className="ph uicontrol">Actions</span>, then <span className="ph uicontrol">Update</span>.</li>
                     <li className="li">Click the <span className="ph uicontrol">+</span> behind the last value to add an additional
                        category.</li>
                     <li className="li">Name the category <span className="ph uicontrol">&lt;your_initials&gt;-desktop</span> and click
                        <span className="ph uicontrol">Save</span>.</li>
                     <li className="li">Click the <span className="ph uicontrol">Entities</span> menu, <span className="ph uicontrol">Virtual
                        Infrastructure</span>, then <span className="ph uicontrol">VMs</span>.</li>
                     <li className="li">Check the box next to Cluster###VDI01, click <span className="ph uicontrol">Actions</span> then
                        <span className="ph uicontrol">Manage Categories</span>.</li>
                     <li className="li">In the <span className="ph uicontrol">Search for a category</span> text box, type <span
                        className="ph uicontrol">AppType:&lt;your_initials&gt;-desktop</span> and click the category that appears
                        below the text box.</li>
                     <li className="li">Click the + button and type <span className="ph uicontrol">AppTier:Default</span> and select <span
                        className="ph uicontrol">AppTier:Default</span> from the list of options and click <span
                           className="ph uicontrol">Save</span>.</li>
                     <li className="li">Uncheck the box next to Cluster###VDI01 and repeat steps 6-8 to add Cluster###VDI02 VM to the
                        <span className="ph uicontrol">AppType:&lt;your_initials&gt;-desktop</span> and <span
                           className="ph uicontrol">AppTier:Default</span> categories.</li>
                  </ol>
               </div>
            </article>
         </div>
      )
   }
}
