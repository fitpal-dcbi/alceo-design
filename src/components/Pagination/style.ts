import styled from "styled-components";
import { StyledPaginationProps } from "./type";

export const StyledPagination = styled.div`
  .page-size-controller {
    display: none;
    @media screen and (min-width: 768px) {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 1.25rem;

      .page-size-text {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #4D4744;
        margin-right: 1rem;
      }

      .number-input-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 0.375rem 0.5rem;
        background: #ffffff;
        border: 1px solid #e6e6e6;
        border-radius: 4px;

        max-width: 3rem;
        max-height: 2rem;
      }

      .number-input {
        max-width: 2.25rem;
        max-height: 2rem;
        border: none;

        :focus {
          outline: none;
        }

        ::-webkit-inner-spin-button {
          opacity: 1;
        }
      }
    }
  }

  .pagination-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  .arrow-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #FEE5DB;
    border-radius: 0.125rem;
    width: 1.875rem;
    height: 1.875rem;
    background-color: #FEFEF8;
    margin: 0 0.25rem;
    cursor: pointer;
    box-sizing: border-box;
  }

  .dot-wrapper {
    padding: 0.5rem 0.75rem;
    margin-left: 0;
    line-height: 1.25rem;
    border: none;
    border-radius: 0.125rem;

    font-size: 0.625rem;
    font-weight: 600;
    color: #FA7E4B;
    background-color: #ffffff;

    @media and (min-width: 768px) {
      font-size: 0.875rem;
    }
  }

  .arrow-right {
    transform: rotate(180deg);
  }

  .list {
    list-style-type: none;
  }
`;

export const StyledPageNumber = styled.button<StyledPaginationProps>`
  color: ${(props) =>
    props.currentPage === props.index ? "#FDF2ED" : "#FA7E4B"};
  background-color: ${(props) =>
    props.currentPage === props.index ? "#FA7E4B" : "#FFFFFF"};

  width: 2rem;
  height: 1.875rem;
  margin: 0 0.25rem;
  border-radius: 0.125rem;

  line-height: 1.25rem;
  font-weight: normal;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #FA7E4B;
    color: #FDF2ED;
  }
`;
