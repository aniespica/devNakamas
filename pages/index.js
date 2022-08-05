import CalendarSelected from '../componets/calendar/calendar.js'
import { useState } from 'react';
export default function Home() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <div>
      <div class="slds-progress">
<ol class="slds-progress__list">
<li class="slds-progress__item slds-is-active">
<button class="slds-button slds-progress__marker">
<span class="slds-assistive-text">Step 1 - Active</span>
</button>
</li>
<li class="slds-progress__item">
<button class="slds-button slds-progress__marker">
<span class="slds-assistive-text">Step 2 </span>
</button>
</li>
<li class="slds-progress__item">
<button class="slds-button slds-progress__marker">
<span class="slds-assistive-text">Step 3 </span>
</button>
</li>
<li class="slds-progress__item">
<button class="slds-button slds-progress__marker">
<span class="slds-assistive-text">Step 4 </span>
</button>
</li>
<li class="slds-progress__item">
<button class="slds-button slds-progress__marker">
<span class="slds-assistive-text">Step 5 </span>
</button>
</li>
</ol>
<div class="slds-progress-bar slds-progress-bar_x-small" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" aria-label="{{Placeholder for description of progress bar}}" role="progressbar">
<span class="slds-progress-bar__value" style={{"width":"0%"}}>
<span class="slds-assistive-text">Progress: 0%</span>
</span>
</div>
</div>
      </div>
      <CalendarSelected></CalendarSelected>
  </div>
  )

}
