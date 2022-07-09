import React, { FC } from "react";
import OrbitModal, {
  ModalSection as OrbitModalSection,
} from "@kiwicom/orbit-components/lib/Modal";

import { ModalProps } from "./type";

// MS: Either to be deleted or will be used by WA. Demonstrating orbit-kiwi usage
const Modal: FC<ModalProps> = (props) => {
  const { children, ...other } = props;
  return (
    <OrbitModal {...other}>
      <OrbitModalSection>{children}</OrbitModalSection>
    </OrbitModal>
  );
};

export default Modal;
