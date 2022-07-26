import React from "react";
import { Meta, Story } from "@storybook/react";

import { Button } from "../Button";
import { EmptyState as EmptyStateComponent } from "./index";
import { EmptyStateProps } from "./type";
import { ReactComponent as EmptyStateIcon } from "../../assets/icon-empty-state.svg";

export default {
  title: "Components/EmptyState",
  component: EmptyStateComponent,
} as Meta;

const title = "Sorry, we couldn't find that connection.";
const description =
  "Try changing up your search a bit. We'll try harder next time. ";
const image = <EmptyStateIcon />;
const button = <Button>Advance search</Button>;
const buttonV2 = <Button weight="outline">Advance search</Button>;

const EmptyState: Story = (args: EmptyStateProps) => {
  const { image, title, description, button } = args;

  return (
    <EmptyStateComponent
      title={title}
      image={image}
      description={description}
      button={button}
    />
  );
};

export const EmptyStateFullVersion = EmptyState.bind({});
EmptyStateFullVersion.args = { title, description, image, button };

export const EmptyStateFullVersion2 = EmptyState.bind({});
EmptyStateFullVersion2.args = { title, description, image, button: buttonV2 };

export const EmptyStateTitleOnly = EmptyState.bind({});
EmptyStateTitleOnly.args = { title, image };

export const EmptyStateNoDesc = EmptyState.bind({});
EmptyStateNoDesc.args = { title, image, button };
