import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

export default function Home({currentDate, setCurrentDate}) {
  
  return (
    <div>
    <Calendar onChange={setCurrentDate} value={currentDate} />
  </div>
  )
}