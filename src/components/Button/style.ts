import styled from "styled-components";
import { ButtonSize, ButtonTheme, ButtonWeight } from "./type";

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

const mapButtonBgColor = {
  primary: "#FF6112",
  secondary: "#5CA898",
};

const mapButtonColorDisabled = {
  primary: "#FFC6A7",
  secondary: "#B6DAD3",
}

type StyledButtonProps = {
  theme: ButtonTheme;
  weight: ButtonWeight;
  size: ButtonSize;
  disabled: boolean;
  fullWidth: boolean;
  style: any;
};

export const StyledButton = styled.button<StyledButtonProps>`
  background: ${(props) => props.weight === 'solid' ? mapButtonBgColor[props.theme as keyof typeof mapButtonBgColor] : '#FFFFFF'};
  border: ${(props) => props.weight === 'outline' ? `1px solid ${mapButtonBgColor[props.theme as keyof typeof mapButtonBgColor]}` : 'none'};
  color: ${(props) => props.weight === 'solid' ? '#FFFFFF' : mapButtonBgColor[props.theme as keyof typeof mapButtonBgColor]};
  width: ${(props) => props.fullWidth ? '100%' : 'fit-content'};
  padding: ${(props) =>  props.weight === 'inline' ? '0' : mapButtonSize[props.size]};
  font-size: ${(props) => mapButtonFontSize[props.size]};
  border-radius: 6.25rem;
  font-weight: 500;
  cursor: pointer;

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
`;
