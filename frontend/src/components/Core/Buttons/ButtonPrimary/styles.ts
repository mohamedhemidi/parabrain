/** STYLES **/

import styled from "styled-components";

import { BtnColors } from "../../../../utils/UIVariables";
import { IBtnPrimary } from "./ButtonPrimary";

export const SWrapper = styled.div<Pick<IBtnPrimary, "color">>`
  width: 100%;
  height: 40px;
  border-radius: 10px;
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
export const SLabel = styled.h2`
  color: #FFFFFF;
  font-size: 1rem;
  font-weight: 400;
`;


