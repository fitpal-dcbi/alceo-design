import React from "react";
import { Meta, Story } from "@storybook/react";
import { 
  ButtonIconLink, 
  ButtonLinkProps, 
  ButtonLink, 
  ButtonProps
} from "../index";
import { ReactComponent as SquareOrange } from "../../../assets/square.svg";

export default {
  title: "Components/Button",
  component: ButtonLink,
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
    href: {
      control: {type: 'text'},
      table: {
        category: 'Link',
      }
    },
    target: {
      control: {type: 'text'},
      table: {
        category: 'Link',
      }
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
const Template: Story<ButtonLinkProps> = (args) => <ButtonLink {...args} />;
const TemplateIcon: Story<ButtonProps> = (args) => <ButtonIconLink {...args} />;

// Reuse that template for creating different stories
export const LinkPrimary = Template.bind({});
LinkPrimary.args = { 
  children: "Click me", 
  theme: "primary", 
  size: "md", 
  weight: "inline", 
  fullWidth: false,
  disabled: false,
  type:"button",
  href: "https://www.sirka.io/",
  target: "_blank",
  iconDirection: "none",
  suffix: <SquareOrange/>,
  prefix: <SquareOrange/>
};

export const LinkSecondary = Template.bind({});
LinkSecondary.args = { ...LinkPrimary.args, theme: 'secondary' };

export const LinkIcon = TemplateIcon.bind({});
LinkIcon.args = { ...LinkPrimary.args};

export const LinkIconText = Template.bind({});
LinkIconText.args = { ...LinkPrimary.args};

