import React from "react";
import { useFormContext } from "react-hook-form";

const ConnectForm = ({ children }: { children: any }) => {
  const methods = useFormContext();
  return children({ ...methods });
};

export default ConnectForm;
