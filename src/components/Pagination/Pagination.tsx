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
      <div className="paginationContainer">
        <div className="pageSizeController">
          <p className="pageSizeText">Row per page</p>
          <div className="numberInputWrapper">
            <input
              type={"number"}
              className="numberInput"
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
          className="arrowWrapper"
          onClick={() => onPrevious()}
        >
          <ChevronLeft />
        </div>
        {paginationRange?.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li className="list" key={index}>
                <button onClick={() => onNext()} className="dotWrapper">
                  ...
                </button>
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
        <div role="button" className="arrowWrapper" onClick={() => onNext()}>
          <ChevronLeft className="arrowRight" />
        </div>
      </div>
    </StyledPagination>
  );
};

export default Pagination;
