import React, { FC } from "react";

import { BaseStepperProps } from "./type";
import { StyledStepper } from "./style";
import PlusIcon from "../../assets/icon-plus.svg";
import MinusIcon from "../../assets/icon-minus.svg";

const Stepper: FC<BaseStepperProps> = (props) => {
  const { onAddClick, onRemoveClick, quantity } = props;

  return (
    <StyledStepper>
      <div className="StepperWrapper">
        <button className="butttonWrapper" onClick={() => onRemoveClick()}>
          <img src={MinusIcon} className="iconWrapper" />
        </button>
        <h4 className="textWrapper">{quantity}</h4>
        <button className="butttonWrapper" onClick={() => onAddClick()}>
          <img src={PlusIcon} className="iconWrapper" />
        </button>
      </div>
    </StyledStepper>
  );
};

export default Stepper;
