import React, { FC } from "react";

import { PaginationProps } from "./type";
import { usePagination, DOTS } from "./hooks/usePagination";

import { StyledPagination, StyledPageNumber } from "./style";
import { ReactComponent as ChevronLeft } from "../../assets/icon-chevron-left.svg";

const Pagination: FC<PaginationProps> = (props) => {
  const {
    totalData,
    pageSize,
    currentPage,
    onPageChange,
    onPageSizeChange,
  } = props;
  const maxPage = Math.ceil(totalData / pageSize);

  const onPrevious = () => {
    currentPage === 1 ? onPageChange(1) : onPageChange(currentPage - 1);
  };

  const onNext = () => {
    currentPage === maxPage
      ? onPageChange(maxPage)
      : onPageChange(currentPage + 1);
  };

  const paginationRange = usePagination({
    currentPage: currentPage,
    totalPage: maxPage,
    siblingCount: 1,
    pageSize: pageSize,
  });

  return (
    <StyledPagination>
      <div className="pagination-container">
        <div className="pageSize-controller">
          <p className="page-size-text">Row per page</p>
          <div className="number-input-wrapper">
            <input
              type="number"
              className="number-input"
              min={1}
              defaultValue={pageSize}
              onChange={(event) =>
                onPageSizeChange(parseInt(event.target.value))
              }
            />
          </div>
        </div>

        <div
          role="button"
          className="arrow-wrapper"
          onClick={() => onPrevious()}
        >
          <ChevronLeft />
        </div>
        {paginationRange?.map((pageNumber, index) => {
          if (typeof pageNumber !== "number") {
            return (
              <li className="list" key={index}>
                <button className="dot-wrapper">{DOTS}</button>
              </li>
            );
          }

          return (
            <li className="list" key={index}>
              <StyledPageNumber
                onClick={() => onPageChange(pageNumber)}
                currentPage={currentPage}
                index={pageNumber}
              >
                {pageNumber}
              </StyledPageNumber>
            </li>
          );
        })}
        <div role="button" className="arrow-wrapper" onClick={() => onNext()}>
          <ChevronLeft className="arrow-right" />
        </div>
      </div>
    </StyledPagination>
  );
};

export default Pagination;
