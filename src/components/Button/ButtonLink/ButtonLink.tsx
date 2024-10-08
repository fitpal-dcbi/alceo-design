import React from "react";
import { ButtonLinkProps } from "../type";
import { StyledButton, StyledChildrenButton, StyledHref } from "../style";

const ButtonLink = React.forwardRef<HTMLButtonElement, ButtonLinkProps>(
  (props, ref) => {
    const {
      children,
      theme = "primary",
      weight = "solid",
      size = "md",
      disabled = false,
      fullWidth = false,
      href = "https://www.sirka.io/",
      target = "_blank",
      suffix,
      prefix,
      iconDirection = "none",
      type,
      fontSize = ""
    } = props;

    return (
      <StyledHref href={href} target={target}>
        <StyledButton
          weight={weight}
          theme={theme}
          size={size}
          fullWidth={fullWidth}
          fontSize={fontSize}
          disabled={disabled}
          type={type}
          ref={ref}
        >
          {(iconDirection === "left" || iconDirection === "both") && prefix}
          <StyledChildrenButton iconDirection={iconDirection}>
            {children}
          </StyledChildrenButton>
          {(iconDirection === "right" || iconDirection === "both") && suffix}
        </StyledButton>
      </StyledHref>
    );
  }
);

export default ButtonLink;
