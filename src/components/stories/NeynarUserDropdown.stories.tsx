import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import NeynarUserDropdown, {
  NeynarUserDropdownProps,
} from "../organisms/NeynarUserDropdown";
import { NeynarContextProvider } from "../../contexts";
import { Theme } from "../../enums";

const meta: Meta<typeof NeynarUserDropdown> = {
  title: "NeynarUserDropdown",
  component: NeynarUserDropdown,
  decorators: [
    (Story) => (
      <NeynarContextProvider
        settings={{
          clientId: process.env.CLIENT_ID || "",
          defaultTheme: Theme.Light,
        }}
      >
        <Story />
      </NeynarContextProvider>
    ),
  ],
};

export default meta;

const TemplateWithOnChange: StoryFn<NeynarUserDropdownProps> = (args) => {
  const [value, setValue] = React.useState<string>("");
  return (
    <div style={{ maxWidth: "400px" }}>
      <NeynarUserDropdown
        {...args}
        value={value}
        onChange={(value) => {
          console.log(value);
          setValue(value);
        }}
      />
    </div>
  );
};

export const WithOnChange = TemplateWithOnChange.bind({});
