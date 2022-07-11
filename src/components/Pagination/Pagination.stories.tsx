import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import { Pagination as PaginationComponent } from "./index";
import { BasePaginationProps } from "./type";

export default {
  title: "Components/Pagination",
  component: PaginationComponent,
  argTypes: {
    page: {
      control: { type: "number" },
    },
    pageSize: {
      control: { type: "number" },
    },
    totalData: {
      control: { type: "number" },
    },
  },
} as Meta;

export const Switch: Story<BasePaginationProps> = (props) => {
  const { currentPage = 1, pageSize = 10, totalData = 100 } = props;

  const [page, setPage] = useState<any>(currentPage);
  const [pageSizeState, setPageSizeState] = useState<number>(pageSize ?? 10);

  return (
    <PaginationComponent
      totalData={totalData}
      pageSize={pageSizeState}
      onPageSizeChange={setPageSizeState}
      currentPage={page}
      onPageChange={(page) => setPage(page)}
    />
  );
};
