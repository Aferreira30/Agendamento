import { Container ,ContainerAgenda,FormAgenda} from "./style";

import {Link} from "react-router-dom";

export default function ConectarAgenda() {
  const user = {
    linkGoogle:"https://myaccount.google.com"
  }
  return (
    <Container>
      <h1>
      Conecte sua agenda!
      </h1>
      <p>
      Conecte o seu calendário para verificar automaticamente as horas ocupadas e os novos eventos à medida em que são agendados.
      </p>

      <ContainerAgenda>
      <div className="contPasso">
          <p>
            Passo 2 de 4
          </p>
          <div className="contSpan">
          <span> </span>
          <span> </span>
          <span> </span>
          <span> </span>
          </div>
        </div>
      </ContainerAgenda>
      <FormAgenda>
        <div className="contLink">
          <h3>Google Agenda</h3>
          <a href={user.linkGoogle}>
            Conectar
          </a>
        </div>
        <Link to="/ajustardiasehorarios" id="ajustardiasehorarios">
          <button type="button">
            Proximo passo
          </button>
         </Link>
      </FormAgenda>
    </Container>
  )
}
