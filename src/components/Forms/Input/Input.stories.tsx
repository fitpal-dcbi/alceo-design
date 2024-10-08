import React from "react";
import { Story, Meta } from "@storybook/react";
import Input from "./Input";
import { InputProps } from "./type";

import { ReactComponent as ArrowLeft } from "../../../assets/arrow.svg";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

// Create a master template for mapping args to render the Input component
const Template: Story<InputProps> = (args) => <Input {...args} />;

// Reuse that template for creating different stories
export const DefaultInput = Template.bind({});
DefaultInput.args = {
  error: "",
  help: "",
  label: "Field label",
  placeholder: "Placeholder",
  prefix: <ArrowLeft />,
  suffix: "really long text",
  disabled: false,
  readOnly: false,
  defaultValue: "",
} as InputProps;
