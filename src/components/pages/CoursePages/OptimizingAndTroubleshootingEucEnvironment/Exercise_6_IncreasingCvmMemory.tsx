/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { Component } from 'react'

export default class Exercise_6_IncreasingCvmMemory extends Component {
   render() {
      return (
         <div>
            <article role="article" aria-labelledby="ariaid-title1">
               <h1 className="title topictitle1" id="ariaid-title1">Exercise 6: Increasing CVM Memory</h1>
               <div className="body conbody">
                  <p className="p">In this exercise, you will learn how to change the amount of memory allocated to the CVMs in your
                     cluster.</p>
                  <ol className="ol">
                     <li className="li">Log on to Prism Element.</li>
                     <li className="li">Click the <span className="ph uicontrol">Settings/Gear</span> icon in the upper-right of the
                        browser window.</li>
                     <li className="li">In the left panel, click <span className="ph uicontrol">Configure CVM</span>.</li>
                     <li className="li">Click the <span className="ph uicontrol">Target CVM Memory Allocation</span> drop-down. <span
                        className="ph uicontrol">DO NOT</span> accept changes to these memory values.
                        <div className="note note note_note"><span className="note__title">Note:</span> If this value was changed, the CVMs
                           would perform rolling restarts to prevent downtime.</div>
                     </li>
                  </ol>
               </div>
            </article>
         </div>
      )
   }
}
