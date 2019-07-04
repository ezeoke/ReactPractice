import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import List from './components/list'
import Practice from './components/Practice';
import BuildIt from './components/BuildIt';
import ListMap from './components/listMap';
import routes from './components/list';
import AppRouter from './routers/AppRouter';

ReactDOM.render(<AppRouter/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
