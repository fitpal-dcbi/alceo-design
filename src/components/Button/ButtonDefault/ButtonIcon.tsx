import React from "react";
import { FC } from "react";
import { ButtonIconProps } from "../type";
import { StyledButtonIcon } from "../style-icon";
import CheckWhite from "../../../assets/check_icon.svg";
import { Icons } from "../../Icon/index";

const ButtonIcon: FC<ButtonIconProps> = (props) => {
  const { 
    theme= 'primary', 
    weight= 'solid',
    size= 'md', 
    disabled= false,
    fullWidth = false,
    suffix="InfoIcon",
  } = props;

  return (
    <StyledButtonIcon 
      weight={weight} theme={theme} 
      size={size} fullWidth={fullWidth}
      disabled={disabled}
    >
      <Icons type={suffix} size="100%"/>
    </StyledButtonIcon>
  );
};

export default ButtonIcon;
