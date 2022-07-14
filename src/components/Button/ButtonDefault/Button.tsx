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
      suffixDirection = "none",
      suffix,
      prefix,
      onClick,
    } = props;

    return (
      <StyledButton
        weight={weight}
        theme={theme}
        size={size}
        fullWidth={fullWidth}
        disabled={disabled}
        suffixDirection={suffixDirection}
        ref={ref}
        onClick={(val) => {
          if (val) onClick?.(val);
        }}
      >
        {(suffixDirection === "right" || suffixDirection === "both") && prefix}
        <StyledChildrenButton suffixDirection={suffixDirection}>
          {children}
        </StyledChildrenButton>
        {(suffixDirection === "left" || suffixDirection === "both") && suffix}
      </StyledButton>
    );
  }
);

export default Button;
