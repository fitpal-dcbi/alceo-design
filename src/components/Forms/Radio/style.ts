import styled from "styled-components";
import { BaseRadioProps } from "./type";

export const StyledRadioWrapper = styled.div<
Pick<BaseRadioProps, "disabled">>`
  color: #000000;

  label{
    width: fit-content;
    opacity: unset;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
  };

  .labelRadioSelected {
    margin-top: 1rem;
  };

  label div:first-of-type {
    border: 1px solid;
    border-color: #DCDCDC;
    background-color: ${(props) => props.disabled ? '#F0F0F0' : 'unset'};
  };

  label:hover div:first-of-type,
  label:active div:first-of-type {
    border-color: ${(props) => props.disabled ? '#DCDCDC' : '#FF6112'};
    box-shadow: ${(props) => props.disabled ? 'none' : '0px 0px 0px 2px rgba(255, 231, 218, 1)'};
  };

  label > input:checked + div {
    background-color: ${(props) => props.disabled ? '#E6E6E6' : '#FF6112'};
  };

  label > input[data-state='error']:checked + div {
    background-color: ${(props) => props.disabled ? '#E6E6E6' : '#B22421'};
    box-shadow: ${(props) => props.disabled ? 'unset' : '0px 0px 0px 2px rgba(255, 227, 226, 1)'};
  };

  input:focus + div {
    border: 1px solid ${(props) => props.disabled ? 'none' : '#FF6112'} !important;
    box-shadow: ${(props) => props.disabled ? 'none' : '0px 0px 0px 2px rgba(255, 231, 218, 1)'} !important;
  };

  label > input[data-state='error'] + div {
    border-color: ${(props) => props.disabled ? 'none' : '#EE3633'};
    box-shadow: ${(props) => props.disabled ? 'none' : '0px 0px 0px 2px rgba(255, 175, 173, 1)'};
  };

  span {
    font-weight: 400 !important;
    background-color: ${(props) => props.disabled ? '#FAFAFA' : '#FFFFFF'};
  };
`;

export const StyledRadioButton = styled.div`
  .labelRadioSelected, button {
    margin-top: 1rem;
  };

  span {
    font-weight: 400 !important;
  };
`;