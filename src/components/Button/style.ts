import styled from "styled-components";
import { ButtonSize } from "./type";

const mapButtonSize = {
  full: "100%",
  half: "50%",
  default: "350px",
};

const mapButtonBgColor = {};

type StyledButtonProps = {
  size: ButtonSize;
};

export const StyledButton = styled.button<StyledButtonProps>`
  background: #ff6112;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 1.25rem;
  border: none;
  width: ${(props) => mapButtonSize[props.size]};
`;