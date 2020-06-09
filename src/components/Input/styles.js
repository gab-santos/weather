import styled from "styled-components";

export const Input = styled.input`
  height: 50px;
  width: 100%;
  border: 0;
  border-radius: 4px 4px 0 0;
  padding: 0 10px;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.tertiary};
  caret-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
`;
