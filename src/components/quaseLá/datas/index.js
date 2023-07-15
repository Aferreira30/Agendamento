import {DateList} from './style';
import chked from "../../../assets/imgs/Checkbox.svg";
import { useState } from 'react';

export default function Agendamento({dia,onHandleChange,onHandleChange2}) {

const [checked, setChecked]=useState(false);
const onChecked = (e)=>{
  e.preventDefault();
  setChecked(!checked);
  console.log(checked)
}
  return (
    <DateList>
      <li key={dia}> 
        <div className="contSpanP">
        <span onClick={onChecked}>
          {
            checked?
            <img src={chked} alt="img" />
            : 
            null

          }
        </span>
          <p>{dia}</p>
        </div>
        <div className="contHrs" >
          <input type="text" name={dia} id="hora_inicio" onChange={onHandleChange}/>
          <input type="text" name={dia} id="hora_fim" onChange={onHandleChange2}/>
        </div>
      </li>
  </DateList>
  )
}
