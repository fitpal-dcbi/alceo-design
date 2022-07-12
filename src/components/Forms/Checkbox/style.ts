import styled from "styled-components";
import { BaseCheckboxProps } from "./index";

export const StyledCheckboxContainer = styled.div<
Pick<BaseCheckboxProps, "disabled" | "hasError">>`
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  .gjqXHB,
  .cpCxwI .Checkbox__IconContainer-sc-1xqef2c-0,
  .edWdNF,
  .czPEzn:active .Checkbox__IconContainer-sc-1xqef2c-0 {
    border-radius: .8125rem;
    border: 1px solid;
    border-color: #BAC7D5;
  }

  .czPEzn:hover .Checkbox__IconContainer-sc-1xqef2c-0,
  .ifCgVL:hover .Checkbox__IconContainer-sc-1xqef2c-0
  {
    border-color: ${(props) => props.disabled ? 'none' : '#5CA898'};
    box-shadow: ${(props) => props.disabled ? 'none' : '0px 0px 0px 2px rgba(220, 241, 237, 1)'};
  }

  .ifCgVL .Checkbox__IconContainer-sc-1xqef2c-0 {
    border-color: #EE3633;
    box-shadow: 0px 0px 0px 2px rgba(255, 227, 226, 1);
  }

  .edWdNF, 
  .edWdNF:hover {
    background: #E6E6E6;
    border: 1px solid #DCDCDC;
  }

  .cpCxwI .Checkbox__IconContainer-sc-1xqef2c-0 {
    background-color: #5CA898;
    border-color: #5CA898;
  }

  .fAlffV:checked ~ .Checkbox__TextContainer-sc-1xqef2c-1 > .Checkbox__LabelText-sc-1xqef2c-3 {
    font-weight: 400;
  }
`;

export const StyledCheckboxWrapper = styled.div`
  button { 
    margin:1rem 0;
  }
`;