import React, { ReactNode } from "react";

type BadgeVariant =
  | "light"
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "critical";

export interface BaseBadgeProps {
  variant?: BadgeVariant;
  inverted?: boolean;
  hasInfoIcon?: boolean;
  prefix?: React.ReactNode;
  iconOnly?: boolean;
  children?: ReactNode;
}
