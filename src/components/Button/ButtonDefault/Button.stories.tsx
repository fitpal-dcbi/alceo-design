import React from "react";
import { Story, Meta } from "@storybook/react";
import Button from "./Button";
import { ButtonIconProps, ButtonProps } from "../type";
import ButtonIcon from "./ButtonIcon";
import CheckWhite from "../../../assets/check_icon.svg";

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
    // style: {                             
    //   control: { type: "object" },
    //   table: {
    //     category: 'Appearance',
    //   },
    // }
  }
} as Meta;

// const onClicked = (value: any) => {
//   console.log('amel value', value)
// }
// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;
const TemplateIcon: Story<ButtonIconProps> = (args) => <ButtonIcon {...args} />;


// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { 
  children: "Click me", 
  theme: "primary", 
  size: "md", 
  weight: "solid", 
  fullWidth: false,
  disabled: false,
  type:"button",
  // style:{},
};

export const PrimaryIcon = TemplateIcon.bind({});
PrimaryIcon.args = { ...Primary.args, suffix: <CheckWhite/>, size:'sm'};

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, theme: "secondary"};


export const SecondaryIcon = TemplateIcon.bind({});
SecondaryIcon.args = { ...Primary.args, suffix: <CheckWhite/>, theme: "secondary", size:'sm'};
