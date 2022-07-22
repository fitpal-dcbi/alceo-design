import React from "react";
import { StyledCard } from "./style";
import { getChildrenOnDisplayName } from "../../utils";

const DashboardCard = ({ children }: { children: any }) => {
  const header = getChildrenOnDisplayName(children, "Header");
  const body = getChildrenOnDisplayName(children, "Body");

  return (
    <StyledCard>
      <div className="card-header">{header}</div>
      <div className="card-body">{body}</div>
    </StyledCard>
  );
};

const Header = ({ children }: { children: any }) => children;
Header.displayName = "Header";
DashboardCard.Header = Header;

const Body = ({ children }: { children: any }) => children;
Body.displayName = "Body";
DashboardCard.Body = Body;

export default DashboardCard;
