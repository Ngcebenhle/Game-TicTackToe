import React, { useContext } from "react";

//  Styles
import { CellStyles } from "./GameCell.Styles";

// SVG
import { ReactComponent as X } from "../../Assets/Xicon.svg";
import { ReactComponent as O } from "../../Assets/Oicon.svg";
// Game Context
import { GameContext } from "../../Context/GameContext";
import { CheckForWinner } from "../../Utils/GameUtils/GameUtilsMain";
import { ModalContext } from "../../Context/ModalContext";
import { SoundEffectsContext } from "../../Context/SoundEffectsContext";
// Modal
import RoundOverModal from "../Modal/Modals/RoundOverModal/RoundOverModal";

const GameCell = ({ cellItem, index, isWinningCell }) => {
  const { updatedBoard, game, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  const { winnerSound, completedSound, hoverSF, clickedSF } =
    useContext(SoundEffectsContext);

  const cellClickHandler = () => {
    // clickedSF();
    updatedBoard(index);
    const result = CheckForWinner(game.board);

    if (result) {
      roundComplete(result);
      if (result !== "Draw") {
        // winnerSound();
      }
      // setTimeout(() => {
      //   handleModal(<RoundOverModal />);
      // }, 2000);
    }

  };

  // if (cellItem === "X") {
  //   return (
  //     <CellStyles>
  //       <X />
  //     </CellStyles>
  //   );
  // } else if (cellItem === "O") {
  //   return (
  //     <CellStyles>
  //       <O />
  //     </CellStyles>
  //   );
  // }
  return (
    <CellStyles
      isWinningCell={isWinningCell ?? false}
      onClick={() => {
       
        // clickedSF();
        updatedBoard(index);
        cellClickHandler();
      }}
    >
      {/* {game.turn === "X" ? <X /> : <O />} */}
      {cellItem}
    </CellStyles>
  );
};

export default GameCell;
