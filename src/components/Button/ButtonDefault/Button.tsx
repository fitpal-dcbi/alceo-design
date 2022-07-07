import React, { FC } from "react";

import { StyledButton } from "../style";
import { ButtonProps } from "../type";

const Button: FC<ButtonProps> = (props) => {
  const { 
    children, 
    theme   = 'primary', 
    weight = 'solid',
    size    = 'md', 
    disabled= false,
    fullWidth = false,
    onClick,
  } = props;

  return <StyledButton 
    weight={weight} theme={theme} 
    size={size} fullWidth={fullWidth}
    disabled={disabled} onClick={(val) => {if(val) onClick?.(val)}}
  >
    {children}
  </StyledButton>
};

export default Button;
