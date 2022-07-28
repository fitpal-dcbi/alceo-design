import React from "react";
import { ButtonProps } from "../type";
import { StyledButtonIcon } from "../style-icon";

const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      theme = "primary",
      weight = "solid",
      size = "md",
      disabled = false,
      fullWidth = false,
      prefix,
      onClick,
      type,
    } = props;

    return (
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
    );
  }
);

export default ButtonIcon;
