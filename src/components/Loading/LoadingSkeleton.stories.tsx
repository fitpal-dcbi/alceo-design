import React from "react";
import { Story, Meta } from "@storybook/react";
import { LoadingSkeletonProps } from "./type";
import LoadingSkeleton from "./LoadingSkeleton";

export default {
  title: "Components/Loading",
  componenent: LoadingSkeleton,
  argTypes: {
    width: {
      control: {type: 'text'},
      table: {
        category: 'Appearance'
      }
    },
    height: {
      control: {type: 'text'},
      table: {
        category: 'Appearance'
      }
    },

  }
} as Meta;

const Template: Story<LoadingSkeletonProps> = (args) => <LoadingSkeleton {...args} />;

export const Skeleton = Template.bind({});
Skeleton.args = {
  width: '100%',
  height: '90vh',
};
