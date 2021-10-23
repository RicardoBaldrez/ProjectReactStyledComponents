import React, { useState } from "react";

import Header from "./Components/Header";
import Container from "./Components/Container";
import { GlobalStyle } from './Components/GlobalStyle';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './Components/UI/themes'
import { ChangeThemeButton } from "./Components/UI";
import SwitcherTheme from "./Components/SwitcherTheme";

function App() {
  const [theme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme((theme) => !theme);
  }

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyle />
      <ChangeThemeButton onClick={toggleTheme}>
        <SwitcherTheme theme={theme} />
      </ChangeThemeButton>
      <Header />
      <Container />
    </ThemeProvider>
  );
}

export default App;
