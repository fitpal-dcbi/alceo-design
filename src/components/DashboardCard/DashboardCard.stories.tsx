import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { 
  DashboardCard, 
  CardDashboardProps,
  EditDashboardCard 
} from "./index";
import { Switch } from "../Forms/Switch/Switch.stories";

export default {
  title: "Components/DashboardCard",
  component: DashboardCard,
  argTypes: {
    header: {
      defaultValue: "Profil Coach",
      control: { type: "text" },
    },
    body: {
      defaultValue: "Body Dashboard Card",
      control: { type: "text" },
    },
  }
} as Meta;

export const Uneditable: Story<CardDashboardProps> = ({
  header,
  body
}) => {
  return (
    <DashboardCard>
      <DashboardCard.Header>{header}</DashboardCard.Header>
      <DashboardCard.Body>{body}</DashboardCard.Body>
    </DashboardCard>
  );
};

export const Editable: Story<CardDashboardProps> = ({
  header
}) => {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <EditDashboardCard
      isEditing={isEditing}
      setIsEditing={setIsEditing}
    >
      <EditDashboardCard.Header>{header}</EditDashboardCard.Header>
      <EditDashboardCard.Body>
        <Switch disabled={isEditing}/>
        {!isEditing && (
          <div>
            <button onClick={() => setIsEditing((prev: boolean) => !prev)}>
              <span>Cancel</span>
            </button>
            <button onClick={() => setIsEditing((prev: boolean) => !prev)}>
              <span>Save</span>
            </button>
          </div>
        )}
      </EditDashboardCard.Body>
    </EditDashboardCard>
  )
};  