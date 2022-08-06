//import CalendarSelected from '../componets/calendar/calendar.js'
//import { useState } from 'react';
import CalendarSelected from '../calendar/calendar.js'
import { useState } from 'react';

export default function information() {
    return (
      <div className="container"> 
        <div className="sentence">
            <p>1. Select a category accoring to your activity</p>
        </div>
        <div>
        <div className="slds-form-element inputContainer">
  <div className="slds-form-element__control">
    <div className="slds-select_container">
      <select className="slds-select" id="select-01">
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
            <p>2. Select the date you want for you activity</p>
        </div>

        <CalendarSelected ></CalendarSelected>
        
        <div className="sentence">
            <p>3. Select the time frame for you activity</p>
        </div>

        <div className="sentence"> 
            <p>4. Number of Guests</p>
        </div>
        <div className="slds-form-element">
  <label className="slds-form-element__label" for="text-input-id-92">
    <abbr className="slds-required" title="required"> </abbr></label>
  <div className="slds-form-element__control">
    <input type="text" id="text-input-id-92" required="" className="slds-input inputContainer" />
  </div>
</div>
    </div>
    
    )
  }