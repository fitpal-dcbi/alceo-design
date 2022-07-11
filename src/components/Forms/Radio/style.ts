import styled from "styled-components";
import { BaseRadioProps } from "./type";

type RadioProps = {
  disabled?: boolean,
};

export const StyledRadioWrapper = styled.div<RadioProps>`
  label{
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
  }

  .labelRadioSelected {
    margin-top: 1rem;
  }
`

export const StyledRadio = styled.input<BaseRadioProps>`
  margin-right: .625rem;
  cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
`;

export const StyledRadioButton = styled.div`
  .labelRadioSelected, button {
    margin-top: 1rem;
  }
`;