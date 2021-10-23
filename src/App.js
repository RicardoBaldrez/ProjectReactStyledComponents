import React from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import { GlobalStyle } from './Components/GlobalStyle';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './Components/UI/themes'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
