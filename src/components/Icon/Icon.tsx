import React, { FC } from "react";
import { StyledIconArrow } from "./style";
import { IconsProps } from "./type";

// MS: To be deleted later
const Icon: FC<IconsProps> = (props) => {

  return (
    <StyledIconArrow {...props}/>
  );
};

export default Icon;
