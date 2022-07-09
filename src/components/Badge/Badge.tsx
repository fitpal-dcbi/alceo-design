import React, { FC } from "react";

import { BaseBadgeProps } from "./type";
import { StyledBadge } from "./Style";
import { ReactComponent as IconIcBlack } from "../../assets/icon-ic-black.svg";
import { ReactComponent as IconIcBlue } from "../../assets/icon-ic-blue.svg";
import { ReactComponent as IconIcGreen } from "../../assets/icon-ic-green.svg";
import { ReactComponent as IconIcOrange } from "../../assets/icon-ic-orange.svg";
import { ReactComponent as IconIcRed } from "../../assets/icon-ic-red.svg";
import { ReactComponent as IconIcWhite } from "../../assets/icon-ic-white.svg";

const Badge: FC<BaseBadgeProps> = (props) => {
  const {
    variant = "light",
    inverted = false,
    suffix = false,
    prefix,
    iconOnly = false,
    label = "",
    children,
  } = props;

  return (
    <StyledBadge variant={variant} inverted={inverted}>
      <div className="badgeWrapper">
        {!iconOnly ? (
          <>
            <div className="prefixBadge">{prefix}</div>
            <p className="badgeLabel">{label}</p>
            <>{suffix && renderSuffixIconBadge({ inverted, variant })}</>
          </>
        ) : (
          children
        )}
      </div>
    </StyledBadge>
  );
};

export default Badge;

//WA: helpers function
const renderSuffixIconBadge = ({
  inverted,
  variant,
}: {
  inverted: boolean;
  variant: string;
}) => {
  return inverted ? (
    <IconIcWhite />
  ) : (
    mapIconBadge[variant as keyof typeof mapIconBadge]
  );
};

const mapIconBadge = {
  light: <IconIcBlack />,
  neutral: <IconIcBlack />,
  info: <IconIcBlue />,
  success: <IconIcGreen />,
  warning: <IconIcOrange />,
  critical: <IconIcRed />,
};
