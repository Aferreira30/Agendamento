import { Container,ContainerQuase,FormQuase,DateList } from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import Agendamento from "./datas";


export default function Quaselá() {
const [name, setName] = useState(
 [ {
    dia:"Segunda-feira",
    id:1
  },  {
    dia:"Terça-feira",
    id:2
  },  {
    dia:"Quarta-feira",
    id:3
  },  {
    dia:"Quinta-feira",
    id:4
  },  {
    dia:"Sexta-feira",
    id:5
  },  {
    dia:"Sábado",
    id:6
  },  {
    dia:"Domingo",
    id:7
  },]
)

const [data, setData]=useState([{}])


const [horainicio,setHorainicio]=useState([{
  hora_inicio:0
}]);
const [ horafim,setHorafim]=useState([{
  hora_fim:0
}]);

function HandleSubmit(e){
  //e.preventDefault()
  setData([...data])
  setChecked(!checked);
  console.log(data)
}

const onHandleChangeHorainicio = (e, index)=>{
  e.preventDefault();
  const {name,value} = e.target;
  const ListHrInicio=[ 
    ...horainicio,
    {
     id:name,
     hora_inicio:value
    }
   ]
   ListHrInicio[index]=value
   setHorainicio(ListHrInicio)
   
   setData([...data,[ListHrInicio]])
}
const onHandleChangeHoraFim = (e, index)=>{
  e.preventDefault();
  const {name,value} = e.target;
  const ListHrFim=[ 
   ...horafim,
   {
    id:name,
    hora_fim:value
   }
  ]

  ListHrFim[index]=value
  setHorafim(ListHrFim)
  setData([...data,[ListHrFim]])

}
const check = (id)=>{
  const changeDone = name.map((info)=> {
    if(info.id === id){
      return{...info, done: !info.done}
    }
    return info;
  })
  setName(changeDone)

}

//console.log(data)


  return (
    <Container>
       <h1>
       Quase lá
      </h1>
      <p>
      Defina o intervalo de horários que você está disponível em cada dia da semana.
      </p>

      <ContainerQuase>
      <div className="contPasso">
          <p>
            Passo 3 de 4
          </p>
          <div className="contSpan">
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          </div>
        </div>
      </ContainerQuase>
    <FormQuase> 
      <div className="contInputs">
      {
        name.map(
          ({dia})=>(    
            <Agendamento 
            key={dia}
            dia={dia}
            data={data}
            onHandleChange={onHandleChangeHorainicio}
            onHandleChange2={onHandleChangeHoraFim}
            check={check}
            />
            )
          )
      }
      </div>
      <Link to="/disponibilidade" id="link" >
      <button type="submit"  onClick={HandleSubmit}>Proximo passo</button>   
      </Link>
    </FormQuase>
    </Container>
  )
}
