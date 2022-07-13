import React from "react";

export const getChildrenOnDisplayName = (children: any, displayName: any) =>
  React.Children.map(children, (child) =>
    child.type.displayName === displayName ? child : null
  )

export default getChildrenOnDisplayName;
