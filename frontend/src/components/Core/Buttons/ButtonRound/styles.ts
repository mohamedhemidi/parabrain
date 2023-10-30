/** STYLES **/

import styled from "styled-components";
import { IBtnRound } from "./RoundBtn";
import { BtnColors } from "../../../../utils/UIVariables";

export const SWrapper = styled.div<Pick<IBtnRound, "color">>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => BtnColors[`btn_color_${props.color}`]};
  border: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2980b9;
  }
`;

export const Icon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
`;
export const Label = styled.div`
  color: white;
`;
