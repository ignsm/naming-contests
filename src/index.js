import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
import App from './components/App';

axios.get('/api/contests')
  .then(resp => {
    ReactDOM.hydrate(
      <App contests={resp.data.contests} />,
      document.getElementById('root')
    );
  })
  .catch(err => console.error(err));

registerServiceWorker();
