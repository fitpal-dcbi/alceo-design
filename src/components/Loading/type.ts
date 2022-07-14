export type LoadingPositionX = "left" | "center" | "right";
export type LoadingPositionY = "top" | "middle" | "bottom";

export interface LoadingProps {
  children?: React.ReactNode;
  colorCircle?: string;
  width?: string;
  widthStroke?: number;
  positionX?: LoadingPositionX;
  positionY?: LoadingPositionY;
}
