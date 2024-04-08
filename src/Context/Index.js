import React from "react";

//Theme Context Provider
import { ThemeContextProvider } from "./ThemeContext";
//Game Context Provider
import GameContextProvider from "./GameContext";
//Sound Effects Context Provider
import { SoundEffectsContextProvider } from "./SoundEffectsContext";

const Provider = ({ children }) => {
  return (
    <ThemeContextProvider>
      <GameContextProvider>
        <SoundEffectsContextProvider>{children}</SoundEffectsContextProvider>
      </GameContextProvider>
    </ThemeContextProvider>
  );
};

export default Provider;
