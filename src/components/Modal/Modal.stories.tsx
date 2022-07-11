import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";
import Modal from "./Modal";
import { ModalProps } from "./type";

export default {
  title: "Components/Modal",
  component: Modal,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open</button>
      {isOpen && <Modal onClose={() => setIsOpen(false)} {...args} />}
    </div>
  );
};

// Reuse that template for creating different stories
export const ModalStory = Template.bind({});
ModalStory.args = { children: "Test Modal" };
