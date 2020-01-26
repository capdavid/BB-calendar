import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import calendarStoreConfig from './hooks/calendarStore';

calendarStoreConfig();
ReactDOM.render(<App />, document.getElementById('root'));
