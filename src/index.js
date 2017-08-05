import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './styles/variables.module.css';
import './styles/queries.module.css';
import './styles/base.module.css';

import App from './containers/App/App';

const mountNode = document.getElementById('app');

console.log('\n %c Howdy folks \n', 'background: #272727; color: #f3f6fa; padding: 10px;');
ReactDOM.render(<App />, mountNode);
registerServiceWorker();
