interface BaseAccortionDataType {
  title: string;
  body: string;
}

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
export type AccordionDataProps = { accordionData: BaseAccortionDataType[] };
