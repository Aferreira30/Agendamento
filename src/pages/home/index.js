import { useState } from "react";
import {Link} from "react-router-dom"
import { Container,ConatainerForm,FormDados } from "./style";

export default function Home() {
  const[data,setData]=useState({     
      user:"",
      name:""
  });
  const handleName = (event) =>{
    setData({...data, name: event.target.value})
  }
  const handleUser = (event)=>{
    setData({...data, user: event.target.value})
  }
  const handleSubmit = (event)=>{
    event.preventDefault();
    let formData = {
      user: data.user,
      name: data.name
    } 
    console.log(formData)
  }
  return (
    <Container>
      <h1>
      Bem-vindo ao Ignite Call!
      </h1>
      <p>
      Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.
      </p>

      <ConatainerForm>
        <div className="contPasso">
          <p>
            Passo 1 de 4
          </p>
          <div className="contSpan">
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          </div>
        </div>
        <FormDados onSubmit={handleSubmit}>
          <label htmlFor="user" name="user">Nome de usuário</label>
           <input
            type="text" 
            name="user" 
            id="user" 
            onChange={handleUser}
            value={data.user}
            />
            <span>cal.com/</span>
          <label htmlFor="name" name="name">Nome Completo</label>
           <input
            type="text" 
            name="name" 
            id="name" 
            onChange={handleName}
            value={data.name}
            />
            <Link to="/conectcall" id="link">
              <button type="submit">
                Proximo passo
              </button>  
            </Link>
        </FormDados>
      </ConatainerForm>
    </Container>
  )
}
