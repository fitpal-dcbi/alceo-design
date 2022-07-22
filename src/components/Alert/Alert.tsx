import React from "react";
import { BaseAlertProps } from "./type";
import { StyledAlertWrapper } from "./style";
import { Button } from "../Button";

const Alert = React.forwardRef<HTMLDivElement, BaseAlertProps>(
  (props) => {
    const {
      prefix,
      header="",
      description="",
      variant="infoPrimary",
      closable=true,
      showPrefix=true,
      showPrimaryButton=false,
      showSecondaryButton=false,
      directionButton="beside"
    } = props;
    return (
      <StyledAlertWrapper variant={variant} directionButton={directionButton}>
        <div className="alert-content">
          <div className="alert-content__wording">
            {showPrefix && <div className="alert-content-prefix">{prefix}</div>}
            <div className="alert-content-info">
              <div className="alert-content-info__info">
                <p className="alert-content-info__header">{header}</p>
                <p className="alert-content-info__desc">{description}</p>
              </div>

              {(showPrimaryButton || showSecondaryButton) && (
                <div className="alert-content__button">
                  {showPrimaryButton && renderPrimaryButton(variant)}
                  {showSecondaryButton && renderSecondaryButton(variant)}
                </div>
              )}
            </div>
          </div>

          {closable && 
          (          
            <div className="alert-content__close">
              <span className="alert-content-close">X</span>
            </div>
          )}
        </div>
      </StyledAlertWrapper>
    )
  }
);

export default Alert;

export const renderSecondaryButton = (data: any) => {
  const {variant} = data;

  return (
    <Button 
      id="secondary"
      size="sm" 
      theme={variant === 'success' ? "secondary" : "primary"}
      weight="outline"
    >
      Secondary Button
    </Button>
  );
};

export const renderPrimaryButton = (data: any) => {
  const {variant} = data;
  return (
    <Button 
      id="primary"
      size="sm" 
      theme={variant === 'success' ? "secondary" : "primary"}
      weight={variant === 'success' ? 'outline' : 'solid'}
    >
      Primary Button
    </Button>
  );
};