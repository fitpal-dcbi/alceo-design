import styled from "styled-components";
import { BaseCheckboxProps } from "./index";

export const StyledCheckboxContainer = styled.div<
Pick<BaseCheckboxProps, "disabled" | "hasError">>`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  color: #000000;

  span {
    font-weight: 400 !important;
  };

  label {
    width: fit-content;
    opacity: unset;
  };

  label div:first-of-type {
    border-radius: .8125rem;
    border: 1px solid;
    border-color: ${(props) => props.disabled ? '#E6E6E6' : '#BAC7D5'}; 
    background-color: ${(props) => props.disabled ? '#E6E6E6' : 'unset'};
  };

  label:hover div:first-of-type,
  label:active div:first-of-type
   {
    border-color: ${(props) => props.disabled ? '#E6E6E6' : 'unset'};
    box-shadow: ${(props) => props.disabled ? 'none' : '0px 0px 0px 2px rgba(220, 241, 237, 1)'};
  };

  label > input[data-state="error"] + div {
    border-color: #EE3633 !important;
    box-shadow: 0px 0px 0px 2px rgba(255, 227, 226, 1) !important;
  };

  label > input:checked + div {
    background-color: ${(props) => props.disabled ? '#E6E6E6' : '#5CA898'};
    border-color: ${(props) => props.disabled ? '#E6E6E6' : '#5CA898'};
  };

  input:focus + div {
    border: 1px solid;
    border-color: ${(props) => props.disabled ? 'none' : '#5CA898'} !important;
    box-shadow: none !important;
  };
`;

export const StyledCheckboxWrapper = styled.div`
  button { 
    margin:1rem 0;
  }
`;