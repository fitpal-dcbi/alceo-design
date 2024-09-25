import styled from "styled-components";
import { BaseBadgeProps } from "./type";

const badgeStyles = {
  primary: {
    bgColor: "#FA7E4B",
    borderColor: "#FA7E4B",
    fontColor: "#FFFFFF",
    iconColor: "#FFFFFF",
    invertedBgColor: "#FFFFFF",
    invertedFontColor: "#FA7E4B",
    invertedIconColor: "#FA7E4B",
  },
  success: {
    bgColor: "#B4B47B",
    borderColor: "#B4B47B",
    fontColor: "#FFFFFF",
    iconColor: "#FFFFFF",
    invertedBgColor: "#FFFFFF",
    invertedFontColor: "#B4B47B",
    invertedIconColor: "#B4B47B",
  },
};

export const StyledBadge = styled.div<
  Pick<BaseBadgeProps, "variant" | "inverted">
>`
  .badge-wrapper {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    min-width: 2rem;
    min-height: 1.5rem;
    height: 1.5rem;
    width: max-content;

    padding: 0.25rem 0.5rem;
    border-radius: 20px;
    background-color: ${(props) =>
      props.inverted
        ? badgeStyles[props.variant as keyof typeof badgeStyles].invertedBgColor
        : badgeStyles[props.variant as keyof typeof badgeStyles].bgColor};

    border: 1px solid ${(props) => badgeStyles[props.variant as keyof typeof badgeStyles].borderColor};
  }

  .badge-label {
    font-size: 0.75rem;
    color: ${(props) =>
      props.inverted
        ? badgeStyles[props.variant as keyof typeof badgeStyles]
            .invertedFontColor
        : badgeStyles[props.variant as keyof typeof badgeStyles].fontColor};
    line-height: 1rem;
    margin-right: 0.375rem;
  }

  .prefix-badge {
    font-size: 0.75rem;
    margin-right: 0.375rem;
    line-height: 1rem;
  }

  svg > path {
    fill: ${(props) =>
      props.inverted
        ? badgeStyles[props.variant as keyof typeof badgeStyles]
            .invertedIconColor
        : badgeStyles[props.variant as keyof typeof badgeStyles].iconColor};
  }
`;
