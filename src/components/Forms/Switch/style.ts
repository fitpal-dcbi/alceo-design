import styled from "styled-components";
import { BaseSwitchProps } from "./type";

export const StyledSwitchWrapper = styled.div<
  Pick<BaseSwitchProps, "readOnly">
>`
  position: relative;
  cursor: ${(props) => (props.readOnly ? "not-allowed" : "pointer")};
`;

export const StyledSwitchBox = styled.label<
  Pick<BaseSwitchProps, "readOnly" | "disabled">
>`
  position: absolute;
  top: 0;
  left: 0;
  width: 3.125rem;
  height: 1.5rem;
  border-radius: 1.25rem;
  background: #bac7d5;

  cursor: ${(props) =>
    props.readOnly || props.disabled ? "not-allowed" : "pointer"};
  opacity: ${(props) => (props.readOnly || props.disabled ? "0.6" : "1")};
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
`;

export const StyledSwitch = styled.input<
  Pick<BaseSwitchProps, "readOnly" | "disabled">
>`
  opacity: 0;
  z-index: 1;
  border-radius: 1.25rem;
  width: 3.125rem;
  height: 1.5rem;
  transition: 0.3s;
  cursor: ${(props) =>
    props.readOnly || props.disabled ? "not-allowed" : "pointer"};

  :checked + ${StyledSwitchBox} {
    background: #ff6112;

    .SwitchCircle {
      background: #ffffff;
      margin-left: 1.45rem;
      transition: all 0.3s ease-out;
    }
    .SwitchNode {
      background: #ff6112;
    }
  }
`;
