import React, { useContext } from "react";

//Componets
import GameCell from "../../Components/GameCell/GameCell";
import Player from "../Player/Player";

// Styles
import { Container, Tittle, SubTittle } from "../../Styles/General.Styles";
import { GameBoard } from "./Game.Styles";

//Game Context
import { GameContext } from "../../Context/GameContext";

const Game = () => {
  const { game } = useContext(GameContext);
  // const board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <Container>
      <Player
        player={game.player1}
        isPlayerActive={game.player1.choice === game.turn}
      />
      <GameBoard>
        {game.board.map((item, index) => (
          <GameCell key={index} cellItem={item} index={index} isWinningCell={game.winningCombo.includes(index)} />
        ))}
      </GameBoard>
      <Player
        player={game.player2}
        isPlayerActive={game.player2.choice === game.turn}
      />
    </Container>
  );
};

export default Game;
