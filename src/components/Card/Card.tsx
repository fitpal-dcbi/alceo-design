import React, { FC } from "react";
import { StyledCard } from "./style";
import { CardProps } from "./type";

const Card: FC<CardProps> = (props) => {
  const { children } = props;
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
