import React from "react";
import { DashboardCard, StyledEditableCardHeader } from "./index";
import { getChildrenOnDisplayName } from "../../utils";
import { ReactComponent as PencilOrange } from "../../assets/pencil-orange.svg";

const EditDashboardCard = ({children, isEditing, setIsEditing} : {children: any, isEditing: boolean, setIsEditing: any}) => {
  const header = getChildrenOnDisplayName(children, "Header");
  const body = getChildrenOnDisplayName(children, "Body");

  return (
    <DashboardCard>
      <DashboardCard.Header>
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
      </DashboardCard.Header>
      <DashboardCard.Body>{body}</DashboardCard.Body>
    </DashboardCard>
  );
};

const Header = ({ children }: { children: any }) => children;
Header.displayName = "Header";
EditDashboardCard.Header = Header;

const Body = ({ children } : { children: any }) => children;
Body.displayName = "Body";
EditDashboardCard.Body = Body;

export default EditDashboardCard;
