import { Container,ContainerQuase,FormQuase } from "./style";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Agendamento from "./datas";
import axios from "axios"


export default function Quaselá() {

const [name] = useState(
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
  e.preventDefault()
  setData([...data])
  //console.log(data)
  axios.post("http://localhost:5000/data",data).then(resp => {
    console.log(resp);
  }).catch(error => {
    console.log(error)
  })
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
    <FormQuase > 
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
            Data={data}       
            SetData={setData}
    
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
