import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { 
  CheckboxOption, 
  BaseCheckboxProps,
} from "./index";

export default {
  title: "Components/Form/Checkbox",
  component: CheckboxOption,
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
    checked: {
      table: {
        disable: true
      }
    },
  },
} as Meta;

export const Checbox: Story<BaseCheckboxProps> = ({
  name, disabled, id, value, label, hasError, description, checked
}) => {
  const [checkbox, setCheckbox] = useState<boolean>(false);

  return (
    <div>
      <CheckboxOption
        name={name}
        disabled={disabled}
        id={id}
        value={value}
        label={label}
        hasError={hasError}
        description={description}
        checked={checked}
        onChange={(value) => setCheckbox(value)}

      />
      <p>{name} selected : {checkbox.toString()}</p>
    </div>
  );
};