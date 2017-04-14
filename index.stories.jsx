import React from 'react';
import { storiesOf } from '@kadira/storybook';

import ClickOutside from './';


storiesOf('ClickOutside', module)
  .addWithInfo('default', () => (
    <div style={{ width: '200px' }}>
      <ClickOutside callback={() => console.log('Holla!')}>
        <p>CHILDREN</p>
        <p>CHILDREN</p>
        <p>CHILDREN</p>
      </ClickOutside>
    </div>
  ))
;
