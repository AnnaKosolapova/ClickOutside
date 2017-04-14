import React from 'react';
import { storiesOf } from '@kadira/storybook';

import ClickOutside from './';


storiesOf('ClickOutside', module)
  .addWithInfo('default', () => (
    <ClickOutside callback={() => console.log('Holla!')}>
      <p>CHILDREN</p>
      <p>CHILDREN</p>
      <p>CHILDREN</p>
    </ClickOutside>
  ))
;
