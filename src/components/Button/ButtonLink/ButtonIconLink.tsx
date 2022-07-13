import React, { FC } from "react";
import { ButtonLinkProps, StyledButtonIcon, StyledHref } from "../index";

const ButtonIconLink: FC<ButtonLinkProps> = (props) => {
  const { 
    theme= 'primary', 
    weight= 'solid',
    size= 'md', 
    disabled= false,
    fullWidth = false,
    href='https://www.sirka.io/',
    target='_blank',
    suffix
  } = props;

  return (
    <StyledHref href={href} target={target}>
      <StyledButtonIcon
        weight={weight} theme={theme} 
        size={size} fullWidth={fullWidth}
        disabled={disabled}
      >
        {suffix}
      </StyledButtonIcon>
    </StyledHref>
  );
};

export default ButtonIconLink;
