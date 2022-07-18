import React from "react";

export type AlertVariant = "infoPrimary" | "infoSecondary" | "success" | "warning" | "critical";
export type DirectionOfButton = "beside" | "below";

export type BaseAlertProps = {
  prefix?: React.ReactNode,
  header?: string,
  description?: string,
  variant?: AlertVariant,
  closable?: boolean,
  showPrefix?: boolean,
  showPrimaryButton?: boolean,
  showSecondaryButton?: boolean,
  directionButton?: DirectionOfButton,
};