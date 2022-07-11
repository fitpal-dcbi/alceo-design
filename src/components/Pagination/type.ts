export interface BasePaginationProps {
  totalData: number;
  pageSize: number;
  currentPage: number;
}

export interface PaginationProps extends BasePaginationProps {
  onPageChange: (currentPage: number | string) => void;
  onPageSizeChange: (pageSize: number) => void;
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
