import styled from "styled-components";
import { BaseAlertProps } from "./type";

const mapAlertBgColor = {
  infoPrimary: "#FFF8F4",
  infoSecondary: "#EDF9F6",
  success: "#EBF4EC",
  warning: "#FDF2BA",
  critical: "#FAEAEA"
};

const mapAlertBorderColor = {
  infoPrimary: "#FFE7DA",
  infoSecondary: "#EDF9F6",
  success: "#D7EAD9",
  warning: "#FDF2BA",
  critical: "#FAEAEA"
};

const mapAlertColor = {
  infoPrimary: "#FF6112",
  infoSecondary: "#5CA898",
  success: "#2D7738",
  warning: "#AE5700",
  critical: "#B22421"
};

const mapAlertFontColor = {
  infoPrimary: "#555555",
  infoSecondary: "#555555",
  success: "#2D7738",
  warning: "#AE5700",
  critical: "#970C0C"
};

const mapAlertButtonColor = {
  infoPrimary: "#FF6112",
  infoSecondary: "#5CA898",
  success: "#B6DAD3",
  warning: "#DDA209",
  critical: "#970C0C"
};

export const StyledAlertWrapper = styled.div<
Pick<BaseAlertProps, "variant" | "directionButton">>`
  width: auto;
  border-radius: 1.25rem;
  background-color: ${(props) => mapAlertBgColor[props.variant ?? 'infoPrimary']};
  border: 1px solid ${(props) => mapAlertBorderColor[props.variant ?? 'infoPrimary']};
  padding: 1rem;

  .alert-content,
  .alert-content__wording {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  };

  .alert-content__wording {
    width: 100%;
    align-items: flex-start;
  };

  .alert-content-prefix {
    width: 1.5rem;
    height: 1.5rem;

    path {
      fill: ${(props) => mapAlertColor[props.variant ?? 'infoPrimary']};
    };
  };

  .alert-content-info {
    display: flex;
    flex-direction: ${(props) => props.directionButton === 'beside' ? "row" : "column"};
    margin-left: .75rem;
    width:100%;
    justify-content: space-between;
    align-items: ${(props) => props.directionButton === 'beside' ? "center" : "flex-start"};
    
    p {
      font-size: .875rem;
      line-height: 1.25rem;
      margin: 0;
    };
  };

  .alert-content-info__header {
    color: ${(props) => mapAlertColor[props.variant ?? 'infoPrimary']};
    font-size: .875rem;
    font-weight: 700;
  };

  .alert-content-info__desc {
    color: ${(props) => mapAlertFontColor[props.variant ?? 'infoPrimary']};
    font-weight: 400;
  };

  .alert-content__close {
    cursor: pointer;
    font-size: .6875rem;
    color: ${(props) => mapAlertColor[props.variant ?? 'infoPrimary']};
    margin-left: 1rem;

    &:hover {
      filter: brightness(0.9) contrast(1.2);
      transform: scale(1.09);
    };
  };

  .alert-content__button {
    margin-top: ${(props) => props.directionButton === 'beside' ? '0' : '.75rem'};
    display: flex;

    button#primary {
      margin-right: .5rem;
      background : ${(props) => props.variant === 'success' ? "#fff" : mapAlertColor[props.variant ?? 'infoPrimary']};
    };

    button#secondary {
      background: ${(props) => props.variant === 'success' ? '#fff' : 'transparent' };
      color: ${(props) => mapAlertButtonColor[props.variant ?? 'infoPrimary']};
      border-color: ${(props) => mapAlertButtonColor[props.variant ?? 'infoPrimary']};
    };
  };
`;