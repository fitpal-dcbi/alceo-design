import React, { FC } from "react";
import { StyledLoading, StyledWrapperLoading } from "./style";
import { LoadingProps } from "./type";

const Loading: FC<LoadingProps> = (props) => {
  const { 
    children, 
    colorCircle="#BAC7D5", 
    width="3.125rem", 
    widthStroke="4", 
    positionX="right", 
    positionY="top" 
  } = props;
  return (
    <StyledWrapperLoading positionX={positionX} positionY={positionY}>
      <StyledLoading colorCircle={colorCircle} width={width}>
        <svg className="spinner" viewBox="0 0 50 50">
          <circle className="path" cx="25" cy="25" r="20" fill="none" stroke-width={String(widthStroke)} stroke="currentColor"/>
        </svg>
        {children}
      </StyledLoading>
    </StyledWrapperLoading>
  )
};

export default Loading;