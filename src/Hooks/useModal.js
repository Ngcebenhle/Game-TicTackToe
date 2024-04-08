import { useState } from "react";

export const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState("I work"); // ???????????????????

  const handleModal = (content = false) => {
    if (content) {
      setModalContent(content);
      setModal(true)
    }
    setModal(!modal);
  };
  
  return { modal, modalContent, handleModal };
};
