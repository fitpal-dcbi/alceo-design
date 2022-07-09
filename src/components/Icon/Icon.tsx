import React, { FC } from "react";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import { StyledIcon } from "./style";

// MS: To be deleted later, shows the use case of svgr
const Icon: FC = (props) => {
  return (
    <div>
      <Arrow />
      <StyledIcon />
    </div>
  );
};

export default Icon;
