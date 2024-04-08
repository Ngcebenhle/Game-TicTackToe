import React, { useContext } from "react";
import Rout from "./Router";
import MusicPlayer from './Components/Music Player/MusicPlayer'

//Styles
import { GlobalStyles } from "./Styles/Global.Style";
import { ThemeProvider } from "styled-components";
import { LightTheme, DarkTheme } from "./Styles/theme";

//Context
import { ThemeContext } from "./Context/ThemeContext";


function App() {
  //Theme Mode
  const { theme } = useContext(ThemeContext);
  const mode = theme === "light" ? LightTheme : DarkTheme;

  return (
    <ThemeProvider theme={mode}>
      
      {/* Styles */}
      <GlobalStyles />
      {/* Routes */}
      <Rout />
      <MusicPlayer/>
    </ThemeProvider>
  );
}

export default App;
