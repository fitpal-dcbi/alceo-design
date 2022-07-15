import React from "react";

export type AlertVariant = "infoPrimary" | "infoSecondary" | "success" | "warning" | "critical";

export type BaseAlertProps = {
  prefix?: React.ReactNode,
  header?: string,
  description?: string,
  variant?: AlertVariant,
  closable?: boolean,
};