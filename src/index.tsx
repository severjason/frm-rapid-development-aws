import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithAuth from './components/auth';

import Amplify from 'aws-amplify';
import configuration from './aws-exports';

Amplify.configure(configuration);

ReactDOM.render(<AppWithAuth />, document.getElementById('root'));
