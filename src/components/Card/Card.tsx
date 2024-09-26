import React, { FC } from "react";
import { StyledCard } from "./style";
import { CardProps } from "./type";

const Card: FC<CardProps> = (props) => {
  const { children, bgColor, color, boxShadow } = props;
  return <StyledCard bgColor={bgColor} color={color} boxShadow={boxShadow}>{children}</StyledCard>;
};

export default Card;
