import React from "react";
import { StyledCardEditable } from "./style";
import { Card } from ".";
import { DisplayNameUtils } from "../../../utils";
import { ReactComponent as PencilOrange } from "../../../assets/pencil-orange.svg";

const EditCard = ({children, isEditing, setIsEditing} : {children: any, isEditing: boolean, setIsEditing: any}) => {
  const header = DisplayNameUtils(children, "Header");
  const body = DisplayNameUtils(children, "Body");

  return (
    <Card>
      <Card.Header>
        <StyledCardEditable>
        <div>{header}</div>

          {isEditing && (
            <button
              onClick={() => setIsEditing((prev: boolean) => !prev)}
            >
              <PencilOrange/>
              <span>Edit</span>
            </button>
          )}
        </StyledCardEditable>
      </Card.Header>
      <Card.Body>{body}</Card.Body>
    </Card>
  );
};

const Header = ({ children }: { children: any }) => children;
Header.displayName = "Header";
EditCard.Header = Header;

const Body = ({ children } : { children: any }) => children;
Body.displayName = "Body";
EditCard.Body = Body;

export default EditCard;
