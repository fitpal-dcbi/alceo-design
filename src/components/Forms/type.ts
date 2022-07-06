import { Control, RegisterOptions } from "react-hook-form";

export interface BaseControlledInputProps {
  id: string;
  name: string;
  control: Control<any>;
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
  defaultValue?: string | boolean | number;
  placeholder?: string;
}
