# modulist-react
React Modulist is a CSS design system

## Install

```bash
npm install modulist-react
```

## Components

- [x] Badge
- [x] Box
- [x] Input
- [x] Button
- [ ] Alert
- [ ] Avatar
- [ ] Checkbox
- [ ] Menu
- [ ] Modal
- [ ] Notification
- [ ] Pagination
- [ ] Popover
- [ ] Progress
- [ ] Radio
- [ ] Select
- [ ] Select native
- [ ] Spinner
- [ ] Stepper
- [ ] Table
- [ ] Tabs
- [ ] Textarea
- [ ] Toggle


## Example

```js
import React from "react";
import { Button, Input, Badge, Box } from "modulist-react";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
            <Badge color="default">Default</Badge>
            <Badge color="primary">Primary</Badge>
            <Badge color="alternative">Alternative</Badge>
            <Badge color="subtle">Subtle</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="danger">Danger</Badge>
        </div>
        <div>
            <Box>Default</Box>
        </div>
        <div>
            <Input placeholder="Placeholder" />
        </div>
        <div>
            <Button color="default">Default</Button>
            <Button color="primary">Primary</Button>
            <Button color="alternative">Alternative</Button>
            <Button color="subtle">Subtle</Button>
            <Button color="success">Success</Button>
            <Button color="danger">Danger</Button>
        </div>
      </div>
    );
  }
}
```



## License

MIT
