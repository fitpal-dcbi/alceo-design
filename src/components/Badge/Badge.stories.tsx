import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import { Badge as BadgeComponent } from "./index";
import { BaseBadgeProps } from "./type";
import { ReactComponent as ExampleIcon } from "../../assets/icon-lock-active.svg";

export default {
  title: "Components/Badge",
  component: BadgeComponent,
  argTypes: {
    variant: {
      options: ["primary", "success", "critical", "warning", "info"],
      control: { type: "radio" },
    },
    inverted: {
      options: [true, false],
      control: { type: "boolean" },
    },
    size: {
      options: ["sm", "md"],
      control: { type: "radio" },
    },
    weight: {
      options: ["bold", "light"],
      control: { type: "radio" },
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
  children = "badge",
  size,
  weight
}) => {
  return (
    <div>
      <BadgeComponent
        variant={variant}
        inverted={inverted}
        hasInfoIcon={hasInfoIcon}
        prefix={prefix}
        iconOnly={iconOnly}
        children={iconOnly === true ? <ExampleIcon /> : children}
        size={size}
        weight={weight}
      />
      {iconOnly && (
        <p style={{ fontSize: "12px", fontWeight: "400" }}>
          icon just an example, <br />
          we can customize this icon on parent component
        </p>
      )}
    </div>
  );
};
