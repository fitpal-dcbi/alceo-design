import styled from "styled-components";
import { IconsProps } from "./type";

import ArrowLeft from "../../assets/arrow.svg";
import Checked from "../../assets/check_icon.svg";
import LockActive from "../../assets/icon-lock-active.svg";
import LockUnactive from "../../assets/icon-lock.svg";
import InfoIcon from "../../assets/icon-info.svg";
import SquareOrange from "../../assets/square.svg";
import SquareSecondary from "../../assets/square-secondary.svg";

const MapIcon = {
  ArrowLeft,
  Checked,
  LockActive,
  LockUnactive,
  InfoIcon,
  SquareOrange,
  SquareSecondary
}

export const StyledIconArrow = styled.div<IconsProps>`
  width: ${(props) => props.size ?? '1.5rem'};
  height: ${(props) => props.size ?? '1.5rem'};
  /* filter: contrast(0.5) brightness(0.1); */
  background-repeat: no-repeat;
  background-size: contain;
  background-image:${(props) => `url(${MapIcon[props.type as keyof typeof MapIcon] })`};
`;

export const StyledWrapperIcon = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
`;
