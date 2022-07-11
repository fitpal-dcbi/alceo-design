import React, { useState } from "react";
import { StyledRadio, StyledRadioWrapper } from "./style";
import { RadioProps } from "./type";

const Radio = React.forwardRef<HTMLInputElement,RadioProps>(
  (props, ref) => {
    const {
      name = '',
      disabled = false,
      onChange,
      children,
      id, value
    } = props;

    return (
      <StyledRadioWrapper
        disabled={disabled}
      >
        <StyledRadio
          type={"radio"}
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          ref={ref}
          onChange={(val) => {
            if (onChange !== undefined) onChange(val?.target?.value);
            // setIsChecked(value?.target?.checked);
          }}
        />
        <label htmlFor={id}>{children}</label>
      </StyledRadioWrapper>
    );
  }
);

export default Radio;