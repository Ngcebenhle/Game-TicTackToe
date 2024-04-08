import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.columnBased ? "column" : "row ")};
  height: 80vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 2rem;
  text-align: center;
`;

export const Tittle = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 3rem;
  font-family: "Pacifico", cursive;
  background-color: transparent;
`;
export const SubTittle = styled.h1`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 24px;
  font-family: Roboto;
  background-color: transparent;
  font-weight: 200;
`;
