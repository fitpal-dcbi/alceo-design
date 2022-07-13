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
    hasInfoIcon: {
      options: [true, false],
      control: { type: "boolean" },
    },
    prefix: {
      control: { type: "text" },
    },
    children: {
      control: { type: "text" },
    },
  },
} as Meta;

export const Badge: Story<BaseBadgeProps> = ({
  variant,
  inverted,
  hasInfoIcon,
  prefix,
  iconOnly,
  children = "label",
}) => {
  return (
    <BadgeComponent
      variant={variant}
      inverted={inverted}
      hasInfoIcon={hasInfoIcon}
      prefix={prefix}
      iconOnly={iconOnly}
      children={children}
    />
  );
};
