import styled from "styled-components";
import { StyledPagiantionProps } from "./type";

export const StyledPagination = styled.div`
  .paginationContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }

  .arrowWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    width: 1.875rem;
    height: 1.875rem;
    background-color: #fff8f4;
    margin: 0 0.25rem;
    cursor: pointer;
  }

  .dotWrapper {
    padding: 0.5rem 0.75rem;
    margin-left: 0;
    line-height: 1.25rem;
    border: none;
    border-radius: 0.125rem;

    font-size: 0.625rem;
    font-weight: 600;
    color: #ff6112;
    background-color: #ffffff;

    @media and (min-width: 768px) {
      font-size: 0.875rem;
    }
  }

  .arrowRight {
    transform: rotate(180deg);
  }

  .list {
    list-style-type: none;
  }
`;

export const StyledPageNumber = styled.button<StyledPagiantionProps>`
  color: ${(props) =>
    props.currentPage === props.index ? "#FFD5C6" : "#FF6112"};
  background-color: ${(props) =>
    props.currentPage === props.index ? "#FF6112" : "#FFFFFF"};

  width: 2rem;
  height: 1.875rem;
  margin: 0 0.25rem;
  border-radius: 0.125rem;

  line-height: 1.25rem;
  font-weight: 600;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;

  :hover {
    background-color: #ff6112;
    color: #ffd5c6;
  }
`;
