import React, { FC, MouseEventHandler } from "react";

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
  return <button>{children}</button>;
};

export default Button;
