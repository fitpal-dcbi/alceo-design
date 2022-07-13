import React, { FC } from "react";
import { ButtonIconProps, StyledButtonIcon } from "../index";

const ButtonIcon: FC<ButtonIconProps> = (props) => {
  const { 
    theme= 'primary', 
    weight= 'solid',
    size= 'md', 
    disabled= false,
    fullWidth = false,
    suffix,
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
