import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import calendarStoreConfig from './hooks/calendarStore';

calendarStoreConfig();
ReactDOM.render(<App />, document.getElementById('root'));

// https://paper.dropbox.com/doc/Interview-Calendar-AbEOjCiQQyBhKY8o6W2Pi
