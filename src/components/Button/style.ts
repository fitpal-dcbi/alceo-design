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

const mapButtonBgColor = {
  primary: "#FA7E4B",
  secondary: "#FCFBE6",
  invert: "#FFFFFF"
};

const mapButtonFontColor = {
  primary: "#FCFBE6",
  secondary: "#FA7E4B",
  invert: "#FA7E4B"
}

const mapButtonColorDisabled = {
  primary: "#FFC6A7",
  secondary: "",
  invert: ""
};

export const mapIconSize = {
  sm: ".75rem",
  md: "1.25rem",
  lg: "1.25rem",
};

const mapMarginChildren = {
  none: "0",
  right: "0 .625rem 0 0",
  left: "0 0 0 .625rem",
  both: "0 .625rem",
};

const getBackgroundColor = (theme: ButtonTheme, weight: ButtonWeight) => {
  if (theme === "invert") {
    return weight === "solid" ? "#FFFFFF" : "transparent";
  }
  return weight === "solid" ? mapButtonBgColor[theme] : "transparent";
};

const getBorderColor = (theme: ButtonTheme, weight: ButtonWeight) => {
  if (theme === "invert" && weight !== "inline") {
    return `1px solid ${mapButtonFontColor[theme]}`;
  }
  if (weight === "outline") {
    return `1px solid ${mapButtonBgColor[theme]}`;
  }
  return "none";
};

const getFontColor = (theme: ButtonTheme, weight: ButtonWeight) => {
  if (weight === "solid" || theme === "invert") {
    return mapButtonFontColor[theme];
  }
  return mapButtonBgColor[theme];
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
  background: ${(props) => getBackgroundColor(props.theme, props.weight)};
  border: ${(props) => getBorderColor(props.theme, props.weight)};
  color: ${(props) => getFontColor(props.theme, props.weight)};
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
        props.weight != "inline" ? "brightness(0.9) contrast(1.2)" : "none"};
      transform: scale(1.03);
      transition: all 250ms ease; 
      &:before {
        bottom: 3px;
        filter: blur(6px) brightness(1);
        transition: all 250ms ease; 
      };
    };`};

  &:disabled {
    background: ${(props) =>
      props.weight != "inline" &&
      mapButtonColorDisabled[
        props.theme as keyof typeof mapButtonColorDisabled
      ]};
    color: ${(props) =>
      props.weight != "inline"
        ? "#ffffff"
        : mapButtonColorDisabled[
            props.theme as keyof typeof mapButtonColorDisabled
          ]};
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
      props.weight != "solid" &&
      `
        opacity: 20%;
        fill: #FF6112;  
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
