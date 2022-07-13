import styled from "styled-components";
import { ButtonProps, ButtonSize, ButtonTheme, ButtonWeight } from "./index";

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
  primary: "#FF6112",
  secondary: "#5CA898",
};

const mapButtonColorDisabled = {
  primary: "#FFC6A7",
  secondary: "#B6DAD3",
};

export const mapIconSize = {
  sm: ".75rem",
  md: "1.25rem",
  lg: "1.25rem"
};

const mapMarginChildren = {
  none: "0",
  left: "0 .625rem 0 0",
  right: "0 0 0 .625rem",
  both: "0 .625rem"
};

type StyledButtonProps = {
  theme: ButtonTheme;
  weight: ButtonWeight;
  size: ButtonSize;
  disabled: boolean;
  fullWidth: boolean;
};

export const StyledButton = styled.button<StyledButtonProps>`
  background: ${(props) => props.weight === 'solid' ? mapButtonBgColor[props.theme as keyof typeof mapButtonBgColor] : '#FFFFFF'};
  border: ${(props) => props.weight === 'outline' ? `1px solid ${mapButtonBgColor[props.theme as keyof typeof mapButtonBgColor]}` : 'none'};
  color: ${(props) => props.weight === 'solid' ? '#FFFFFF' : mapButtonBgColor[props.theme as keyof typeof mapButtonBgColor]};
  width: ${(props) => props.fullWidth ? '100%' : 'fit-content'};
  padding: ${(props) =>  props.weight === 'inline' ? '0' : mapButtonSize[props.size]};
  height: ${(props) =>  mapButtonHeight[props.size]};;
  font-size: ${(props) => mapButtonFontSize[props.size]};
  border-radius: 6.25rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(props) => !props.disabled &&
    `&:hover {
      filter: ${(props: any) => props.weight != 'inline' ? 'brightness(0.9) contrast(1.2)' : 'none'};
      transform: scale(1.03);
      &:before {
        bottom: 3px;
        filter: blur(6px) brightness(1);
      }
    };`
  };

  &:disabled {
    background: ${(props) => props.weight != 'inline' && mapButtonColorDisabled[props.theme as keyof typeof mapButtonColorDisabled]};
    color: ${(props) => props.weight != 'inline' ? '#ffffff' : mapButtonColorDisabled[props.theme as keyof typeof mapButtonColorDisabled]};
    border: none;
    cursor: not-allowed;
  };

  svg {
    width: 100%;
    height: 100%;
    max-width: ${(props) => mapIconSize[props.size]};
    max-height: ${(props) => mapIconSize[props.size]};
  };
  svg > rect {
    width: 100%;
    height: 100%;
    x: 0;
    y: 0;
    ${(props: any) => props.weight != 'solid' && 
      `
        opacity: 20%;
        fill: #FF6112;  
      `  
    };
  };
`;

export const StyledHref = styled.a`
  text-decoration: unset;
`;

export const StyledChildrenButton = styled.div<Pick<ButtonProps, "suffixDirection">>`
  margin: ${(props) => mapMarginChildren[props.suffixDirection ?? 'none']};
  white-space: nowrap;
`;
