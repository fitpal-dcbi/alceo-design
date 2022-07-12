import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Meta, Story } from "@storybook/react";
import { 
  ControlledCheckbox as ControlledCheckboxComponent,
  CheckboxProps
} from "./index"
import { Button } from "../../Button/index";

export default {
  title: "Components/Form/Checkbox",
  component: ControlledCheckboxComponent,
  argTypes: {
    name: {
      defaultValue: 'checkbox',
      control : { type: 'text'},
      table: {
        category: 'Properties',
      },
    },
    id: {
      defaultValue: 'checkbox_1',
      control : { type: 'text'},
      table: {
        category: 'Properties',
      },
    },
    label: {
      defaultValue: 'Label',
      control : { type: 'text'},
    },
    value: {
      defaultValue: 'checkbox-1',
      control : { type: 'text'},
      table: {
        category: 'Properties',
      },
    },
    description: {
      defaultValue: '',
      control : { type: 'text'},
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean'},
      table: {
        category: 'Appearance'
      }
    },
    hasError: {
      defaultValue: false,
      control : { type: 'boolean'},
      table: {
        category: 'Properties',
      },
    },
    control: {
      table: {
        disable: true
      }
    },
    rules: {
      table: {
        disable: true
      }
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
  },
} as Meta;

export const ControlledCheckbox: Story<CheckboxProps> = ({
  name, disabled, id, value, label, description, hasError
}) => {
  const method = useForm();
  const { handleSubmit, control } = method;

  const [itemSelected, setItemSelected] = useState({ value: false });

  const onSubmit = (data: any) => {
    setItemSelected(data);
  };

  return (
    <div>
      <FormProvider {...method}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ControlledCheckboxComponent
            name={name}
            disabled={disabled}
            control={control}
            id={id}
            value={value}
            label={label}
            hasError={hasError}
            description={description}
          />
          <Button type="submit" size="sm">Submit</Button>
        </form>
      </FormProvider>
      <div className="label-checkout-selected">Item selected : {Object.values(itemSelected).toString()}</div>
    </div>
  )
}