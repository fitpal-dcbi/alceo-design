import React from "react";
import styled, { StyledComponent } from "styled-components";

import { InputProps } from "./type";

export const StyledInput = styled.input`
  flex: 1 1 20%;
  border: none;
  padding: 0;
  width: 100%;
  height: 100%;
  border-radius: 1.25rem;
  padding: 0 0.875rem;
  color: #555555;
  font-size: 0.875rem;
  line-height: 1.25rem;

  &:focus {
    outline: none;
  }
  &:read-only,
  &::placeholder {
    font-weight: 500;
  }

  &::placeholder {
    color: #abaeb8;
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
  border: 1px solid
    ${(props) => {
      if (props.error) return "#B65842";
      else if (props.help) return "#FA7E4B";
      else return "#E6E6E6";
    }};
  background-color: ${(props) => (props.disabled ? "#F0F0F0" : "#FFFFFF")};
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
    font-size: 0.875rem;
    font-weight: 500;
  }

  .prefix-container {
    padding: 0 0.875rem;
  }

  .suffix-container {
    padding: 0 0.875rem;
  }

  .prefix-container + input {
    padding-left: 0;
  }

  input + .suffix-container {
    padding-left: 0;
  }
`;

export const Field: any = styled(
  React.forwardRef<any, any>(
    (
      {
        component: Component,
        className,
        children,
        spaceAfter,
        theme,
        $width,
        ...props
      },
      ref
    ) => {
      return (
        <Component className={className} ref={ref} {...props}>
          {children}
        </Component>
      );
    }
  )
)`
  span.input-label {
    display: block;
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.25rem;
    &.non-inline-label {
      margin-bottom: 0.25rem;
    }

    @media (min-width: 768px) {
      font-size: 0.875rem;
    }
  }

  .error-container,
  .help-container {
    display: flex;
    justify-content: flex-start;
    margin-top: 0.25rem;
  }

  .error-icon,
  .help-icon {
    margin-right: 0.25rem;
    margin-top: 0.125rem;
    min-width: 1rem;
    min-height: 1rem;
    width: 1rem;
    height: 1rem;
  }

  .error-text,
  .help-text {
    font-size: 0.625rem;
    font-weight: 500;
    line-height: 1.25rem;
  }

  .error-text {
    color: #B65842;
  }

  .help-text {
    color: #FA7E4B;
  }
`;
