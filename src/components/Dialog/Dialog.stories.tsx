import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import { Dialog as DialogComponent } from "./index";

export default {
  title: "Components/Dialog",
  component: DialogComponent,
} as Meta;

export const Dialog: Story = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && (
        <DialogComponent
          onClose={() => setIsOpen(false)}
          disableAnimation={false}
          preventOverlayClose={true}
        >
          <DialogComponent.Title>Cek</DialogComponent.Title>
          <DialogComponent.Body>Testest</DialogComponent.Body>
        </DialogComponent>
      )}
    </div>
  );
};
