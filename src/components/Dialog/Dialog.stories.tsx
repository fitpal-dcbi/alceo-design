import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import { Dialog as DialogComponent } from "./index";
import { DialogProps } from "./type";

export default {
  title: "Components/Dialog",
  component: DialogComponent,
} as Meta;

export const DialogTemplate: Story<DialogProps> = (args) => {
  const { title, body, footer, ...others } = args;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  console.log("wahib title test", title);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && (
        <DialogComponent
          onClose={() => setIsOpen(false)}
          disableAnimation={false}
          preventOverlayClose={true}
          {...others}
        >
          <DialogComponent.Title>{title}</DialogComponent.Title>
          <DialogComponent.Body>{body}</DialogComponent.Body>
          <DialogComponent.Footer>{footer}</DialogComponent.Footer>
        </DialogComponent>
      )}
    </div>
  );
};

// Reuse that template for creating different stories
export const DialogStory = DialogTemplate.bind({});
DialogStory.args = {
  title: "Test Modal Title Wahib",
  body: "Test Modal Body Wahib",
  footer: "Test Modal Footer Wahib",
};
