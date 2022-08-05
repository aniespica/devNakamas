import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.css'

export default function Home() {
  const [value, onChange] = useState(new Date());
  return (
    <div>
    <Calendar onChange={onChange} value={value} />
  </div>
  )
}