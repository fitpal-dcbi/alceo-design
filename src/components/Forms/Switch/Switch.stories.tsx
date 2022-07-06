import React from "react";
import { Meta, Story } from "@storybook/react";

import { Switch as SwitchComponent } from "./index";
import { BaseSwitchProps } from "./type";

export default {
  title: "Components/Switch",
  component: SwitchComponent,
  argTypes: {
    type: {
      options: ["default", "withIcon"],
      control: { type: "radio" },
    },
    readOnly: {
      options: [true, false],
      control: { type: "boolean" },
    },
    disabled: {
      options: [true, false],
      control: { type: "boolean" },
    },
  },
} as Meta;

export const SwitchInputExample: Story<BaseSwitchProps> = ({
  type,
  readOnly,
  disabled,
}) => {
  const handleChange = (value: boolean) => {
    console.log("wahib switch value", value);
  };

  return (
    <SwitchComponent
      type={type}
      readOnly={readOnly}
      disabled={disabled}
      onChange={(value) => handleChange(value)}
    />
  );
};
