import styled from "styled-components";
import { BaseRadioProps } from "./index";

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

  .bRCIiE:focus + .Radio__IconContainer-sc-crlwn1-1,
  .egCExO .Radio__IconContainer-sc-crlwn1-1 {
    border: none;
    box-shadow: none;
    background-color: #FF6112;
  }

  span {
    font-weight: 400 !important;
  }

  .pQAxi:hover .Radio__IconContainer-sc-crlwn1-1,
  .jsYamK:hover .Radio__IconContainer-sc-crlwn1-1,
  .pQAxi:active .Radio__IconContainer-sc-crlwn1-1 {
    border: 1px solid #FF6112;
    box-shadow: 0px 0px 0px 2px rgb(255 231 218);
  }

  /* Error radio button */
  .jsYamK .Radio__IconContainer-sc-crlwn1-1 {
    box-shadow: 0px 0px 0px 2px rgba(255, 175, 173, 1);
  }

  input:disabled, .dfQpEZ {
    background-color: #F0F0F0;
  }
`

export const StyledRadio = styled.input<BaseRadioProps>`
  margin-right: .625rem;
  cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
`;

export const StyledRadioButton = styled.div`
  .labelRadioSelected, button {
    margin-top: 1rem;
  };

  .bRCIiE:focus + .Radio__IconContainer-sc-crlwn1-1,
  .egCExO .Radio__IconContainer-sc-crlwn1-1 {
    border: none;
    box-shadow: none;
    background-color: #FF6112;
  }

  span {
    font-weight: 400 !important;
  }

  .pQAxi:hover .Radio__IconContainer-sc-crlwn1-1,
  .jsYamK:hover .Radio__IconContainer-sc-crlwn1-1,
  .pQAxi:active .Radio__IconContainer-sc-crlwn1-1 {
    border: 1px solid #FF6112;
    box-shadow: 0px 0px 0px 2px rgb(255 231 218);
  }

  /* Error radio button */
  .jsYamK .Radio__IconContainer-sc-crlwn1-1 {
    box-shadow: 0px 0px 0px 2px rgba(255, 175, 173, 1);
  }

  input:disabled, .dfQpEZ {
    background-color: #F0F0F0;
  }
`;