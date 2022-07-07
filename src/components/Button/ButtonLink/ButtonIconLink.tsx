import React from "react";
import { FC } from "react";
import { ButtonLinkProps } from "../type";
import { StyledButtonIcon } from "../style-icon";
import { StyledHref } from "../style";
import Check from "../../../assets/check_icon.svg";

const ButtonIconLink: FC<ButtonLinkProps> = (props) => {
  const { 
    theme= 'primary', 
    weight= 'solid',
    size= 'md', 
    disabled= false,
    fullWidth = false,
    href='https://www.sirka.io/',
    target='_blank',
    suffix=<Check/>
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
