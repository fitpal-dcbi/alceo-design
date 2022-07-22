import React from "react";
import { ButtonProps } from "../type";
import { StyledButtonIcon } from "../style-icon";

const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { 
      theme= 'primary', 
      weight= 'solid',
      size= 'md', 
      disabled= false,
      fullWidth = false,
      prefix,
      id,
    } = props;
  
    return (
      <StyledButtonIcon 
        id={id}
        weight={weight} 
        theme={theme} 
        size={size} 
        fullWidth={fullWidth}
        disabled={disabled}
        ref={ref}
      >
        {prefix}
      </StyledButtonIcon>
    );
  }
);

export default ButtonIcon;
