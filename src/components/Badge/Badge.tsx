import React, { FC } from "react";

import { BaseBadgeProps } from "./type";
import { StyledBadge } from "./Style";
import { ReactComponent as IconIc } from "../../assets/icon-ic.svg";
import { ReactComponent as IconIcWhite } from "../../assets/icon-ic-white.svg";

const Badge: FC<BaseBadgeProps> = (props) => {
  const {
    variant = "primary",
    inverted = false,
    hasInfoIcon = false,
    prefix,
    iconOnly = false,
    children,
  } = props;

  return (
    <StyledBadge variant={variant} inverted={inverted}>
      <div className="badge-wrapper">
        {!iconOnly ? (
          <>
            {prefix && <div className="prefix-badge">{prefix}</div>}
            <p className="badge-label">{children}</p>
            <>{hasInfoIcon && (inverted ? <IconIcWhite /> : <IconIc />)}</>
          </>
        ) : (
          children
        )}
      </div>
    </StyledBadge>
  );
};

export default Badge;
