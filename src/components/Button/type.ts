import { MouseEventHandler } from "react";

export type ButtonTheme = "primary" | "secondary";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonWeight = "solid" | "outline" | "inline";

interface BaseButtonProps {
  children?: React.ReactNode;
  weight?: ButtonWeight;
  theme?: ButtonTheme;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
};

interface BaseButtonLinkProps {
  href?: string;
  target?: string;
  suffix?: any;
};

interface BaseButtonIconProps {
  suffix?: any;
}

type HTMLButtonProps = {
  onClick?: MouseEventHandler<any>;
  type?: "button" | "submit" | "reset";
} & BaseButtonProps;

export type ButtonProps = BaseButtonProps & HTMLButtonProps;
export type ButtonLinkProps = ButtonProps & BaseButtonLinkProps;
export type ButtonIconProps = ButtonProps & BaseButtonIconProps;
