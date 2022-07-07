import React from "react";
import { Story, Meta } from "@storybook/react";
import { Loading } from ".";
import { LoadingProps } from "./type";
import LoadingDot from "./LoadingDots";

export default {
  title: "Components/Loading",
  component: Loading,
  argTypes: {
    colorCircle: {
      defaultValue: "#BAC7D5",
      control: {type: 'text'},
      table: {
        category: 'Appearance',
      },
    },
    width: {
      defaultValue: '3.125rem',
      control: {type: 'text'},
      table: {
        category: 'Appearance',
      },
    },
    widthStroke: {
      defaultValue: '4',
      control: {type: 'number'},
      table: {
        category: 'Appearance',
      },
    },
    positionX: {
      option: ["left", "center", "right"],
      control: {type: 'radio'},
      table: {
        category: 'Position',
      },
    },
    positionY: {
      option: ["top", "middle", "bottom"],
      control: {type: 'radio'},
      table: {
        category: 'Position',
      },
    },
  }

} as Meta;

const Template: Story<LoadingProps> = (args) => <Loading {...args} />;
const TemplateLoadingDot: Story<LoadingProps> = (args) => <LoadingDot {...args} />;

export const Default = Template.bind({});
Default.args = { 
  children: "Please wait, content of the page is loading…",
  width: '3.125rem',
  colorCircle: '#BAC7D5',
  widthStroke: 4,
  positionX:"center",
  positionY:"top"
};

export const Dots = TemplateLoadingDot.bind({});
Dots.args = {...Default.args, children: 'Please wait, Card content is loading…'};