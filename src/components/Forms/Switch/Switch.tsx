import React, { useState } from "react";
import { BaseSwitchProps } from "./type";
import { StyledSwitchWrapper, StyledSwitch, StyledSwitchBox } from "./style";

import LockIcon from "../../../assets/icon-lock.svg";
import ActiveLockIcon from "../../../assets/icon-lock-active.svg";

const Switch = React.forwardRef<HTMLInputElement, BaseSwitchProps>(
  (props, ref) => {
    const {
      defaultChecked = false,
      disabled = false,
      name = "",
      onChange,
      readOnly = false,
      type = "default",
    } = props;

    const [isChecked, setIsChecked] = useState<boolean>(false);

    return (
      <StyledSwitchWrapper>
        <StyledSwitch
          type={"checkbox"}
          id="checkbox"
          disabled={readOnly || disabled}
          defaultChecked={defaultChecked}
          name={name}
          onChange={(value) => {
            if (readOnly) return;
            if (onChange !== undefined) onChange(value?.target?.checked);
            setIsChecked(value?.target?.checked);
          }}
          ref={ref}
        />
        <StyledSwitchBox htmlFor="checkbox" disabled={readOnly || disabled}>
          <div className="SwitchCircle">
            {type === "default" ? (
              <div className="SwitchNode" />
            ) : (
              WithIconSwitchNode(isChecked)
            )}
          </div>
        </StyledSwitchBox>
      </StyledSwitchWrapper>
    );
  }
);
export default Switch;

// WA: Supporting Component
const WithIconSwitchNode = (isChecked: boolean) => {
  return isChecked ? <ActiveLockIcon /> : <LockIcon />;
};
