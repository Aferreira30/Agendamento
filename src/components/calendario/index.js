import React, { useState } from 'react'
import Calendar from "react-calendar";
import  'react-calendar/dist/Calendar.css' 

import { Container } from './style';

export default function Calendario() {
  const [date,setDate]=useState(new Date())
  const onChange = date => {
    setDate(date)
  }
  return (
    <Container>
     <Calendar  onChange={onChange} value={date} id="calendar"/>
    </Container>
  )
}
