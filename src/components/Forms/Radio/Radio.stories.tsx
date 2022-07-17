import React from "react";
import { Meta, Story } from "@storybook/react";

import { BaseRadioProps, 
  Radio as RadioComponent,
  StyledRadioWrapper
} from "./index"


export default {
  title: "Components/Form/Radio",
  component: RadioComponent,
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
    description: {
      defaultValue: '',
      control : { type: 'text'},
    },
    hasError: {
      defaultValue: false,
      control : { type: 'boolean'},
      table: {
        category: 'Properties',
      },
    },
  },
} as Meta;

export const RadioButton: Story<BaseRadioProps> = (props) => {
  const {
    disabled, 
    name,
    children,
    id,
    value, 
    description, 
    hasError
  } = props;

  return (
    <StyledRadioWrapper disabled={disabled}>
      <RadioComponent 
         disabled={disabled}
         name={name}
         value={value}
         id={id}
         children={children}
         description={description}
         hasError={hasError}
      />
    </StyledRadioWrapper>
  );
};