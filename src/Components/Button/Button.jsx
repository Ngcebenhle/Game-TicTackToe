import React from "react";
import { ButtonWrapper } from "./Button.Styles";

const Button = (props) => {
  return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
};

export default Button;
