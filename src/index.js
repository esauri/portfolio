import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App/App';

import './styles/base.module.css';
import './styles/colors.module.css';
import './styles/queries.module.css';

const mountNode = document.getElementById('root');

ReactDOM.render(<App />, mountNode);
registerServiceWorker();
