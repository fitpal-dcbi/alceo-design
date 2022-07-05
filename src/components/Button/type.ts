import { MouseEventHandler } from "react";

export type ButtonTheme = "primary" | "secondary";

export type ButtonSize = "full" | "half" | "default";

interface BaseButtonProps {
  children?: React.ReactNode;
  theme?: ButtonTheme;
  size?: ButtonSize;
}

type HTMLButtonProps = {
  onClick?: MouseEventHandler<any>;
  type?: "button" | "submit" | "reset";
} & BaseButtonProps;

export type ButtonProps = BaseButtonProps & HTMLButtonProps;
