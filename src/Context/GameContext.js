import React from "react";
import { createContext, useState } from "react";
// import Avatar, { genConfig } from "react-nice-avatar";

export const GameContext = createContext();

const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [null, null, null, null, null, null, null, null, null],

    player1: {
      choice: "X",
      name: "me",
      score: 0,
      color: "#8437f9",
      //   Avatar: genConfig({ sex: "man", hairStyle: "mohawk" }),
    },

    player2: {
      choice: "O",
      name: "meto",
      score: 0,
      color: "#f9c811",
      //   Avatar: genConfig({ sex: "man", hairStyle: "mohawk" }),
    },

    turn: "X",
    roundWinner: "",
    winningCombo: [],
  });

  const updatedBoard = (index) => {
    let updatedBoard = game.board;
    updatedBoard[index] = game.turn;

    setGame({
      ...game,
      board: updatedBoard,
      turn: game.turn === "X" ? "O" : "X",
      winningCombo: [],
      roundWinner: "",
    });
  };

  const resetBoard = () => {
    setGame({
      ...game,
      board: [null, null, null, null, null, null, null, null, null],
      turn: "X",
      roundWinner: "",
      winningCombo: [],
    });
  };
  const restartGame = () => {
    setGame({
      board: [null, null, null, null, null, null, null, null, null],

      player1: {
        choice: "X",
        name: "me",
        score: 0,
        color: "#8437f9",
        // Avatar: genConfig({ sex: "man", hairStyle: "mohawk" }),
      },

      player2: {
        choice: "O",
        name: "meto",
        score: 0,
        color: "#f9c811",
        // Avatar: genConfig({ sex: "man", hairStyle: "mohawk" }),
      },

      turn: "X",
      roundWinner: "",
      winningCombo: [],
    });
  };

  const toggleChoice = (choice) => (choice === "X" ? "O" : "X");

  const switchTurn = () => {
    setGame((prevGame) => ({
      ...prevGame,
      player1: {
        ...game.player1,
        choice: toggleChoice(prevGame.player1.choice),
      },
      player2: {
        ...prevGame.player2,
        choice: toggleChoice(prevGame.player2.choice),
      },
      turn: "X",
    }));
  };

  const updateScore = (winner, result) => {
    if (winner === "Draw") {
      setGame((prevGame) => ({
        ...prevGame,
        player1: {
          ...prevGame.player1,
          score: prevGame.player1.score + 0.5,
        },
        player2: {
          ...prevGame.player2,
          score: prevGame.player2.score + 0.5,
        },
        roundWinner: "",
        winningCombo: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      }));
    } else {
      setGame((prevGame) => ({
        ...prevGame,
        [winner]: {
          ...prevGame[winner],
          score: prevGame[winner].score + 1,
        },
        roundWinner: prevGame[winner],
        winningCombo: result,
      }));
    }
  };

  const roundComplete = (result) => {
    switchTurn();

    if (game.turn === game.player1.choice && result !== "Draw") {
      console.log("Player 1 Wins!!!");
      updateScore("player1", result);

      //    setGame({
      //     ...game,
      //     player1:{
      //         ...game.player1,
      //         score:game.player1.score + 1
      //     }
      //    });
    } else if (game.turn === game.player2.choice && result !== "Draw") {
      console.log("Player 2 Wins!!!");
      updateScore("player2", result);
      //    setGame({
      //     ...game,
      //     player2:{
      //         ...game.player2,
      //         score:game.player2.score + 1
      //     }
      //    });
    } else {
      console.log("Its a draw ", result);
    }
  };

  return (
    <GameContext.Provider
      value={{
        game,
        updatedBoard,
        resetBoard,
        roundComplete,
        restartGame,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
