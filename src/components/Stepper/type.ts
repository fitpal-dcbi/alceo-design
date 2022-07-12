import React, { ReactNode } from "react";

export interface BaseStepperProps {
  onPlusClick: () => void;
  onMinusClick: () => void;
  quantity?: number;
}
