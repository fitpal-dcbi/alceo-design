import React, { FC, MouseEventHandler } from "react";

import { StyledButton } from "./style";

export type ButtonTheme = "primary" | "secondary";

interface BaseButtonProps {
  children?: React.ReactNode;
  theme?: ButtonTheme;
}

type HTMLButtonProps = {
  onClick?: MouseEventHandler<any>;
  type?: "button" | "submit" | "reset";
} & BaseButtonProps;

export type ButtonProps = BaseButtonProps & HTMLButtonProps;

const Button: FC<ButtonProps> = (props) => {
  const { children, theme = "primary" } = props;
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
