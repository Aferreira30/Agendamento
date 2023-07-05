import {Routes, Route} from "react-router-dom";

import Home from "../pages/home";
import ConectarAgenda from "../components/conectarAgenda";
import Quaselá from "../components/quaseLá";
import Disponibilidade from "../components/disponibilidade";

export default function Routers(){
  return(
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/conectcall" element={<ConectarAgenda />}/>
        <Route path="/ajustardiasehorarios" element={<Quaselá />} />
        <Route path="/disponibilidade" element={<Disponibilidade />} />



    </Routes>
  )


}


