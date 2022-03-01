import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  & > div.left {
    flex: 1;
  }
  & > div.right {
    width: 30%;
    & > button {
      width: 100%;
      padding: 10px;
      background: var(--black);
      color: var(--white);
      font-size: 1rem;
      font-weight: bold;
      border: none;
      cursor: pointer;
      border-radius: 5px;
      position: relative;
      right: 50%;
      &:hover,
      &:active,
      &:focus {
        filter: brightness(90%);
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
