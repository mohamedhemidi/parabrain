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
