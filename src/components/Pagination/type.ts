export interface BasePaginationProps {
  totalData: number;
  pageSize: number;
  onPageChange: (currentPage: number | string) => void;
  currentPage: number;
}

export type BaseUsePaginationProps = {
  totalPage: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
};

export type StyledPagiantionProps = {
  index: number | string;
  currentPage: number;
};
