import React from "react";
import { ButtonProps } from "../type";
import { StyledButton, StyledChildrenButton } from "../style";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      theme = "primary",
      weight = "solid",
      size = "md",
      disabled = false,
      fullWidth = false,
      iconDirection = "none",
      suffix,
      prefix,
      onClick,
      type,
      fontSize = ""
    } = props;

    return (
      <StyledButton
        weight={weight}
        theme={theme}
        size={size}
        fullWidth={fullWidth}
        fontSize={fontSize}
        disabled={disabled}
        ref={ref}
        type={type}
        onClick={(val) => {
          if (val) onClick?.(val);
        }}
      >
        {(iconDirection === "left" || iconDirection === "both") && prefix}
        <StyledChildrenButton iconDirection={iconDirection}>
          {children}
        </StyledChildrenButton>
        {(iconDirection === "right" || iconDirection === "both") && suffix}
      </StyledButton>
    );
  }
);

export default Button;
