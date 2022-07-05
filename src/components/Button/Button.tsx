import React, { FC } from "react";

import { StyledButton } from "./style";
import { ButtonProps } from "./type";

const Button: FC<ButtonProps> = (props) => {
  const { children, theme = "primary", size = "default" } = props;
  return <StyledButton size={size}>{children}</StyledButton>;
};

export default Button;
