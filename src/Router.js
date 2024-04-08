import React, { useContext } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

// Pages
import Home from "./Pages/Home/Home";
import Game from "./Pages/Game/Game";
import Details from "./Pages/Details/Details";

//Components
import Header from "./Components/Header/Header";

import { ModalContextProvider } from "./Context/ModalContext";

const Rout = () => {
  return (
    <BrowserRouter>
      <ModalContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />;
          <Route path="/details" element={<Details />} />;
          <Route path="/game-on" element={<Game />} />;
        </Routes>
      </ModalContextProvider>
    </BrowserRouter>
  );
};

export default Rout;
