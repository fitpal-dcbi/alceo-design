import React, { FC }  from "react";
import { ButtonLinkProps, StyledButton, StyledChildrenButton, StyledHref } from "../index";

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
    suffix,
    suffixDirection="none",
  } = props;

  return (
    <StyledHref href={href} target={target}>
      <StyledButton 
        weight={weight} theme={theme} 
        size={size} fullWidth={fullWidth}
        disabled={disabled} 
      >
        {(suffixDirection === 'right' || suffixDirection === 'both') && suffix} 
          <StyledChildrenButton suffixDirection={suffixDirection}>{children}</StyledChildrenButton>
        {(suffixDirection === 'left' || suffixDirection === 'both') && suffix}
      </StyledButton>
    </StyledHref>
  );
};

export default ButtonLink;
