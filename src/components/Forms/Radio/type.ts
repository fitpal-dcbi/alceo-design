import { BaseControlledInputProps } from "../type";

export interface BaseRadioProps {
  name?: string;
  disabled?: boolean;
  onChange?: (value: any) => void;
  children?: string;
  id?: string;
  value?: string;
  hasError?: boolean;
  description?: string;
};

export type RadioProps = BaseRadioProps & BaseControlledInputProps;