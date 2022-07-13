import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { 
  Card, 
  CardDashboardProps,
  EditCard 
} from "./index";
import { Switch } from "../Switch/Switch.stories";

export default {
  title: "Components/Form/Card",
  component: Card,
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
    <Card>
      <Card.Header>{header}</Card.Header>
      <Card.Body>{body}</Card.Body>
    </Card>
  );
};

export const Editable: Story<CardDashboardProps> = ({
  header
}) => {
  const [isEditing, setIsEditing] = useState(true);

  return (
    <EditCard
      isEditing={isEditing}
      setIsEditing={setIsEditing}
    >
      <EditCard.Header>{header}</EditCard.Header>
      <EditCard.Body>
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
      </EditCard.Body>
    </EditCard>
  )
};  