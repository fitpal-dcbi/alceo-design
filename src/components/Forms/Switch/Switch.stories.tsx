import React, { useState } from "react";
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
  },
} as Meta;

export const Switch: Story<BaseSwitchProps> = ({
  type,
  readOnly,
  disabled,
  defaultChecked,
  name,
}) => {
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <div>
      <SwitchComponent
        type={type}
        readOnly={readOnly}
        disabled={disabled}
        onChange={(value) => setSwitchValue(value)}
        defaultChecked={defaultChecked}
        name={name}
      />

      <p>Toggle switch : {switchValue.toString()}</p>
    </div>
  );
};
