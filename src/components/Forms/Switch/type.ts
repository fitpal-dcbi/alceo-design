export interface BaseSwitchProps {
  defaultChecked?: boolean;
  disabled?: boolean;
  name?: string;
  onChange: (value: any) => void;
  readOnly?: boolean;
  type?: "default" | "withIcon";
}
