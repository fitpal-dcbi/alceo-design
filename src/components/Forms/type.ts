import { Control, RegisterOptions } from "react-hook-form";

export interface BaseControlledInputProps {
  name: string;
  control: Control<any>;
  rules?: Exclude<
    RegisterOptions,
    "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
  defaultValue?: string | boolean | number;
  placeholder?: string;
};

export interface CardDashboardProps {
  header?: string;
  body?: any;
  editable?: boolean;
}
