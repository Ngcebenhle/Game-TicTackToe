import React from "react";
import { createContext, useState } from "react";
import useSound from "../Hooks/UseSound";

export const SoundEffectsContext = createContext({});

export function SoundEffectsContextProvider({ children }) {
  const options = {
    volume: 0.5,
    timeout: 200,
  };

  const hoverPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/tick.mp3";
  const hoverSF = useSound(hoverPath, options);

  const clickedPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/click.wav";
  const clickedSF = useSound(clickedPath, options);

  const winnerPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/winner.wav";
  const winnerSound = useSound(winnerPath, { ...options, timeout: 1000 });

  const completedPath =
    "https://zaiocontent.s3.eu-west-2.amazonaws.com/sound-effects/completed.wav";
  const completedSound = useSound(completedPath, { ...options, timeout: 2000 });

  return (
    <SoundEffectsContext.Provider
      value={{ hoverSF, clickedSF, winnerSound, completedSound }}
    >
      {children}
    </SoundEffectsContext.Provider>
  );
}
