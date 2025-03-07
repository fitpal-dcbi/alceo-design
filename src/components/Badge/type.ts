import React, { ReactNode } from "react";

type BadgeVariant =
  | "primary"
  | "success"
  | "critical"
  | "warning"
  | "info"

export interface BaseBadgeProps {
  variant?: BadgeVariant;
  inverted?: boolean;
  hasInfoIcon?: boolean;
  prefix?: React.ReactNode;
  iconOnly?: boolean;
  children?: ReactNode;
  size?: string;
  weight?: string;
}
