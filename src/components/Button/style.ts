import styled from "styled-components";
import { ButtonProps, ButtonSize, ButtonTheme, ButtonWeight } from "./type";

const mapButtonSize = {
  sm: "0.5rem 0.75rem",
  md: "0.75rem 1rem",
  lg: "0.9375rem 1.5rem",
};

const mapButtonFontSize = {
  sm: ".75rem",
  md: ".875rem",
  lg: "1rem",
};

const mapButtonHeight = {
  sm: "2rem",
  md: "2.75rem",
  lg: "3.25rem",
};

const mapButtonStyles = {
  primary: {
    solid: {
      background: "#FA7E4B",
      font: "#FCFBE6",
      border: "none",
      disabled: "#CBC7C6"
    },
    outline: {
      background: "transparent",
      font: "#FA7E4B",
      border: "1px solid #FA7E4B",
      disabled: "#CBC7C6"
    },
    inline: {
      background: "transparent",
      font: "#FA7E4B",
      border: "none",
      disabled: "transparent" 
    },
  },
  invert: {
    solid: {
      background: "#FFFFFF",
      font: "#FA7E4B",
      border: "1px solid #FA7E4B",
      disabled: "#CBC7C6"
    },
    outline: {
      background: "transparent",
      font: "#FFFFFF",
      border: "1px solid #FFFFFF",
      disabled: "#CBC7C6"
    },
    inline: {
      background: "transparent",
      font: "#FFFFFF",
      border: "none",
      disabled: "transparent"
    },
  },
};

export const mapIconSize = {
  sm: ".75rem",
  md: "1.25rem",
  lg: "1.25rem",
};

const mapMarginChildren = {
  none: "0",
  left: "0 0 0 .625rem",
  right: "0 .625rem 0 0",
  both: "0 .625rem",
};

const getButtonStyles = (theme: ButtonTheme, weight: ButtonWeight) => {
  return mapButtonStyles[theme][weight];
};

const getBackgroundColor = (theme: ButtonTheme, weight: ButtonWeight, disabled: boolean) => {
  return disabled ? getButtonStyles(theme, weight).disabled : getButtonStyles(theme, weight).background;
};

const getFontColor = (theme: ButtonTheme, weight: ButtonWeight, disabled: boolean) => {
  return disabled ? '#FFFFFF' : getButtonStyles(theme, weight).font;
};

const getBorderColor = (theme: ButtonTheme, weight: ButtonWeight, disabled: boolean) => {
  return disabled ? "none" : getButtonStyles(theme, weight).border;
};

type StyledButtonProps = {
  theme: ButtonTheme;
  weight: ButtonWeight;
  size: ButtonSize;
  disabled: boolean;
  fullWidth: boolean;
  fontSize: string;
};

export const StyledButton = styled.button<StyledButtonProps>`
  background: ${(props) => getBackgroundColor(props.theme, props.weight, props.disabled)};
  border: ${(props) => getBorderColor(props.theme, props.weight, props.disabled)};
  color: ${(props) => getFontColor(props.theme, props.weight, props.disabled)};
  width: ${(props) => (props.fullWidth ? "100%" : "fit-content")};
  padding: ${(props) =>
    props.weight === "inline" ? "0" : mapButtonSize[props.size]};
  height: ${(props) => mapButtonHeight[props.size]};
  font-size: ${(props) => props.fontSize || mapButtonFontSize[props.size]};
  border-radius: 6.25rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 250ms ease;
  align-items: center;

  ${(props) =>
    !props.disabled &&
    `&:hover {
      filter: ${(props: any) =>
        props.weight !== "inline" ? "brightness(0.9) contrast(1.2)" : "none"};
      transform: scale(1.03);
      transition: all 250ms ease; 
      &:before {
        bottom: 3px;
        filter: blur(6px) brightness(1);
        transition: all 250ms ease; 
      };
    };`};

  &:disabled {
    background: ${(props) => getBackgroundColor(props.theme, props.weight, true)};
    color: ${(props) => getFontColor(props.theme, props.weight, true)};
    border: none;
    cursor: not-allowed;
  }

  svg {
    width: 100%;
    height: 100%;
    max-width: ${(props) => mapIconSize[props.size]};
    max-height: ${(props) => mapIconSize[props.size]};
  }
  svg > rect {
    width: 100%;
    height: 100%;
    x: 0;
    y: 0;
    ${(props: any) =>
      `
        opacity: 20%;
        fill: ${getFontColor(props.theme, props.weight, props.disabled)}
      `};
  }
`;

export const StyledHref = styled.a`
  text-decoration: unset;
`;

export const StyledChildrenButton = styled.div<
  Pick<ButtonProps, "iconDirection">
>`
  margin: ${(props) => mapMarginChildren[props.iconDirection ?? "none"]};
  white-space: nowrap;
`;
