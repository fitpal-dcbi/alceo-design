import styled from "styled-components";
import { BaseBadgeProps } from "./type";

const badgeStyles = {
  primary: {
    bgColor: "#FA7E4B",
    borderColor: "#FA7E4B",
    fontColor: "#FFFFFF",
    iconColor: "#FFFFFF",
    invertedBgColor: "#FFF2ED",
    invertedFontColor: "#FA7E4B",
    invertedIconColor: "#FA7E4B",
  },
  success: {
    bgColor: "#9E9E6C",
    borderColor: "#9E9E6C",
    fontColor: "#FFFFFF",
    iconColor: "#FFFFFF",
    invertedBgColor: "#F0EECB",
    invertedFontColor: "#4D4744",
    invertedIconColor: "#4D4744",
  },
  critical: {
    bgColor: "#B65842",
    borderColor: "#B65842",
    fontColor: "#FFFFFF",
    iconColor: "#FFFFFF",
    invertedBgColor: "#F8DED3",
    invertedFontColor: "#B65842",
    invertedIconColor: "#B65842",
  },
  warning: {
    bgColor: "#D0A75D",
    borderColor: "#D0A75D",
    fontColor: "#FFFFFF",
    iconColor: "#FFFFFF",
    invertedBgColor: "#FCFBE6",
    invertedFontColor: "#C29248",
    invertedIconColor: "#C29248",
  },
  info: {
    bgColor: "#86A1AD",
    borderColor: "#86A1AD",
    fontColor: "#FFFFFF",
    iconColor: "#FFFFFF",
    invertedBgColor: "#F4F9FA",
    invertedFontColor: "#6E868D",
    invertedIconColor: "#7A949D",
  },
};

const getFontSize = {
  'sm': '0.75rem',
  'md': '1rem',
}

const getFontWeight = {
  'bold': 600,
  'light': 400
}

const getPaddingSize = {
  'sm': '0.25rem 0.5rem',
  'md': '0.25rem 0.75rem'
}

export const StyledBadge = styled.div<
  Pick<BaseBadgeProps, "variant" | "inverted" | "size" | "weight">
>`
  .badge-wrapper {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    min-width: 2rem;
    min-height: 1.5rem;
    width: max-content;

    padding:${(props) => getPaddingSize[props.size as keyof typeof getPaddingSize]};;
    border-radius: 20px;
    background-color: ${(props) =>
      props.inverted
        ? badgeStyles[props.variant as keyof typeof badgeStyles].invertedBgColor
        : badgeStyles[props.variant as keyof typeof badgeStyles].bgColor};

    border: 1px solid ${(props) => badgeStyles[props.variant as keyof typeof badgeStyles].borderColor};
  }

  .badge-label {
    font-size: ${(props) => getFontSize[props.size as keyof typeof getFontSize]};
    color: ${(props) =>
      props.inverted
        ? badgeStyles[props.variant as keyof typeof badgeStyles]
            .invertedFontColor
        : badgeStyles[props.variant as keyof typeof badgeStyles].fontColor};
    line-height: 1rem;
    font-weight: ${(props) => getFontWeight[props.weight as keyof typeof getFontWeight]};
    margin: 0;
  }

  .prefix-badge {
    font-size: ${(props) => getFontSize[props.size as keyof typeof getFontSize]};
    line-height: 1rem;
  }

  .badge-info {
    display: flex;
    margin-left: 0.375rem;
  }

  svg > path {
    fill: ${(props) =>
      props.inverted
        ? badgeStyles[props.variant as keyof typeof badgeStyles]
            .invertedIconColor
        : badgeStyles[props.variant as keyof typeof badgeStyles].iconColor};
  }
`;
