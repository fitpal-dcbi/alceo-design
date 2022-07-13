import React from "react";
import { Card, StyledEditableCardHeader } from "./index";
import { displayNameUtils } from "../../../utils";
import { ReactComponent as PencilOrange } from "../../../assets/pencil-orange.svg";

const EditCard = ({children, isEditing, setIsEditing} : {children: any, isEditing: boolean, setIsEditing: any}) => {
  const header = displayNameUtils(children, "Header");
  const body = displayNameUtils(children, "Body");

  return (
    <Card>
      <Card.Header>
        <StyledEditableCardHeader>
        <div>{header}</div>

          {isEditing && (
            <button
              onClick={() => setIsEditing((prev: boolean) => !prev)}
            >
              <PencilOrange/>
              <span>Edit</span>
            </button>
          )}
        </StyledEditableCardHeader>
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
