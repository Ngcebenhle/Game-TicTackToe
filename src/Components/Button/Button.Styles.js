import styled from "styled-components";

export const ButtonWrapper = styled.button`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.color ? props.color :props.theme.colors.secondary};
  padding: 20px 30px;
  min-width: 300px;
  font-size: 1.1rem;
  margin: 20px;
  border: none;
  border-radius: 10px;
  font-weight: 400;

  &:hover {
    box-shadow: 8px 8px 10px ${(props) => props.theme.colors.purple};
    cursor: pointer;
  }
`;
