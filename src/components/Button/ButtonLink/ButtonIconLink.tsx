import React from "react";
import { FC } from "react";
import { ButtonLinkProps } from "../type";
import { StyledButtonIcon } from "../style-icon";
import { StyledHref } from "../style";
import { Icons } from "../../Icon/index";

const ButtonIconLink: FC<ButtonLinkProps> = (props) => {
  const { 
    theme= 'primary', 
    weight= 'solid',
    size= 'md', 
    disabled= false,
    fullWidth = false,
    href='https://www.sirka.io/',
    target='_blank',
    suffix="SquareOrange"
  } = props;

  return (
    <StyledHref href={href} target={target}>
      <StyledButtonIcon
        weight={weight} theme={theme} 
        size={size} fullWidth={fullWidth}
        disabled={disabled}
      >
        <Icons type={suffix} size="100%"/>
      </StyledButtonIcon>
    </StyledHref>
  );
};

export default ButtonIconLink;
