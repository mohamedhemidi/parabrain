/** STYLES **/

import styled from "styled-components";

export const SWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9;
`;
export const SModalContainer = styled.div`
  padding: 2rem;
  width: 35rem;
  background-color: ${(props) => props.theme.bg};
`;
export const SModalTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
  }
`;
export const SModalTitle = styled.h2`
  font-size: 2rem;
`;
export const SModalContent = styled.div``;
export const SModalBottom = styled.div`
display: flex;
flex-direction: row;
gap: 1rem;
justify-content: end;
`;

export const SIconWrapper = styled.div`
  cursor: pointer;
  display: flex;
`;