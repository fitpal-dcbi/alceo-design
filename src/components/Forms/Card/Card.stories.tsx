import React from "react";
import { Meta, Story } from "@storybook/react";
import { Card } from "./index";
import { CardDashboardProps } from "../type";

export default {
  title: "Components/Form/Card",
  component: Card,
} as Meta;

export const Uneditable: Story<CardDashboardProps> = (args) => {
  args = {
    header: "Profil Coach",
    editable: false,
    body: <div>Body</div>
  }
  return (
    <Card>
      <Card.Header>{args.header}</Card.Header>
      <Card.Body>{args.body}</Card.Body>
    </Card>
  );
};

export const Editable: Story<CardDashboardProps> = (args) => {
  return (
    <></>
  );
}
