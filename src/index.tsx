import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithAuth from './components/auth';

import Amplify from 'aws-amplify';
import configuration from './aws-exports';

const appSyncConfig = {
  "aws_appsync_graphqlEndpoint": "https://fcbblfezbbcqfcfwr3cmc7e5ca.appsync-api.eu-central-1.amazonaws.com/graphql",
  "aws_appsync_region": "eu-central-1",
  "aws_appsync_authenticationType": "API_KEY",
  "aws_appsync_apiKey": "da2-mlruqi3acngwjf2jfwom3cvplm"
}

Amplify.configure({...configuration, ...appSyncConfig});

ReactDOM.render(<AppWithAuth />, document.getElementById('root'));
