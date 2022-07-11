import styled from "styled-components";
import { BaseRadioProps } from "./type";

type RadioProps = {
  disabled?: boolean,
};

export const StyledRadioWrapper = styled.div<RadioProps>`
  cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};

  label{
  cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};

  }

`

export const StyledRadio = styled.input<BaseRadioProps>`
  margin-right: .625rem;
  cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
`;