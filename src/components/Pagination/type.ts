export interface BasePaginationProps {
  totalData: number;
  pageSize: number;
  currentPage: number;
}

export interface PaginationProps extends BasePaginationProps {
  onPageChange: (currentPage: number) => void;
  onPageSizeChange: (pageSize: number) => void;
}

export type UsePaginationProps = {
  totalPage: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
};

export type StyledPaginationProps = {
  index: number;
  currentPage: number;
};
