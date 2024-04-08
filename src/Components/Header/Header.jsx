import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// SVG
import {ReactComponent as Logo} from '../../Assets/tac_tic_toe_icon.svg'

//Styled
import { HeaderWrapper, LightModeIcon, DarkModeIcon } from "./Header.Styled";

//Context
import { ThemeContext } from "../../Context/ThemeContext";
import { SoundEffectsContext } from "../../Context/SoundEffectsContext";

const Header = () => {
  const navigate = useNavigate();

  const { theme, toggleTheme } = useContext(ThemeContext);
  const { hoverSF, clickedSF } = useContext(SoundEffectsContext);
  return (
    <HeaderWrapper>
      {/* <Logo className ="Logo" onClick={() => {
          clickedSF();
          navigate("/");
      }}/> */}
      
      <h1
        onClick={() => {
          // clickedSF();
          navigate("/");
        }}
      >
        Logo
      </h1>

      <span
      className="Light_and_Dark_Toggler_icons"
        onClick={() => {
          clickedSF();
          toggleTheme();
        }}
      >
        {theme === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </span>

      {/* <button onClick={() => toggleTheme()}>Toggle Theme</button> */}
    </HeaderWrapper>
  );
};

export default Header;
