//import CalendarSelected from '../componets/calendar/calendar.js'
//import { useState } from 'react';
import CalendarSelected from '../calendar/calendar.js'
import { useState } from 'react';

export default function information() {
    return (
      <div className="container"> 
        <div className="sentence">
            <h2 className="blondFont">1.</h2>
            <h2>Select a category accoring to your activity</h2>
        </div>
        <div>
        <div class="slds-form-element inputContainer">
  <div class="slds-form-element__control">
    <div class="slds-select_container">
      <select class="slds-select" id="select-01">
        <option value="">Select…</option>
        <option>Option One</option>
        <option>Option Two</option>
        <option>Option Three</option>
      </select>
    </div>
  </div>
</div>
        </div>
        <div className="sentence">
            <h2 className="blondFont">2.</h2>
            <h2>Select the date you want for you activity</h2>
        </div>

        <CalendarSelected ></CalendarSelected>
        <div className="sentence">
            <h2 className="blondFont">3.</h2>
            <h2>Select the time frame for you activity</h2>
        </div>

        <div className="sentence"> 
            <h2 className="blondFont">4.</h2>
            <h2>Number of Guests</h2>
        </div>
        <div class="slds-form-element">
  <label class="slds-form-element__label" for="text-input-id-92">
    <abbr class="slds-required" title="required"> </abbr></label>
  <div class="slds-form-element__control">
    <input type="text" id="text-input-id-92" required="" class="slds-input inputContainer" />
  </div>
</div>
    </div>
    
    )
  }