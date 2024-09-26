import React, { ReactNode } from "react";

type BadgeVariant =
  | "primary"
  | "success"

export interface BaseBadgeProps {
  variant?: BadgeVariant;
  inverted?: boolean;
  hasInfoIcon?: boolean;
  prefix?: React.ReactNode;
  iconOnly?: boolean;
  children?: ReactNode;
}
