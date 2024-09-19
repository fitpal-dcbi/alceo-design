import React from "react";
import { Story, Meta } from "@storybook/react";
import {
  Button, 
  ButtonIcon, 
  ButtonProps
} from "../index";
import { ReactComponent as SquareOrange } from "../../../assets/square.svg";
import { ReactComponent as SquareSecondary } from "../../../assets/square-secondary.svg";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    theme: {
      options: ["primary", "invert"],
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
    iconDirection: {
      options: ["none", "right", "left", "both"],
      control: { type: "inline-radio" },
      table: {
        category: 'Appearance Icon',
      },
    },
    suffix: {
      table: {
        disable: true
      },
    },
    prefix: {
      table: {
        disable: true
      },
    },
  }
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;
const TemplateIcon: Story<ButtonProps> = (args) => <ButtonIcon {...args} />;


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
  iconDirection: "none",
  suffix: <SquareOrange/>,
  prefix: <SquareOrange/>
};

export const PrimaryIcon = TemplateIcon.bind({});
PrimaryIcon.args = { ...Primary.args, size:'sm'};

// export const Secondary = Template.bind({});
// Secondary.args = { ...Primary.args, theme: "secondary", suffix: <SquareSecondary/>};

// export const SecondaryIcon = TemplateIcon.bind({});
// SecondaryIcon.args = { ...Secondary.args, size:'sm'};

export const PrimaryIconText = Template.bind({});
PrimaryIconText.args = { ...Primary.args, iconDirection: "right" };

// export const SecondaryIconText = Template.bind({});
// SecondaryIconText.args = { ...Secondary.args, iconDirection: "right" };
