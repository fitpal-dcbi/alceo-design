import React from "react";
import { FC } from "react";
import { StyledButton } from "../Button/style";
import { ButtonLinkProps } from "../Button/type";

const ButtonLink: FC<ButtonLinkProps> = (props) => {
  const { 
    children, 
    theme= 'primary', 
    weight= 'solid',
    size= 'md', 
    disabled= false,
    fullWidth = false,
    style={},
    href='https://www.sirka.io/',
    target='_blank',
    onClick,
  } = props;

  return (
    <a href={href} target={target}>
      <StyledButton 
        weight={weight} theme={theme} 
        size={size} fullWidth={fullWidth}
        disabled={disabled} onClick={(val) => {if(val) onClick?.(val)}}
        style={style}
      >
        {children}
      </StyledButton>
    </a>
  );
};

export default ButtonLink;
