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
    defaultChecked: {
      options: [true, false],
      control: { type: "boolean" },
    },
    name: {
      control: { type: "text" },
    },
    id: {
      control: { type: "text" },
    },
  },
} as Meta;

export const Switch: Story<BaseSwitchProps> = ({
  type,
  readOnly,
  disabled,
  defaultChecked,
  name,
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
      defaultChecked={defaultChecked}
      name={name}
    />
  );
};
