import React, { FC } from "react";

import { StyledSeparator } from "./style";
import { SeparatorProps } from "./type";

const Separator: FC<SeparatorProps> = (props) => {
  const { alignment = "left", indentation } = props;
  return <StyledSeparator alignment={alignment} indentation={indentation} />;
};

export default Separator;
