import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { useForm, FormProvider } from "react-hook-form";

import ControlledInput from "./ControlledInput";
import { ControlledInputProps } from "./type";

import { ReactComponent as ArrowLeft } from "../../../assets/arrow.svg";

export default {
  title: "Components/Input",
  component: ControlledInput,
} as Meta;

// Create a master template for mapping args to render the Input component
const Template: Story<Omit<ControlledInputProps, "control" | "name">> = (
  args
) => {
  const methods = useForm();
  const { handleSubmit, control } = methods;
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (data: any) => {
    setInputValue(data.value);
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ControlledInput
            name="value"
            control={control}
            onChange={action("change")}
            {...args}
          />
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
      <div>Submitted value: {inputValue}</div>
    </div>
  );
};

// Reuse that template for creating different stories
export const DefaultControlledInput = Template.bind({});
DefaultControlledInput.args = {
  error: "tes",
  help: "tes",
  label: "Field label",
  placeholder: "tes",
  prefix: <ArrowLeft />,
  suffix: "really long text",
  disabled: false,
  rules: {
    required: true,
  },
} as ControlledInputProps;

DefaultControlledInput.parameters = {
  docs: {
    source: {
      type: "code",
    },
  },
};
