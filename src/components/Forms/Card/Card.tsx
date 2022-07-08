import React from "react";
import { StyledCard } from "./style";
import { DisplayNameUtils } from "../../../utils";

const Card = ({ children }: { children: any}) => {
  const header = DisplayNameUtils(children, "Header");
  const body = DisplayNameUtils(children, "Body");

  return (
    <StyledCard>
      <div className="card-header">{header}</div>
      <div className="card-body">{body}</div>
    </StyledCard>
  );
};

const Header = ({ children }: { children: any}) => children;
Header.displayName = "Header";
Card.Header = Header;

const Body = ({ children }:{ children: any}) => children;
Body.displayName = "Body";
Card.Body = Body;

export default Card;