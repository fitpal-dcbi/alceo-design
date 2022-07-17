import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Meta, Story } from "@storybook/react";

import { ControlledRadio as ControlledRadioComponent,
  RadioProps, 
  StyledRadioButton 
} from "./index";
import {Button} from "../../Button";

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
    hasError: {
      defaultValue: false,
      control : { type: 'boolean'},
      table: {
        category: 'Properties',
      },
    },
    description: {
      defaultValue: '',
      control : { type: 'text'},
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
  hasError,
  description
}) => {
  const method = useForm();
  const {handleSubmit, control} = method;
  const [itemChecked, setItemChecked] = useState<string>('')

  const onSubmit = (data: any) => {
    setItemChecked(data[name]);
  }
  return (
    <StyledRadioButton>
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
            hasError={hasError}
            description={description}
          />
          <Button type="submit" size="sm" disabled={disabled}>Submit</Button>
        </form>
      </FormProvider>
      <div className="labelRadioSelected">Item selected : {itemChecked}</div>
    </StyledRadioButton>
  );
};