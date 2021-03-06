import React, { FC } from "react";
import OrbitModal, {
  ModalHeader as OrbitModalHeader,
  ModalSection as OrbitModalSection,
  ModalFooter as OrbitModalFooter,
} from "@kiwicom/orbit-components/lib/Modal";
import { Props as OrbitModalProps } from "@kiwicom/orbit-components/lib/Modal";

import { getChildrenOnDisplayName } from "../../utils";
import { StyledDialog } from "./style";
import { DialogProps } from "./type";

const Dialog = ({ children, ...other }: DialogProps) => {
  const title = getChildrenOnDisplayName(children, "Title");
  const body = getChildrenOnDisplayName(children, "Body");
  const footer = getChildrenOnDisplayName(children, "Footer");

  return (
    <StyledDialog>
      <OrbitModal mobileHeader={false} {...other}>
        <div className="modal__container">
          {title[0]?.props?.children !== undefined && title}
          {body[0]?.props?.children !== undefined && body}
          {footer[0]?.props?.children !== undefined && footer}
        </div>
      </OrbitModal>
    </StyledDialog>
  );
};

const Title = ({ children, ...other }: DialogProps) => (
  <OrbitModalHeader {...other}>
    <div className="modal__header-wrapper">{children}</div>
  </OrbitModalHeader>
);
Title.displayName = "Title";
Dialog.Title = Title;

const Body = ({ children, ...other }: DialogProps) => (
  <OrbitModalSection {...other}>
    <div className="modal__body-wrapper">{children}</div>
  </OrbitModalSection>
);
Body.displayName = "Body";
Dialog.Body = Body;

const Footer = ({ children, ...other }: DialogProps) => (
  <OrbitModalFooter {...other}>
    <div className="modal__footer-wrapper">{children}</div>
  </OrbitModalFooter>
);
Footer.displayName = "Footer";
Dialog.Footer = Footer;

export default Dialog;
