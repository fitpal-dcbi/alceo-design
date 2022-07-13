import React, { MouseEventHandler } from "react";

export type ButtonTheme = "primary" | "secondary";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonWeight = "solid" | "outline" | "inline";
export type ButtonSuffixDirection = "none" | "right" | "left" | "both";

interface BaseButtonProps {
  children?: React.ReactNode;
  weight?: ButtonWeight;
  theme?: ButtonTheme;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  suffixDirection?: ButtonSuffixDirection;
};

interface BaseButtonLinkProps {
  href?: string;
  target?: string;
  suffix?: React.ReactNode;
};

interface BaseButtonIconProps {
  suffix?: React.ReactNode;
}

type HTMLButtonProps = {
  onClick?: MouseEventHandler<any>;
  type?: "button" | "submit" | "reset";
} & BaseButtonProps;

export type ButtonProps = BaseButtonProps & HTMLButtonProps & BaseButtonIconProps;
export type ButtonLinkProps = ButtonProps & BaseButtonLinkProps;
export type ButtonIconProps = ButtonProps & BaseButtonIconProps;
