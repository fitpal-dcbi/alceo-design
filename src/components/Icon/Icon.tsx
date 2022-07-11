import React, { FC } from "react";
import { IconsProps } from "./type";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";

// MS: To be deleted later
const Icon: FC<IconsProps> = (props) => {

  return (
    <div>
      <Arrow className="tesClassName" />
    </div>
  );
};

export default Icon;
