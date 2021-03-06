import React from 'react';
import ReactDOM from 'react-dom';

import './css/index.css';
import './css/Header.css';
import './css/Body.css';
import './css/Footer.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
