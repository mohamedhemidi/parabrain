import styled from "styled-components";

/** STYLES **/
export const SContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 1rem;
  border-radius: 1rem;
  background-color: #ffffff;
  box-shadow: inset 0 4px 7px 1px #ffffff,
    inset 0 -5px 20px rgba(173, 186, 204, 0.25), 0 2px 6px rgba(0, 21, 64, 0.14),
    0 10px 20px rgba(0, 21, 64, 0.05);
`;
export const STitle = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  cursor: pointer;
`;
export const SDesc = styled.div`
  font-size: 0.9rem;
  overflow: hidden;
  margin-bottom: 2rem;
  width: 13rem;
`;
export const SDate = styled.div`
  font-size: 0.7rem;
`;
export const SLeft = styled.div``;

export const SRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const SCompletedStatus = styled.div`
  border-radius: 50%;
  background-color: green;
  display: flex;
  justify-content: center;
  align-self: end;
  svg {
    width: 30px;
    height: 30px;
  }
`;
export const SPendingStatus = styled.div`
  border-radius: 50%;
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 30px;
    height: 30px;
  }
`;
export const SCardActions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  svg {
    width: 30px;
    height: 30px;
  }
`;
export const SIconWrapper = styled.div`
  cursor: pointer;
  display: flex;
`;
