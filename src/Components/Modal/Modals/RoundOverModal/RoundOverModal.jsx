import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

// Styles
import { Tittle, SubTittle } from "../../../../Styles/General.Styles";
import { ModalBody, ModalHeader, Modalfooter } from "../../Modal.Styles";
import { ButtonWrapper } from "../../../Button/Button.Styles";

// Context
import { GameContext } from "../../../../Context/GameContext";
import { ModalContext } from "../../../../Context/ModalContext";
import { SoundEffectsContext } from "../../../../Context/SoundEffectsContext";
const RoundOverModal = () => {
  const navigate = useNavigate();

  const { resetBoard, game, restartGame } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  const { clickedSF, completedSound } = useContext(SoundEffectsContext);

  return (
    <>
      <ModalHeader>
        <Tittle primary>
          {game.turn === game.player1.choice
            ? game.player1.name
            : game.player2.name}
        </Tittle>
      </ModalHeader>

      <ModalBody>
        <SubTittle primary>
          {game.player1.name}: {game.player1.score}
        </SubTittle>

        <SubTittle primary>
          {game.player2.name}: {game.player2.score}
        </SubTittle>
      </ModalBody>

      <Modalfooter>
        <ButtonWrapper
          color="#f9c011"
          onClick={() => {
            clickedSF();
            handleModal();
            resetBoard();
          }}
        >
          Continue
        </ButtonWrapper>

        <ButtonWrapper
          color="#8437f("
          onClick={() => {
            clickedSF();
            navigate("/");
            restartGame();
            handleModal();
            completedSound();
          }}
        >
          Restart
        </ButtonWrapper>
      </Modalfooter>
    </>
  );
};

export default RoundOverModal;
