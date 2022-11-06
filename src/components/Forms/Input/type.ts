import React from "react";
import { BaseControlledInputProps } from "../type";

export interface BaseInputProps {
  error?: string;
  help?: string;
  inlineLabel?: boolean;
  label?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export type InputProps = BaseInputProps &
  React.InputHTMLAttributes<HTMLInputElement>;

export type ControlledInputProps = InputProps & BaseControlledInputProps;
