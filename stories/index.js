import React from './node_modules/react';
import { storiesOf } from './node_modules/@storybook/react';
import { Button } from '../src/index';

storiesOf('Button', module)
  .add('Appearance', () => (
    <Button>Default</Button>
  ))
  .add('Size', () => (
    <Button>Default</Button>
  ));   