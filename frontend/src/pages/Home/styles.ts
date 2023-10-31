/** STYLES **/

import styled from "styled-components";

export const SContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.3rem;
  @media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
  }
`;

export const SHomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  align-items: center;
`;
