import styled from "styled-components";
import { BaseCheckboxProps } from ".";

export const StyledCheckboxWrapper = styled.div<
Pick<BaseCheckboxProps, "disabled" | "hasError">>`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;

  input, label {
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }

  input {
    width: 1.25rem;
    height: 1.25rem;
    border: .0625rem solid #BAC7D5;
    border-color: ${(props) => props.disabled ? '#DCDCDC' : props.hasError ? '#EE3633' : '#BAC7D5'};
    box-shadow: ${(props) => props.disabled ? 'inset 0px 0px 20px 2px rgba(230, 230, 230, 1)' : props.hasError ? '0px 0px 0px 2px rgba(255, 227, 226, 1)' : 'none'};

    border-radius: .8125rem;
    appearance: unset;
    margin-top: 0;

    ${(props) => !props.disabled && (
     ` &:hover {
        border: 1px solid;
        border-color: #5CA898;
        box-shadow: 0px 0px 0px 2px rgba(220, 241, 237, 1);
      }`
    )}
  }

  input[type=checkbox]:checked {
    appearance: unset;
    background: #5CA898;
    font-style: normal;
  } 
  
  label {
    margin-left: .4375rem;
  }

  .label-info {
    color: #555555;
    font-size: .75rem;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  .container input:checked ~ .checkmark:after {
    display: block;
  }

  .container .checkmark:after {
    left: 27px;
    top: 20px;
    width: 3px;
    height: 8px;
    border: solid #fff;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;