import Auth from '@aws-amplify/auth';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignUp } from '@aws-amplify/ui-react';
import React, { useEffect, useState } from 'react';
import App from '../app';
import styles from './auth.module.css';
import { formFields } from './config';

type User = {
  id: string;
  username: string;
}

const AppWithAuth = () => {
  const [isAuthReady, setAuthReady] = useState(false);
  const [user, setUser] = useState<User | undefined>(undefined);

  useEffect(() => {
    Auth.currentUserInfo()
      .then(user => {
        setUser(user);
        setAuthReady(true);
      })
      .catch(() => {
        setUser(undefined);
        setAuthReady(true);
      });
  }, [])

  return isAuthReady ? (
    <AmplifyAuthenticator className={!user ? styles.container : ''}>
      <AmplifySignUp headerText="Sign up" slot="sign-up" usernameAlias="email" formFields={formFields}/>
      <AmplifySignIn headerText="My Custom Sign In Text" slot="sign-in" usernameAlias="email"/>
      <App/>
    </AmplifyAuthenticator>
  ) : null
};

export default AppWithAuth;
