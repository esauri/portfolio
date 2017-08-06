import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './styles/variables.module.css';
import './styles/queries.module.css';
import './styles/base.module.css';

import App from './containers/App/App';

const mountNode = document.getElementById('app');
ReactDOM.render(<App />, mountNode);
registerServiceWorker();
