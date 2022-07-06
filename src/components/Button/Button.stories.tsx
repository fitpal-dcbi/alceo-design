import React from "react";
import { Story, Meta } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./type";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    theme: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
    size: {
      options: ["full", "half", "default"],
      control: { type: "radio" },
    },
  },
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { theme: "primary", children: "Primary" };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, theme: "secondary", children: "Secondary" };
