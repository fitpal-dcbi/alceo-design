import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import { Dialog as DialogComponent } from "./index";
import { DialogProps } from "./type";

export default {
  title: "Components/Dialog",
  component: DialogComponent,
} as Meta;

const Dialog: Story<DialogProps> = (args) => {
  const { title, body, footer, ...others } = args;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open</button>

      <DialogComponent
        onClose={() => setIsOpen(false)}
        disableAnimation={false}
        preventOverlayClose={true}
        hasCloseButton={false}
        {...others}
      >
        <DialogComponent.Title>{title}</DialogComponent.Title>
        <DialogComponent.Body>{body}</DialogComponent.Body>
        <DialogComponent.Footer>{footer}</DialogComponent.Footer>
      </DialogComponent>
    </div>
  );
};

// Reuse that template for creating different stories
export const DialogTemplate = Dialog.bind({});
DialogTemplate.args = {
  title: "Kiwi.com would like to send you notifications.",
  body:
    "Notifications may include alerts, sounds, and icon badges. These can be configured in Settings",
  footer: "Test Modal Footer Wahib",
};
