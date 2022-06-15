/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'

export default class Task_1_EnablingNutanixFlow extends Component {
   render() {
      return (
         <div>
            <article role="article" aria-labelledby="ariaid-title1">
               <h1 className="title topictitle1" id="ariaid-title1">Task 1: Enabling Nutanix Flow</h1>
               <div className="body conbody">
                  <p className="p">In this exercise, you will enable Flow on your cluster.</p>
                  <ol className="ol">
                     <li className="li">Within Prism Element, navigate to the <span className="ph uicontrol">Home</span> dashboard and
                        click <span className="ph uicontrol">OK</span> on the Prism Central widget. Log on to Prism Central using the
                        credentials from your lab handout.</li>
                     <li className="li">Click the <span className="ph uicontrol">?</span> drop down menu and click <span
                        className="ph uicontrol">New in Prism Central</span>.</li>
                     <li className="li">Click <span className="ph uicontrol">Microsegmentation</span> in the <span
                        className="ph uicontrol">Setup</span> menu.</li>
                     <li className="li">In the <span className="ph uicontrol">Enable Microsegmentation</span> dialog window, click the
                        <span className="ph uicontrol">Enable Microsegmentation</span> check box and click <span
                           className="ph uicontrol">Enable</span>.</li>
                  </ol>
               </div>
            </article>
         </div>
      )
   }
}
