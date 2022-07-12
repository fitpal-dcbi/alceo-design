import { BaseControlledInputProps } from "../type";

export interface BaseCheckboxProps {
  name: string;
  disabled?: boolean;
  id: string;
  value?: string;
  label?: string;
  description?: string;
  hasError: boolean;
  onChange?: (value: any) => void;
};

export type CheckboxProps = BaseCheckboxProps & BaseControlledInputProps;