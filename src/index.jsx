import _ from 'lodash';
import { react } from 'react';
import { render } from 'react-dom';

document.body.appendChild('<div id="root"></div>');

render(<h1>Hello World!</h1>, document.getElementById('root'));
