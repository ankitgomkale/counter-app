import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Counter from './components/counter';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<Counter />, document.getElementById('root'));
registerServiceWorker();
