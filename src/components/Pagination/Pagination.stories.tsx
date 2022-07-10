import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import { Pagination as PaginationComponent } from "./index";
import { BasePaginationProps } from "./type";

export default {
  title: "Components/Pagination",
  component: PaginationComponent,
  argTypes: {
    // type: {
    //   options: ["default", "withIcon"],
    //   control: { type: "radio" },
    // },
    // readOnly: {
    //   options: [true, false],
    //   control: { type: "boolean" },
    // },
    // disabled: {
    //   options: [true, false],
    //   control: { type: "boolean" },
    // },
    // defaultChecked: {
    //   options: [true, false],
    //   control: { type: "boolean" },
    // },
    // name: {
    //   control: { type: "text" },
    // },
  },
} as Meta;

export const Switch: Story = () => {
  const [page, setPage] = useState<number | string>(0);

  return (
    <PaginationComponent
      totalData={100}
      pageSize={10}
      currentPage={1}
      onPageChange={(page) => setPage(page)}
    />
  );
};
