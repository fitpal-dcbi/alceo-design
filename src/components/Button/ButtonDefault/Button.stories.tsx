import React from "react";
import { Story, Meta, StoryFn } from "@storybook/react";
import {
  Button, 
  ButtonProps
} from "../index";
import { ReactComponent as SquareOrange } from "../../../assets/square.svg";

const withDynamicBackground = (StoryFn: StoryFn, context: any) => {
  const { theme } = context.args;

  const backgroundColor = theme === "invert" ? "#FA7E4B" : "#FFF"; 

  return (
    <div style={{ backgroundColor, padding: '20px', borderRadius: '16px', minHeight: '100vh' }}>
      <StoryFn />
    </div>
  );
};

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
    fontSize: {
      control: { type: "text" },
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
  },
  decorators: [withDynamicBackground], 
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args} />;
// const TemplateIcon: Story<ButtonProps> = (args) => <ButtonIcon {...args} />;

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

export const PrimaryIcon = Template.bind({});
PrimaryIcon.args = { ...Primary.args, size:'sm', iconDirection: "right"};

export const PrimaryIconText = Template.bind({});
PrimaryIconText.args = { ...Primary.args, iconDirection: "right" };

// export const Secondary = Template.bind({});
// Secondary.args = { ...Primary.args, theme: "secondary", suffix: <SquareSecondary/>};

// export const SecondaryIcon = TemplateIcon.bind({});
// SecondaryIcon.args = { ...Secondary.args, size:'sm'};

// export const SecondaryIconText = Template.bind({});
// SecondaryIconText.args = { ...Secondary.args, iconDirection: "right" };
