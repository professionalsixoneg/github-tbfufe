import _ from 'lodash';
import { React } from 'react';
import { render } from 'react-dom';

// Setup root node where our React app will be attached to
const root = document.createElement('div');

root.id = 'root';
document.body.appendChild(root);

render(<h1>Hello World!</h1>, document.getElementById('root'));
