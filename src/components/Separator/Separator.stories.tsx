import React from "react";
import { Story, Meta } from "@storybook/react";
import Separator from "./Separator";
import { SeparatorProps } from "./type";

export default {
  title: "Components/Separator",
  component: Separator,
} as Meta;

const Template: Story<SeparatorProps> = (args) => <Separator {...args} />;

// Reuse that template for creating different stories
export const DefaultSeparator = Template.bind({});
DefaultSeparator.args = { alignment: "left", indentation: 0 };
