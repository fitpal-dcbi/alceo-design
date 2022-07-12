import React, { useState } from "react";
import { BaseCheckboxProps } from "./index";
import { StyledCheckboxWrapper } from "./style";

const CheckboxOption= React.forwardRef<HTMLInputElement, BaseCheckboxProps>(
  (props, ref) => {
    const {
      name = "checkbox",
      disabled= false,
      id="checkbox_1",
      value="checkbox-1",
      label="Label",
      description="",
      hasError=false,
      onChange
    } = props;

    const [isChecked, setIsChecked] = useState<boolean>(false);

    return (
      <StyledCheckboxWrapper disabled={disabled} hasError={hasError}>
        <div className="container">
          <input
            type={"checkbox"}
            name={name}
            id={id}
            value={value}
            ref={ref}
            disabled={disabled}
            checked={isChecked}
            onChange={(val) => {
              if (onChange !== undefined) onChange(val?.target?.checked);
              setIsChecked(val?.target?.checked);
            }}
          />
          <span className="checkmark"></span>
        </div>
        
        <div>
          <label htmlFor={id}>{label}</label><br/>
          <label htmlFor={id} className="label-info">{description}</label>
        </div>
      </StyledCheckboxWrapper>
    );
  }
);

export default CheckboxOption;