import React, { FC } from "react";
import { Icons, IconButton } from "@storybook/components";

const GoToNpm: FC = () => {
  return (
    <IconButton
      key="goto-npm"
      title="Go to NPM"
      onClick={() => {
        const npmUrl = "https://www.npmjs.com/package/@neynar/react";
        window.open(npmUrl, "_blank", "noopener,noreferrer");
      }}
    >
      Go to NPM <Icons icon="arrowrightalt" />
    </IconButton>
  );
};

export default GoToNpm;
