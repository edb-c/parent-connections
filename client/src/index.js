import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';


import registerServiceWorker from './registerServiceWorker';

//App.js  ---> index.html root
ReactDOM.render(
    <Provider store={store}>
    <Router>
        <App />
    </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();