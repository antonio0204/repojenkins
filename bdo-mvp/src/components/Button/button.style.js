import styled from "styled-components"

export const ButtonContainer = styled.div`
  button {
    background: var(--secondary);
    margin: 2vh 0 2vh 0;
    border-radius: 5px;
    border: none;
    width: 60%;
    color: var(--primary);
    font-size: 16px;
    &:hover {
      background: var(--secondary70);
      color: var(--primary);
    }
    &:focus {
      background: var(--secondary);
      color: var(--primary);
    }
  }
`