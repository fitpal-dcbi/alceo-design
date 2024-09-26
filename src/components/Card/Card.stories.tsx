import React from "react";
import { Story, Meta } from "@storybook/react";
import Card from "./Card";
import { CardProps } from "./type";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    boxShadow: {
      options: ["default", "none"],
      control: { type: "radio" },
      table: {
        category: 'Appearance',
      },
    },
    bgColor: {
      control: { type: 'text' },
      table: {
        category: 'Appearance',
      },
    },
    color: {
      control: { type: 'text' },
      table: {
        category: 'Appearance',
      },
    }
  }
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<CardProps> = (args) => <Card {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  bgColor: "#ffffff",
  color: "#000000",
  boxShadow: "default"
};
