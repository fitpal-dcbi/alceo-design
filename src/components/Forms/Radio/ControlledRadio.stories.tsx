import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Meta, Story } from "@storybook/react";

import { ControlledRadio as ControlledRadioComponent } from "./index";
import { RadioProps } from "./type";


export default {
  title: "Components/Form/Radio",
  component: ControlledRadioComponent,
  argTypes: {
    name: {
      defaultValue: 'name-labels',
      control : { type: 'text'},
      table: {
        category: 'Properties',
      },
    },
    id: {
      defaultValue: 'idLabel',
      control : { type: 'text'},
      table: {
        category: 'Properties',
      },
    },
    disabled: {
      defaultValue: false,
      control : { type: 'boolean'},
      table: {
        category: 'Appearance',
      },
    },
    children: {
      defaultValue: 'Label',
      control : { type: 'text'},
    },
    value: {
      defaultValue: 'valueLabel',
      control : { type: 'text'},
      table: {
        category: 'Properties',
      },
    },
    defaultValue: {
      table: {
        disable: true
      }
    },
    placeholder: {
      table: {
        disable: true
      }
    },
    control: {
      table: {
        disable: true
      }
    },
    onChange: {
      table: {
        disable: true
      }
    },
    rules: {
      table: {
        disable: true
      }
    },
    
  },
} as Meta;

export const ControlledRadio: Story<RadioProps> = ({
  disabled,
  name,
  rules,
  children,
  id,
  value,
}) => {
  const method = useForm();
  const {handleSubmit, control} = method;

  const onSubmit = (data: any) => {
    console.log('amel data', data)
  }
  return (
    <div>
      <FormProvider {...method}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ControlledRadioComponent
            disabled={disabled}
            name={name}
            rules={rules}
            control={control}
            value={value}
            id={id}
            children={children}
          />
            {/* {children} */}
          {/* </ControlledRadioComponent> */}
          <button type="submit">Submit</button>
        </form>
      </FormProvider>
    </div>
  );
};