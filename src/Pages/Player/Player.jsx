import React from "react";
import Avatar, { genConfig } from 'react-nice-avatar'

//Styles
import { PlayerWrapper } from "./Player.Styles";
import { Tittle,SubTittle } from "../../Styles/General.Styles";

const Player = ({ player, isPlayerActive }) => {
  const config = genConfig({  hairStyle: "mohawk" }) 
  return (
    <PlayerWrapper isPlayerActive={isPlayerActive ?? false}>
    <Avatar style={{ width: "8rem", height: "8rem" }} {...config}/>
        <Tittle>{player.name}</Tittle>
        <SubTittle>{player.choice}</SubTittle>
        <SubTittle>{player.score}</SubTittle>
    
    </PlayerWrapper>
  );
};

export default Player;
