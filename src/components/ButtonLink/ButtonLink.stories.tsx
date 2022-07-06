import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import ButtonLink from "./ButtonLink";
import { ButtonLinkProps } from "../Button/type";

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
  }
} as Meta;

// const onClicked = (value: any) => {
//   console.log('amel value', value)
// }
// Create a master template for mapping args to render the Button component
const Template: Story<ButtonLinkProps> = (args) => <ButtonLink {...args} />;

// Reuse that template for creating different stories
export const Link = Template.bind({});
Link.args = { 
  children: "Click me", 
  theme: "primary", 
  size: "md", 
  weight: "solid", 
  fullWidth: false,
  disabled: false,
  type:"button",
  href: "https://www.sirka.io/",
  target: "_blank",
};


