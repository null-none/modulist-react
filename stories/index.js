import React from "react";
import { storiesOf } from "@storybook/react";

import { Button, Input, Badge, Box } from "../src/index";

require("../node_modules/@modulist/css/dist/modulist.css");

storiesOf("Badge", module).add("Example", () => (
  <div>
    <Badge color="default">Default</Badge>
    <Badge color="primary">Primary</Badge>
    <Badge color="alternative">Alternative</Badge>
    <Badge color="subtle">Subtle</Badge>
    <Badge color="success">Success</Badge>
    <Badge color="danger">Danger</Badge>
  </div>
));

storiesOf("Box", module).add("Default", () => (
  <div>
    <Box>Default</Box>
  </div>
));

storiesOf("Input", module).add("Default", () => (
  <div>
    <Input placeholder="Placeholder" />
  </div>
));

storiesOf("Button", module)
  .add("Appearance", () => (
    <div>
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="alternative">Alternative</Button>
      <Button color="subtle">Subtle</Button>
      <Button color="success">Success</Button>
      <Button color="danger">Danger</Button>
    </div>
  ))
  .add("Size", () => (
    <div>
      <Button color="default" size="0">
        Size 0
      </Button>
      <Button color="default" size="1">
        Size 1
      </Button>
      <Button color="default" size="2">
        Size 2
      </Button>
      <Button color="default" size="3">
        Size 3
      </Button>
      <Button color="default" size="4">
        Size 4
      </Button>
    </div>
  ));