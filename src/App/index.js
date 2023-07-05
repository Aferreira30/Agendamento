import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Container } from "./style";

import Routers from "../routers";

import defaultThemes from "../assets/styles/themes/default";
import GlobalStyles from "../assets/styles/global";


function App() {
  return (
    <BrowserRouter>
    <ThemeProvider theme={defaultThemes}>
      <GlobalStyles />
        <Container>
           <Routers />
        </Container>
    </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
