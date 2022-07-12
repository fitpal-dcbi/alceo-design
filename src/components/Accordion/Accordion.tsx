import React, { FC, useState } from "react";

import { StyledAccordion } from "./style";
import { AccordionProps, AccordionSubComponentProps } from "./type";
import { getChildrenOnDisplayName } from "../../utils/index";
import { ReactComponent as AccordionPlus } from "../../assets/icon-accordion-plus.svg";
import { ReactComponent as AccordionMinus } from "../../assets/icon-accordion-minus.svg";

const Accordion = ({ children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const title = getChildrenOnDisplayName(children, "Title");
  const body = getChildrenOnDisplayName(children, "Body");
  return (
    <StyledAccordion isOpen={isOpen}>
      <div className="accordion-container">
        <div
          className="accordion-title-wrapper"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p>{title}</p>
          {isOpen ? <AccordionMinus /> : <AccordionPlus />}
        </div>

        <div className="accordion-body-wrapper">
          <p>{body}</p>
        </div>
      </div>
    </StyledAccordion>
  );
};

const Title = ({ children, ...other }: AccordionSubComponentProps) => children;

Title.displayName = "Title";
Accordion.Title = Title;

const Body = ({ children, ...other }: AccordionSubComponentProps) => (
  <div {...other}>{children}</div>
);
Body.displayName = "Body";
Accordion.Body = Body;

export default Accordion;
