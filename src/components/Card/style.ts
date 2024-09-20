import styled from "styled-components";
import { CardProps } from "./type";

const boxShadowStyles = (props: CardProps) => {
  switch (props.boxShadow) {
    case 'none':
      return 'none';
    case 'default':
    default:
      return '0px 0px 6px #FFEEE5';
  }
};

export const StyledCard = styled.div<CardProps>`
  padding: 1.5rem;
  background: ${(props) => props.bgColor || 'transparent'};
  color: ${(props) => props.color || '#4D4744'};
  border-radius: 1.25rem;
  box-shadow: ${boxShadowStyles};
`;
