import React, { FC, useState } from "react";
import { useController } from "react-hook-form";
import { ConnectForm } from "../../../utils/index";
import CheckboxOption from "./CheckboxOption";
import { CheckboxProps } from "./index";

const ControlledCheckbox: FC<CheckboxProps> = (props) => {
  const {
    name = "",
    disabled= false,
    id="checkbox_1",
    value="checkbox-1",
    label="Label",
    description="",
    control,
    onChange,
    rules={},
    hasError=false,
  } = props;

  const {
    field: { onChange: fieldOnChange, name: fieldName, ref },
  } = useController({
    name, control, rules
  })

  return (
    <div>
      <ConnectForm>
        {() => (
          <CheckboxOption
            name={fieldName}
            disabled={disabled}
            id={id}
            value={value}
            label={label}
            description={description}
            hasError={hasError}
            onChange={(value) => {
              fieldOnChange(value);
              if (typeof onChange === "function") onChange(value);
            }}
            ref={ref}
          />
        )}
      </ConnectForm>
    </div>
  );
};

export default ControlledCheckbox;