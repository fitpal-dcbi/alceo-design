import { Control, RegisterOptions } from "react-hook-form";

export interface BaseControlledInputProps {
  name: string;
  control: Control<any>;
  rules?: RegisterOptions;
  defaultValue?: string | boolean | number;
  placeholder?: string;
}
