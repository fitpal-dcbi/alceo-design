import React, { FC } from "react";
import { useController } from "react-hook-form";
import { Radio } from ".";
import { ConnectForm } from "../../../utils/index";
import { RadioProps } from "./type";

const ControlledRadio : FC<RadioProps> = (props) => {
  const {
    name = "",
    disabled = false,
    onChange,
    control,
    rules = {},
    children = '',
    id = '',
    value
  } = props;
  const {
    field: { onChange: fieldOnChange, name: fieldName, ref },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <ConnectForm>
      {() => (
        <Radio
          onChange={(val) => {
            fieldOnChange(val);
            if (typeof onChange === "function") onChange(val);
          }}
          name={fieldName}
          disabled={disabled}
          ref={ref}
          control={control}
          children={children}
          id={id}
          value={value}
        />
      )}
    </ConnectForm>
  )
};

export default ControlledRadio;
