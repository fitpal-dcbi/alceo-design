import React from "react";
import styled, { StyledComponent } from "styled-components";

import { InputProps } from "./type";

export const StyledInput = styled.input`
  flex: 1 1 20%;
  border: none;
  padding: 0;
  width: 100%;
  height: 100%;

  color: #262626;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.25rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #abaeb8;
    font-weight: 500;
  }

  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;

export const StyledInputWrapper = styled.div<
  Pick<InputProps, "error" | "help" | "disabled">
>`
  display: flex;
  width: 100%;
  height: 2.75rem;
  padding: 0 0.875rem;
  border: 1px solid
    ${(props) => {
      if (props.error) return "#D21C1C";
      else if (props.help) return "#FF6112";
      else return "#E6E6E6";
    }};
  background-color: ${(props) => (props.disabled ? "#F0F0F0" : "unset")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "auto")};
  border-radius: 1.25rem;

  .inline-label {
    margin-right: 0.75rem;
    align-self: center;
  }

  .prefix-container,
  .suffix-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .prefix-container {
    padding-right: 0.5rem;
  }

  .suffix-container {
    padding-left: 0.5rem;
  }
`;

export const generateStyledInputContainer: (
  label: boolean
) => StyledComponent<"div" | "label", any, {}, never> = (label) => styled(
  label ? "label" : "div"
)`
  span.input-label {
    display: block;
    color: #262626;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.25rem;
    &.non-inline-label {
      margin-bottom: 0.25rem;
    }
  }

  .error-container,
  .help-container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 0.25rem;
  }

  .error-icon,
  .help-icon {
    margin-right: 0.25rem;
  }

  .error-text,
  .help-text {
    font-size: 0.625rem;
    font-weight: 500;
    line-height: 1.25rem;
  }

  .error-text {
    color: #d21c1c;
  }

  .help-text {
    color: #ff6112;
  }
`;
