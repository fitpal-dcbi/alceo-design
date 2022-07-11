import React from "react";
import { Meta, Story } from "@storybook/react";

import { BaseRadioProps, RadioProps } from "./type";
import { StyledRadioWrapper } from "./style";
import { Radio as RadioComponent } from "./index"


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
  },
} as Meta;

export const RadioButton: Story<BaseRadioProps> = ({
  disabled, name,
  children, id,
  value
}) => {

  return (
    <StyledRadioWrapper disabled={disabled}>
      <RadioComponent 
         disabled={disabled}
         name={name}
         value={value}
         id={id}
         children={children}
      />
    </StyledRadioWrapper>
  )
}