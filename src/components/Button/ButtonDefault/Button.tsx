import React, { FC } from "react";

import { ButtonProps, StyledButton, StyledChildrenButton } from "../index";

const Button: FC<ButtonProps> = (props) => {
  const { 
    children, 
    theme= 'primary', 
    weight= 'solid',
    size= 'md', 
    disabled= false,
    fullWidth= false,
    suffixDirection="none",
    suffix,
    onClick,
  } = props;

  return <StyledButton 
    weight={weight} theme={theme} 
    size={size} fullWidth={fullWidth}
    disabled={disabled} onClick={(val) => {if(val) onClick?.(val)}}
  >
    {(suffixDirection === 'right' || suffixDirection === 'both') && suffix} 
      <StyledChildrenButton suffixDirection={suffixDirection}>{children}</StyledChildrenButton>
    {(suffixDirection === 'left' || suffixDirection === 'both') && suffix}
    
  </StyledButton>
};

export default Button;
