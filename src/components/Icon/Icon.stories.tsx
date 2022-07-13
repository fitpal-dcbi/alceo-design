import React from "react";
import { Story, Meta } from "@storybook/react";
import Icon from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story = (args) => <Icon {...args}/>;

// Reuse that template for creating different stories
export const DefaultIcon = Template.bind({});
