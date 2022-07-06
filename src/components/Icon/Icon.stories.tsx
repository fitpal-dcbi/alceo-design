import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";
import Icon from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story = () => <Icon />;

// Reuse that template for creating different stories
export const DefaultIcon = Template.bind({});
