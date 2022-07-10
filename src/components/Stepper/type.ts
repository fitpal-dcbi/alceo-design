import React, { ReactNode } from "react";

export interface BaseStepperProps {
  onAddClick: () => void;
  onRemoveClick: () => void;
  quantity?: number;
}
