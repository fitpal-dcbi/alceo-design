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
  },
} as Meta;

export const SwitchInputExample: Story<BaseSwitchProps> = ({ type }) => {
  return <SwitchComponent type={type} />;
};
