import React from "react";
import { ButtonLinkProps } from "../type";
import { StyledButton, StyledChildrenButton, StyledHref } from "../style";

const ButtonLink = React.forwardRef<HTMLButtonElement, ButtonLinkProps>(
  (props, ref) => {
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
      prefix,
      suffixDirection="none",
    } = props;

    return (
      <StyledHref href={href} target={target}>
        <StyledButton 
          weight={weight} 
          theme={theme} 
          size={size} 
          fullWidth={fullWidth}
          disabled={disabled} 
          ref={ref}
        >
          {(suffixDirection === 'right' || suffixDirection === 'both') && prefix} 
            <StyledChildrenButton suffixDirection={suffixDirection}>{children}</StyledChildrenButton>
          {(suffixDirection === 'left' || suffixDirection === 'both') && suffix}
        </StyledButton>
      </StyledHref>
    );
  }
);

export default ButtonLink;
