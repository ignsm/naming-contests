import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import data from './testData';
import App from './components/App';


ReactDOM.render(<App contests={data.contests} />, document.getElementById('root'));
registerServiceWorker();
