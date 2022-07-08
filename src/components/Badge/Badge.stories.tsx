import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import { Badge as BadgeComponent } from "./index";
import { BaseBadgeProps } from "./type";

export default {
  title: "Components/Badge",
  component: BadgeComponent,
  argTypes: {
    variant: {
      options: ["light", "neutral", "info", "success", "warning", "critical"],
      control: { type: "radio" },
    },
    inverted: {
      options: [true, false],
      control: { type: "boolean" },
    },
    suffix: {
      options: [true, false],
      control: { type: "boolean" },
    },
    label: {
      control: { type: "text" },
    },
    prefix: {
      control: { type: "text" },
    },
  },
} as Meta;

export const Badge: Story<BaseBadgeProps> = ({
  variant,
  inverted,
  suffix,
  prefix,
  iconOnly,
  label = "label",
}) => {
  return (
    <BadgeComponent
      variant={variant}
      inverted={inverted}
      suffix={suffix}
      prefix={prefix}
      iconOnly={iconOnly}
      label={label}
    />
  );
};
