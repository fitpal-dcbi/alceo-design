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
      table: {
        category: 'Appearance',
      },
    },
    disabled: {
      control: { type: "boolean" },
      table: {
        category: 'State',
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
      table: {
        category: 'Appearance',
      },
    },
    weight: {
      options: ["solid", "outline", "inline"],
      control: { type: "radio" },
      table: {
        category: 'Appearance',
      },
    },
    fullWidth: {
      control: { type: "boolean" },
      table: {
        category: 'Appearance',
      },
    },
    onClick: {
      action: { argTypesRegex: '^on.*' },
      table: {
        category: 'Action',
      },
    },
    type: {
      options: ["submit", "button", "reset"],
      control: { type: "radio" },
      table: {
        category: 'State',
      },
    },
    style: {                             
      control: { type: "object" },
      table: {
        category: 'Appearance',
      },
    }
  }
} as Meta;

// const onClicked = (value: any) => {
//   console.log('amel value', value)
// }
// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Default = Template.bind({});
Default.args = { 
  children: "Click me", 
  theme: "primary", 
  size: "md", 
  weight: "solid", 
  fullWidth: false,
  disabled: false,
  type:"button",
  style:{},
};

export const Secondary = Template.bind({});
Secondary.args = { ...Default.args, theme: "secondary"};

export const Outline = Template.bind({});
Outline.args = { ...Default.args, weight: "outline"};

export const Disable = Template.bind({});
Disable.args = { ...Default.args, disabled: true};

export const Large = Template.bind({});
Large.args = { ...Default.args, size: "lg"};

export const Normal = Template.bind({});
Normal.args = { ...Default.args, size: "md"};

export const Small = Template.bind({});
Small.args = { ...Default.args, size: "sm"};

export const FullWidth = Template.bind({});
FullWidth.args = { ...Default.args, fullWidth: true};
