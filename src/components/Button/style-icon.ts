import styled from "styled-components";
import { ButtonTheme, ButtonSize, ButtonWeight } from "./type";
import { mapIconSize } from "./style";

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
  primary: "#FA7E4B",
  secondary: "#FCFBE6",
};

const mapButtonColorDisabled = {
  primary: "#FFC6A7",
  secondary: "",
};

const mapButtonWidth = {
  sm: "2rem",
  md: "2.75rem",
  lg: "3.25rem"
}

export const StyledButtonIcon = styled.button<StyledButtonIconProps>`
  background: ${(props) => props.weight === 'solid' ? mapButtonBgColor[props.theme as keyof typeof mapButtonBgColor] : 'transparent'};
  border: ${(props) => props.weight === 'outline' ? `1px solid ${mapButtonBgColor[props.theme as keyof typeof mapButtonBgColor]}` : 'transparent'};
  color: ${(props) => props.weight === 'solid' ? 'transparent' : mapButtonBgColor[props.theme as keyof typeof mapButtonBgColor]};
  width: ${(props) =>  mapButtonWidth[props.size]};
  height: ${(props) =>  mapButtonWidth[props.size]};
  padding: ${(props) =>  mapButtonSize[props.size]};
  border-radius: 6.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 250ms ease; 

  ${(props) => !props.disabled &&
    `&:hover {
      filter: brightness(0.9) contrast(1.2);
      transform: scale(1.03);
      transition: all 250ms ease; 
      &:before {
        bottom: 3px;
        filter: blur(6px) brightness(1);
        transition: all 250ms ease; 
      }
    };`
  };

  &:disabled {
    background: ${(props) => props.weight != 'inline' && mapButtonColorDisabled[props.theme as keyof typeof mapButtonColorDisabled]};
    color: ${(props) => props.weight != 'inline' ? '#ffffff' : mapButtonColorDisabled[props.theme as keyof typeof mapButtonColorDisabled]};
    border: none;
    cursor: not-allowed;
  };

  ${(props) =>  props.weight === 'inline' && 
  `  path {
      fill: #FF6112 !important;
    }`
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