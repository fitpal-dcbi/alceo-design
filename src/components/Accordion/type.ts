import { ReactNode } from "react";

interface BaseAccordionProps {
  children: any;
}

interface BaseAccordionSubComponentProps {
  children: any;
}

export type StyledAccordionProps = {
  isOpen?: boolean;
};

export type AccordionProps = BaseAccordionProps;
export type AccordionSubComponentProps = BaseAccordionSubComponentProps;
