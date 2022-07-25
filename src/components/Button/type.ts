import React, { MouseEventHandler } from "react";

export type ButtonTheme = "primary" | "secondary";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonWeight = "solid" | "outline" | "inline";
export type ButtonIconDirection = "none" | "right" | "left" | "both";

type BaseButtonProps = {
  children?: React.ReactNode;
  weight?: ButtonWeight;
  theme?: ButtonTheme;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  iconDirection?: ButtonIconDirection;
};

type BaseButtonIconProps = {
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
};

type HTMLButtonProps = {
  onClick?: MouseEventHandler<any>;
  type?: "button" | "submit" | "reset";
} & BaseButtonProps;

type BaseButtonLinkProps = {
  href?: string;
  target?: string;
} & HTMLButtonProps & BaseButtonIconProps;

export type ButtonProps = HTMLButtonProps & BaseButtonIconProps;
export type ButtonLinkProps = BaseButtonLinkProps;
