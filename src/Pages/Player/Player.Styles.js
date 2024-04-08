import styled from "styled-components";

export const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10rem;
  background-color: ${({ isPlayerActive }) =>
    isPlayerActive ? "gray" : "purple"};

  ${(props) => props.theme.media.mobile} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;
