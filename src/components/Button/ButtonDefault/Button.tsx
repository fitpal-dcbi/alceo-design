import React, { FC } from "react";

import { StyledButton } from "../style";
import { ButtonProps } from "../type";
import { Icons } from "../../Icon/index";

const Button: FC<ButtonProps> = (props) => {
  const { 
    children, 
    theme= 'primary', 
    weight= 'solid',
    size= 'md', 
    disabled= false,
    fullWidth= false,
    suffixDirection="none",
    suffix="SquareOrange",
    onClick,
  } = props;

  return <StyledButton 
    weight={weight} theme={theme} 
    size={size} fullWidth={fullWidth}
    disabled={disabled} onClick={(val) => {if(val) onClick?.(val)}}
  >
    {(suffixDirection === 'right' || suffixDirection === 'both') && <Icons type={suffix}/>} {children}
    {(suffixDirection === 'left' || suffixDirection === 'both') && <Icons type={suffix}/>}
  </StyledButton>
};

export default Button;
