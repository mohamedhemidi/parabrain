/** STYLES **/

import styled from "styled-components";

export const SContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SRow = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
export const STitle = styled.h2`
  display: flex;
  flex-direction: row;
`;
export const SMatrixDo = styled.div`
  background-color: #ca2b00;
  width: 50%;
  padding: 1rem;
`;
export const SMatrixDelegate = styled.div`
  background-color: #00869d;
  width: 50%;
  padding: 1rem;
`;
export const SMatrixDecide = styled.div`
  background-color: #e3bd1b;
  width: 50%;
  padding: 1rem;
`;
export const SMatrixDelete = styled.div`
  background-color: #00ca86;
  width: 50%;
  padding: 1rem;
`;
