import React from "react";

interface BaseInputProps {
  error?: string;
  help?: string;
  inlineLabel?: boolean;
  label?: string;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
}

export type InputProps = BaseInputProps &
  React.InputHTMLAttributes<HTMLInputElement>;
