import React, { FC } from "react";
import { StyledWrapperSkeleton } from "./style";
import { LoadingSkeletonProps } from "./type";

const LoadingSkeleton: FC<LoadingSkeletonProps> = (props) => {
  return (
    <StyledWrapperSkeleton {...props}>
     <span className="skeleton-box"></span>
    </StyledWrapperSkeleton>
  )
};

export default LoadingSkeleton;