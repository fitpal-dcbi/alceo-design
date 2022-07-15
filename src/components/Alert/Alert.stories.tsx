import React from "react";
import { Story, Meta } from "@storybook/react";
import {Alert, BaseAlertProps} from "./index";

import { ReactComponent as IconInfo } from "../../assets/icon-info.svg";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
   
    header: {
      control: {type: "text"}
    },
    description: {
      constrol: {type: "text"}
    },
    variant: {
      options: ["infoPrimary","infoSecondary", "success", "warning", "critical"],
      control: { type: "inline-radio" },
    },
    closable: {
      control: { type: "boolean"},
    },
    prefix: {
      table: {
        disable: true
      },
    },
  }
} as Meta;

const Template: Story<BaseAlertProps> = (args) => <Alert {...args}/>;
export const Default = Template.bind({});
Default.args = {
  prefix: <IconInfo/>,
  header: "Your message – make it short & clear.",
  description: "Description – make it as clear as possible.",
  variant: "infoPrimary",
  closable: true,
}
