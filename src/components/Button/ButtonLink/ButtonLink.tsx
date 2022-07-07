import React from "react";
import { FC } from "react";
import { StyledButton, StyledHref } from "../style";
import { ButtonLinkProps } from "../type";

const ButtonLink: FC<ButtonLinkProps> = (props) => {
  const { 
    children, 
    theme= 'primary', 
    weight= 'solid',
    size= 'md', 
    disabled= false,
    fullWidth = false,
    href='https://www.sirka.io/',
    target='_blank',
  } = props;

  return (
    <a href={href} target={target}>
      <StyledButton 
        weight={weight} theme={theme} 
        size={size} fullWidth={fullWidth}
        disabled={disabled} 
      >
        {children}
      </StyledButton>
    </a>
  );
};

export default ButtonLink;
