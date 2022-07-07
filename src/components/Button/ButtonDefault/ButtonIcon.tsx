import React from "react";
import { FC } from "react";
import { ButtonIconProps } from "../type";
import { StyledButtonIcon } from "../style-icon";
import CheckWhite from "../../../assets/check_icon.svg";

const ButtonIcon: FC<ButtonIconProps> = (props) => {
  const { 
    theme= 'primary', 
    weight= 'solid',
    size= 'md', 
    disabled= false,
    fullWidth = false,
    suffix=<CheckWhite/>,
  } = props;

  return (
    <StyledButtonIcon 
      weight={weight} theme={theme} 
      size={size} fullWidth={fullWidth}
      disabled={disabled}
    >
      {suffix}
    </StyledButtonIcon>
  );
};

export default ButtonIcon;
