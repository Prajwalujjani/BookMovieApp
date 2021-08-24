import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
import registerServiceWorker from './registerServiceWorker';
//import Controller from './screens/controller/Controller';
import Header from './commom/header/Header';

ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();
