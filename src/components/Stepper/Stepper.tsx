import React, { FC } from "react";

import { BaseStepperProps } from "./type";
import { StyledStepper } from "./style";
import { ReactComponent as PlusIcon } from "../../assets/icon-plus.svg";
import { ReactComponent as MinusIcon } from "../../assets/icon-minus.svg";

const Stepper: FC<BaseStepperProps> = (props) => {
  const { onPlusClick, onMinusClick, quantity } = props;

  return (
    <StyledStepper>
      <div className="StepperWrapper">
        <button className="butttonWrapper" onClick={() => onMinusClick()}>
          <MinusIcon className="iconWrapper" />
        </button>
        <h4 className="textWrapper">{quantity}</h4>
        <button className="butttonWrapper" onClick={() => onPlusClick()}>
          <PlusIcon className="iconWrapper" />
        </button>
      </div>
    </StyledStepper>
  );
};

export default Stepper;
