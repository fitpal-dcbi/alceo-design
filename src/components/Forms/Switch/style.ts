import styled from "styled-components";
import { BaseSwitchProps } from "./type";

const lockImg = require("./icon-lock.svg") as string;
const lockImgActive = require("./icon-lock-active.svg") as string;

export const StyledSwitchWrapper = styled.div`
  position: relative;
`;

export const StyledSwitchBox = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 3.125rem;
  height: 1.5rem;
  border-radius: 1.25rem;
  background: #bac7d5;
  cursor: pointer;
  transition: all 0.3s ease-out;

  .SwitchCircle {
    display: flex;
    align-items: center;
    justify-content: center;

    content: "";
    border-radius: 100%;
    width: 1.625rem;
    height: 1.625rem;
    margin-top: -0.1rem;
    background: #ffffff;
    border: 0.5px solid rgba(7, 64, 92, 0.1);
    box-shadow: 0px 2px 3px rgba(7, 64, 92, 0.16);
    transition: all 0.3s ease-out;
  }

  .SwitchNode {
    content: "";
    border-radius: 100%;
    width: 0.625rem;
    height: 0.625rem;
    background: #bac7d5;
  }

  .WithIconSwitchNode {
    background-image: url(${lockImg});
    width: 1rem;
    height: 1rem;
    transition: all 0.3s ease-out;
  }
`;

export const StyledSwitch = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 1.25rem;
  width: 3.125rem;
  height: 1.5rem;
  transition: 0.3s;

  &:checked + ${StyledSwitchBox} .SwitchCircle {
    background: #ffffff;
    margin-left: 1.45rem;
    transition: all 0.3s ease-out;
  }

  &:checked + ${StyledSwitchBox} .SwitchNode {
    background: #ff6112;
  }

  &:checked + ${StyledSwitchBox} .WithIconSwitchNode {
    background-image: url(${lockImgActive});
    transition: all 0.3s ease-out;
  }
`;
