import React, { useState } from 'react';
import { Container,ContainerDisp,FormDisp } from './style';
import ImgPreview from './previewImg';
import {Link} from "react-router-dom";

export default function Disponibilidade() {
  const [text,setText]=useState("");
  const handleTextChange = (e) => {
    const {name,value} = e.target;
    setText(
      {
        Sobre:value
      }
    );
  }
  function SubmitText(e){

    setText({sobre:text.sobre})
    console.log(text)
  }

  return (
    <Container>
      <h1>
      Defina sua disponibilidade
      </h1>
      <p>
      Por último, uma breve descrição e uma foto de perfil.
      </p>

      <ContainerDisp>
      <div className="contPasso">
          <p>
            Passo 4 de 4
          </p>
          <div className="contSpan">
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          </div>
        </div>
      </ContainerDisp>
      <FormDisp>
        <p>Foto de perfil</p>
        <div className="contFoto">
          <ImgPreview />
        </div>
        <p>Sobre você</p>
        <textarea  onChange={handleTextChange}/>
       <p className='descri'>Fale um pouco sobre você. Isto será exibido em sua página pessoal.</p>
       <Link to="/agendamento" id='link'>
        <button type='submit' onClick={SubmitText}>Finalizar</button>
       </Link>

      </FormDisp>
    </Container>
  )
}
