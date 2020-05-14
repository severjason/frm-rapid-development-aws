import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';

import Amplify from 'aws-amplify';
import configuration from './aws-exports';

Amplify.configure(configuration);

ReactDOM.render(<App />, document.getElementById('root'));
