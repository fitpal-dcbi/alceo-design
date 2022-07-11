import React from "react";
import { Story, Meta } from "@storybook/react";
import Icon from "./Icon";
import { IconsProps, listIcon } from "./type";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    type: {
      defaultValue: "ArrowLeft",
      options: listIcon,
      control: {type: "select"}
    },
    size: {
      defaultValue: "1.5rem",
      control: {type: "text"}
    }
  }
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IconsProps> = (args) => <Icon {...args}/>;

// Reuse that template for creating different stories
export const DefaultIcon = Template.bind({});
