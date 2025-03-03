import { addons, types } from "@storybook/addons";
import { create } from "@storybook/theming";
import { IconButton } from "@storybook/components";
import GoToNpm from "../src/storybook-components/gotoNpm";

const customTheme = create({
  base: "dark",
  brandTitle: "Neynar React Components",
  brandUrl: "https://neynar.com",
  colorSecondary: "#8A63D2",
  appBg: "#0f111c",
  appContentBg: "#0f111c",
});

addons.setConfig({
  theme: customTheme,
  showPanel: true,
  showNav: true,
  toolbar: { title: { hidden: false } },
});

addons.register("addon", () => {
  // @ts-ignore
  addons.add("goto-npm", {
    title: "Go to NPM",
    type: types.TOOL,
    match: ({ viewMode }) => !!viewMode,
    render: GoToNpm,
  });
});
