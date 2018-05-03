import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

console.log('render list in client side')
ReactDOM.render(<App />, document.getElementById('list-root'));
registerServiceWorker();
