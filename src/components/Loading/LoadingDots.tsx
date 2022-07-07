import React, { FC } from "react";
import { StyledLoadingDots, StyledWrapperLoading } from "./style";
import { LoadingProps } from "./type";

const LoadingDots: FC<LoadingProps> = (props) => {
  const { children, 
    colorCircle, 
    width,
    positionX="right", 
    positionY="top"
  } = props;
  return (
   <StyledWrapperLoading positionX={positionX} positionY={positionY}>
      <StyledLoadingDots colorCircle={colorCircle} width={width}>
        <div className="line-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {children}
      </StyledLoadingDots>
   </StyledWrapperLoading>
  )
};

export default LoadingDots;