import styled from "styled-components";
import { LoadingPositionX, LoadingPositionY } from "./type";

const mapPositionX = {
  center: "center",
  left: "flex-start",
  right: "flex-end"
};

const mapPositionY = {
  middle: "center",
  top: "flex-start",
  bottom: "flex-end"
};

type StyledLoadingProps = {
  colorCircle?: string;
  width?: string;
  positionX?: LoadingPositionX;
  positionY?: LoadingPositionY;
};

export const StyledWrapperLoading = styled.div<StyledLoadingProps>`
  display: flex;
  justify-content: ${(props) => mapPositionX[props.positionX ?? "center"]};
  align-items: ${(props) => mapPositionY[props.positionY ?? "top"]};
`;

export const StyledLoading = styled.div<StyledLoadingProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-align: center;
  }
  
  .spinner {
    margin-bottom: 1rem ;
    animation: rotate 2s linear infinite;
    z-index: 2;
    width: ${(props) => props.width || '3.125rem'};
    height: ${(props) => props.width || '3.125rem'};
    
    & .path {
      color: ${(props) => props.colorCircle || '#BAC7D5'};
      stroke: hsl(210, 70, 75);
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }
  };

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  };

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  };
`;

export const StyledLoadingDots = styled.div<StyledLoadingProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  .line-ellipsis {
    display: inline-block;
    position: relative;
    width: 5rem;
    height: 5rem;
    margin-right: .75rem;
  };

  .line-ellipsis div {
    position: absolute;
    top: 2.0625rem;
    width: ${(props) => props.width || '.8125rem'};
    height: ${(props) => props.width || '.8125rem'};
    border-radius: 50%;
    background: ${(props) => props.colorCircle || '#BAC7D5'};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  };

  .line-ellipsis div:nth-child(1) {
    left: 8px;
    animation: line-ellipsis1 0.6s infinite;
  };

  .line-ellipsis div:nth-child(2) {
    left: 8px;
    animation: line-ellipsis2 0.6s infinite;
  };

  .line-ellipsis div:nth-child(3) {
    left: 32px;
    animation: line-ellipsis2 0.6s infinite;
  };

  .line-ellipsis div:nth-child(4) {
    left: 56px;
    animation: line-ellipsis3 0.6s infinite;
  };

  @keyframes line-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  };

  @keyframes line-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  };

  @keyframes line-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  };
`;