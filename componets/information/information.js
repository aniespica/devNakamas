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
            <p>2. Select the date you want for you activity</p>
        </div>

        <CalendarSelected ></CalendarSelected>
        
        <div className="sentence">
            <p>3. Select the time frame for you activity</p>
        </div>

        <div className="sentence"> 
            <p>4. Number of Guests</p>
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