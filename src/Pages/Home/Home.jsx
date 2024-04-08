import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

//Styles
import { Container, Tittle, SubTittle } from "../../Styles/General.Styles";

//Components
import Button from "../../Components/Button/Button";

//Context
import { SoundEffectsContext } from "../../Context/SoundEffectsContext";

const Home = () => {
  const navigate = useNavigate();
  const { hoverSF, clickedSF } = useContext(SoundEffectsContext);
  return (
    <Container>
      <Tittle>Home</Tittle>
      <SubTittle>Play with your friends, higher score wins!</SubTittle>
      <Button
        onClick={() => {
          clickedSF();
          navigate("/game-on");
        }}
        onMouseEnter={() => {}
          // hoverSF()
        }
      >
        Play Now
      </Button>
    </Container>
  );
};

export default Home;
