import React from "react";

import { StyledSeparator } from "./style";
import { SeparatorProps } from "./type";

const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(
  (props, ref) => {
    const { alignment = "left", indentation } = props;
    return (
      <StyledSeparator
        ref={ref}
        alignment={alignment}
        indentation={indentation}
      />
    );
  }
);

export default Separator;
