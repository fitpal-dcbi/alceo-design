import styled from "styled-components";
import { StyledAccordionProps } from "./type";

export const StyledAccordion = styled.div<StyledAccordionProps>`
  .accordion__container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 1.5rem 0;
    border-bottom: 1px solid #e9e9e9;
  }

  .accordion__title-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
    height: 2rem;
    :hover {
      p {
        padding-left: 0.375rem;
      }
    }
    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #262626;
      padding-left: ${(props) => (props.isOpen ? "0.375rem" : "0")};
      transition: all 0.3s ease-in-out;

      @media (min-width: 768px) {
        font-size: 20px;
      }
    }
  }

  .accordion__body-wrapper {
    margin-top: ${(props) => (props.isOpen ? "1rem" : "0")};
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    height: ${(props) => (props.isOpen ? "auto" : "0")};
    transition: margin-top 0.4s ease-in-out, height 1s ease-in-out;

    p {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 21px;
      color: #555555;
      margin: 0;

      @media (min-width: 768px) {
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
`;
