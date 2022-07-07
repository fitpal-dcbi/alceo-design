import React, { FC } from "react";
import { useController } from "react-hook-form";
import { ConnectForm } from "../../../utils/index";

import Switch from "./Switch";
import { ControlledSwitchProps } from "./type";

const ControlledSwitch: FC<ControlledSwitchProps> = (props) => {
  const {
    name = "",
    disabled = false,
    readOnly = false,
    type = "default",
    onChange,
    control,
    rules = {},
  } = props;
  const {
    field: { onChange: fieldOnChange, name: fieldName, value, ref },
  } = useController({
    name,
    control,
    rules,
  });
  return (
    <ConnectForm>
      {() => (
        <Switch
          onChange={(value) => {
            fieldOnChange(value);
            if (typeof onChange === "function") onChange(value);
          }}
          name={fieldName}
          defaultChecked={value}
          ref={ref}
          disabled={disabled}
          readOnly={readOnly}
          type={type}
        />
      )}
    </ConnectForm>
  );
};

export default ControlledSwitch;
