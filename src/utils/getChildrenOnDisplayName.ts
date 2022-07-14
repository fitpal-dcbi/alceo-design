import React from "react";

const getChildrenOnDisplayName = (children: any, displayName: string) =>
  React.Children.map(children, (child) =>
    child.type.displayName === displayName ? child : null
  );

export default getChildrenOnDisplayName;
