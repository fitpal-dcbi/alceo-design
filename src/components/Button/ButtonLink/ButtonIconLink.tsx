import React from "react";
import { StyledHref } from "../style";
import { StyledButtonIcon } from "../style-icon";
import { ButtonLinkProps } from "../type";

const ButtonIconLink = React.forwardRef<HTMLButtonElement, ButtonLinkProps>(
  (props, ref) => {
    const {
      theme = "primary",
      weight = "solid",
      size = "md",
      disabled = false,
      fullWidth = false,
      href = "https://www.sirka.io/",
      target = "_blank",
      prefix,
      onClick,
      type,
    } = props;

    return (
      <StyledHref href={href} target={target}>
        <StyledButtonIcon
          weight={weight}
          theme={theme}
          size={size}
          fullWidth={fullWidth}
          disabled={disabled}
          onClick={onClick}
          type={type}
          ref={ref}
        >
          {prefix}
        </StyledButtonIcon>
      </StyledHref>
    );
  }
);

export default ButtonIconLink;
