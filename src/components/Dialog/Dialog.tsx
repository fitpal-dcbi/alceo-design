import React, { FC } from "react";
import OrbitModal, {
  ModalHeader as OrbitModalHeader,
  ModalSection as OrbitModalSection,
  ModalFooter as OrbitModalFooter,
} from "@kiwicom/orbit-components/lib/Modal";
import { Props as OrbitModalProps } from "@kiwicom/orbit-components/lib/Modal";

import { getChildrenOnDisplayName } from "../../utils";
import { DialogProps } from "./type";

// MS: Either to be deleted or will be used by WA. Demonstrating orbit-kiwi usage
const Dialog = ({ children, ...other }: DialogProps) => {
  const title = getChildrenOnDisplayName(children, "Title");
  const body = getChildrenOnDisplayName(children, "Body");
  const footer = getChildrenOnDisplayName(children, "Footer");
  return (
    <OrbitModal {...other}>
      {title}
      {body}
      {footer}
    </OrbitModal>
  );
};

const Title = ({ children, ...other }: DialogProps) => (
  <OrbitModalHeader {...other}>
    <div>Title: {children}</div>
  </OrbitModalHeader>
);
Title.displayName = "Title";
Dialog.Title = Title;

const Body = ({ children, ...other }: DialogProps) => (
  <OrbitModalSection {...other}>
    <div>Body: {children}</div>
  </OrbitModalSection>
);
Body.displayName = "Body";
Dialog.Body = Body;

const Footer = ({ children, ...other }: DialogProps) => (
  <OrbitModalFooter {...other}>
    <div>Footer: {children}</div>
  </OrbitModalFooter>
);
Footer.displayName = "Footer";
Dialog.Footer = Footer;

export default Dialog;
