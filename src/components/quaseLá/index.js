import { Container,ContainerQuase,FormQuase,DateList } from "./style";
import { Link } from "react-router-dom";
import { useState } from "react";
import Agendamento from "./datas";


export default function Quaselá() {
const [name, setName] = useState(
 [ {
    dia:"Segunda-feira",

  },  {
    dia:"Terça-feira",

  },  {
    dia:"Quarta-feira",
  
  },  {
    dia:"Quinta-feira",
  
  },  {
    dia:"Sexta-feira",

  },  {
    dia:"Sábado",

  },  {
    dia:"Domingo",
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
