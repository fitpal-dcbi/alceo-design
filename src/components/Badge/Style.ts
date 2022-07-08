import styled from "styled-components";
import { BaseBadgeProps } from "./type";

const mapBadgeBorderColor = {
  light: "#F0F0F0",
  neutral: "#E6E6E6",
  info: "#BADAEE",
  success: "#D7EAD9",
  warning: "#FAE2C7",
  critical: "#F4D2D2",
};

const mapBadgeBackgroundColor = {
  light: "#FFFFFF",
  neutral: "#FAFAFA",
  info: "#DEF3FF",
  success: "#EBF4EC",
  warning: "#FDF2BA",
  critical: "#FAEAEA",
};

const mapInvertedBadgeBackgroundColor = {
  light: "#262626",
  neutral: "#FAFAFA",
  info: "#89BEDC",
  success: "#28A138",
  warning: "#FFC01E",
  critical: "#D21C1C",
};

const mapBadgeIconBackgroundColor = {
  light: "#262626",
  neutral: "#262626",
  info: "#2B6789",
  success: "#2D7738",
  warning: "#AE5700",
  critical: "#970C0C",
};

const mapInvertedBadgeIconBackgroundColor = {
  light: "#FFFFFF",
  neutral: "#262626",
  info: "#FFFFFF",
  success: "#FFFFFF",
  warning: "#FFFFFF",
  critical: "#FFFFFF",
};

const mapBadgeFontColor = {
  light: "#262626",
  neutral: "#262626",
  info: "#2B6789",
  success: "#2D7738",
  warning: "#AE5700",
  critical: "#970C0C",
};

const mapInvertedBadgeFontColor = {
  light: "#FFFFFF",
  neutral: "#262626",
  info: "#FFFFFF",
  success: "#FFFFFF",
  warning: "#FFFFFF",
  critical: "#970C0C",
};

export const StyledBadge = styled.div<
  Pick<BaseBadgeProps, "variant" | "inverted">
>`
  .badgeWrapper {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: min-content;
    min-width: 2rem;
    height: 1.5rem;
    max-height: 1.5rem;
    min-height: 1.5rem;

    padding: 0.25rem 0.5rem;
    border-radius: 15px;
    background-color: ${(props) =>
      props.inverted
        ? mapInvertedBadgeBackgroundColor[
            props.variant as keyof typeof mapBadgeBackgroundColor
          ]
        : mapBadgeBackgroundColor[
            props.variant as keyof typeof mapInvertedBadgeBackgroundColor
          ]};

    border: ${(props) =>
      props.inverted
        ? "none"
        : `1px solid ${
            mapBadgeBorderColor[
              props.variant as keyof typeof mapBadgeBorderColor
            ]
          }`};
  }

  .badgeLabel {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    color: ${(props) =>
      props.inverted
        ? mapInvertedBadgeFontColor[
            props.variant as keyof typeof mapInvertedBadgeFontColor
          ]
        : mapBadgeFontColor[props.variant as keyof typeof mapBadgeFontColor]};
    line-height: 1rem;
    margin-right: 0.375rem;
  }

  .prefixBadge {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 0.75rem;
    margin-right: 0.375rem;
    line-height: 1rem;
  }

  .suffixBadge {
    width: 0.875rem;
    height: 0.875rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.inverted
        ? mapInvertedBadgeIconBackgroundColor[
            props.variant as keyof typeof mapInvertedBadgeIconBackgroundColor
          ]
        : mapBadgeIconBackgroundColor[
            props.variant as keyof typeof mapBadgeIconBackgroundColor
          ]};
  }
`;
