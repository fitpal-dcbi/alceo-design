import styled from "styled-components";
import { ButtonSize, ButtonTheme, ButtonWeight } from "./type";


type StyledButtonIconProps = {
  theme: ButtonTheme;
  weight: ButtonWeight;
  size: ButtonSize;
  disabled: boolean;
  fullWidth: boolean;
};

const mapButtonSize = {
  sm: ".625rem",
  md: ".75rem",
  lg: "1rem",
};

const mapButtonBgColor = {
  primary: "#FF6112",
  secondary: "#5CA898",
};

const mapButtonColorDisabled = {
  primary: "#FFC6A7",
  secondary: "#B6DAD3",
}

const mapButtonWidth = {
  sm: "2rem",
  md: "2.75rem",
  lg: "3.25rem"
}

export const StyledButtonIcon = styled.button<StyledButtonIconProps>`
  background: ${(props) => props.weight === 'solid' ? mapButtonBgColor[props.theme as keyof typeof mapButtonBgColor] : '#FFFFFF'};
  border: ${(props) => props.weight === 'outline' ? `1px solid ${mapButtonBgColor[props.theme as keyof typeof mapButtonBgColor]}` : 'none'};
  color: ${(props) => props.weight === 'solid' ? '#FFFFFF' : mapButtonBgColor[props.theme as keyof typeof mapButtonBgColor]};
  width: ${(props) => props.weight === 'inline' ? 'fit-content' : mapButtonWidth[props.size]};
  height: ${(props) => props.weight === 'inline' ? 'fit-content' : mapButtonWidth[props.size]};
  padding: ${(props) =>  props.weight === 'inline' ? '0' : mapButtonSize[props.size]};
  border-radius: 6.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => !props.disabled &&
    `&:hover {
      filter: brightness(0.9) contrast(1.2);
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
  }

  ${(props) =>  props.weight === 'inline' && 
  `  path {
      fill: #FF6112 !important;
    }`
  }
`;