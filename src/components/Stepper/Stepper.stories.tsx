import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import { Stepper as StepperComponent } from "./index";
import { BaseStepperProps } from "./type";

export default {
  title: "Components/Stepper",
  component: StepperComponent,
} as Meta;

export const Switch: Story = () => {
  const [quantity, setQuantity] = useState(0);
  const onAddClick = () => {
    setQuantity((prev) => prev + 1);
  };
  const onRemoveClick = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    } else {
      setQuantity(0);
    }
  };

  return (
    <StepperComponent
      quantity={quantity}
      onAddClick={onAddClick}
      onRemoveClick={onRemoveClick}
    />
  );
};
