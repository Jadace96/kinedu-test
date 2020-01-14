import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import './normalize.css';
import 'react-toastify/dist/ReactToastify.min.css';

ReactDOM.render(<App />, document.getElementById('root'));

module.hot.accept();
