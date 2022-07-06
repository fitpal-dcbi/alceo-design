import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Meta, Story } from "@storybook/react";

import { ControlledSwitch as ControlledSwitchComponent } from "./index";
import { ControlledSwitchProps } from "./type";

export default {
  title: "Components/Switch",
  component: ControlledSwitchComponent,
  argTypes: {
    type: {
      options: ["default", "withIcon"],
      control: { type: "radio" },
    },
    readOnly: {
      options: [true, false],
      control: { type: "boolean" },
    },
    disabled: {
      options: [true, false],
      control: { type: "boolean" },
    },
    defaultChecked: {
      options: [true, false],
      control: { type: "boolean" },
    },
    name: {
      control: { type: "text" },
    },
    id: {
      control: { type: "text" },
    },
    rules: {
      control: { type: "object" },
    },
  },
} as Meta;

export const ContorlledSwitch: Story<ControlledSwitchProps> = ({
  type,
  readOnly,
  disabled,
  defaultChecked,
  name,
  id,
  rules,
}) => {
  const methods = useForm();
  const { handleSubmit, control } = methods;

  const onSubmit = (data: any) => {
    console.log("Wahib controlledSwitchValue", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledSwitchComponent
          type={type}
          readOnly={readOnly}
          disabled={disabled}
          defaultChecked={defaultChecked}
          name={name}
          id={id}
          rules={rules}
          control={control}
        />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
