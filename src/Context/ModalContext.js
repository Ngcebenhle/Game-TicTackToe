import React from "react";
import { createContext } from "react";
import { useModal } from "../Hooks/useModal";
import ModalTemplate from "../Components/Modal/ModalTemplate";

export const ModalContext = createContext({});

export function ModalContextProvider({ children }) {
  const { modal, modalContent, setModal, handleModal } = useModal();

  return (
    <ModalContext.Provider
      value={{ modal, modalContent, setModal, handleModal }}
    >
      <ModalTemplate />
      {children}
    </ModalContext.Provider>
  );
}
