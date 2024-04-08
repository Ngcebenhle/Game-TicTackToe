import { useState } from "react";

export const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState("I work");

  const handleModal = (content = false) => {
    if (content) {
      setModalContent(content);
    }
    setModal(!modal);
  };

  return { modal, modalContent, setModal, handleModal };
};
