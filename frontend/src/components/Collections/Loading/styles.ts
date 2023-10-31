import { styled, keyframes } from "styled-components";

export const spin = keyframes`
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`;
export const load = keyframes`
  0% {content: 'Loading';}
  33% {content: 'Loading.';}
  67% {content: 'Loading..';}
  100% {content: 'Loading...';}
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 1rem;
`;
export const Loader = styled.div`
  width: 80px;
`;
export const LoaderWheel = styled.div`
  animation: spin 1s infinite linear;
  border: 5px solid rgba(30, 30, 30, 0.5);
  border-left: 4px solid #fff;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  animation-name: ${spin};
  animation-duration: 2s;
`;
export const LoaderText = styled.div`
  color: #fff;
  font-family: arial, sans-serif;
  &:after {
    content: "Loading";
    animation: load 2s linear infinite;
  }
  animation-name: ${load};
  animation-duration: 2s;
`;
