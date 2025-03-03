import React, { useEffect } from "react";
import type { Preview, Decorator } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";
import { NeynarContextProvider } from "../src/contexts/NeynarContextProvider";
import { Theme } from "../src/enums";

import "../dist/style.css";
import { themes } from "@storybook/theming";

const themeDecorator = withThemeByClassName({
  defaultTheme: Theme.Light,
  themes: {
    light: "theme-light",
    dark: "theme-dark",
  },
});

const withNeynarProvider: Decorator = (Story, context) => {
  const theme = context.globals.theme || Theme.Light;

  return (
    <NeynarContextProvider
      settings={{
        clientId: process.env.CLIENT_ID || "",
        defaultTheme: theme,
        eventsCallbacks: {
          onAuthSuccess(params) {
            console.log("onAuthSuccess", params);
          },
          onSignout(user) {
            console.log("onSignout", user);
          },
        },
      }}
    >
      <Story />
    </NeynarContextProvider>
  );
};

if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded");

    window.addEventListener(
      "copy",
      (event) => {
        console.log("copy event detected:", event);

        const selectedText = window.getSelection()?.toString() || "";
        console.log("selectedText:", selectedText);

        if (selectedText) {
          window.parent.postMessage(
            { action: "copy", text: selectedText },
            "https://dev.neynar.com"
          );
        }
      },
      true
    );
  });

  //@ts-ignore
  navigator.permissions.query({ name: "clipboard-read" }).then(console.log);
}

const preview: Preview = {
  decorators: [themeDecorator, withNeynarProvider],

  parameters: {
    controls: {
      layout: "fullscreen",
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        { name: "Dark", value: "#333" },
        { name: "Light", value: "#9dafc7" },
      ],
      default: "Light",
    },
    docs: {
      theme: {
        ...themes.dark,
        appContentBg: "#052038",
      },
    },
    sourceLink: "https://github.com/neynarxyz/react/",
  },

  tags: ["autodocs"],
};

export default preview;
