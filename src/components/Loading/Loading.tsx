import React, { FC } from "react";
import { StyledLoading } from "./style";
import { LoadingProps } from "./type";

const Loading: FC<LoadingProps> = (props) => {
  const { children } = props;
  return (
    <StyledLoading>
      {children}
    </StyledLoading>
  )
};

export default Loading;