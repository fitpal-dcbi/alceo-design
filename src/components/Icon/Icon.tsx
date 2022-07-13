import React, { FC } from "react";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

// MS: To be deleted later, shows the use case of svgr
const Icon: FC = (props) => {
  return (
    <div>
      <Arrow className="tesClassName" />
    </div>
  );
};

export default Icon;
