import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import { Button } from "../Button";
import { Dialog as DialogComponent } from "./index";
import { DialogProps } from "./type";
import { ReactComponent as DialogIcon } from "../../assets/icon-dialog-image.svg";

export default {
  title: "Components/Dialog",
  component: DialogComponent,
} as Meta;

const Dialog: Story<DialogProps> = (args) => {
  const { title, body, footer, ...others } = args;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(true)}>Open</Button>

      {isOpen && (
        <DialogComponent
          onClose={() => setIsOpen(false)}
          disableAnimation={false}
          hasCloseButton={false}
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
export const DialogFullVersion = Dialog.bind({});
DialogFullVersion.args = {
  title: (
    <div>
      <DialogIcon />
      <p style={{ margin: 0 }}>
        Kiwi.com would like to send you notifications.
      </p>
    </div>
  ),
  body:
    "Notifications may include alerts, sounds, and icon badges. These can be configured in Settings",
  footer: (
    <Button fullWidth={true} size={"md"}>
      Allow
    </Button>
  ),
};

export const DialogWithTwoButtons = Dialog.bind({});
DialogWithTwoButtons.args = {
  title: (
    <div>
      <DialogIcon />
      <p style={{ margin: 0 }}>
        Kiwi.com would like to send you notifications.
      </p>
    </div>
  ),
  body:
    "Notifications may include alerts, sounds, and icon badges. These can be configured in Settings",
  footer: (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Button fullWidth={true} size={"md"}>
        Allow
      </Button>
      <div style={{ width: "1rem" }} />
      <Button fullWidth={true} size={"md"} weight={"outline"}>
        Cancel
      </Button>
    </div>
  ),
};

export const DialogWithoutBody = Dialog.bind({});
DialogWithoutBody.args = {
  title: (
    <div>
      <DialogIcon />
      <p style={{ margin: 0 }}>
        Kiwi.com would like to send you notifications.
      </p>
    </div>
  ),
  footer: (
    <Button fullWidth={true} size={"md"}>
      Allow
    </Button>
  ),
};

export const DialogWithoutImage = Dialog.bind({});
DialogWithoutImage.args = {
  title: "Kiwi.com would like to send you notifications.",
  body:
    "Notifications may include alerts, sounds, and icon badges. These can be configured in Settings",
  footer: (
    <Button fullWidth={true} size={"md"}>
      Allow
    </Button>
  ),
};

export const DialogTitleOnly = Dialog.bind({});
DialogTitleOnly.args = {
  title: "Kiwi.com would like to send you notifications.",
  footer: (
    <Button fullWidth={true} size={"md"}>
      Allow
    </Button>
  ),
};
