import {DateList} from './style'

export default function Agendamento({dia,onHandleChange,onHandleChange2}) {
  return (
    <DateList>
    <li key={dia}> 
      <div className="contSpanP">
      <span></span>
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
