import React, { useState, useCallback, useContext } from 'react';
import { withRouter, Redirect } from "react-router";
import app from '../../firebase-config';
import { AuthContext } from '../auth';
import './index.css';

function SignIn({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email, password);
        history.push("/admin-panel");
      } catch (error) {
        alert(error);
      }
    },
    [history, email, password]
  );

  const { currentUser } = useContext(AuthContext);


  if (currentUser) {
    return <Redirect to="/admin-panel" />;
  }

  const onChangeHandler = (event) => {
    const {name, value} = event.currentTarget;
  
    if(name === 'userEmail') {
        setEmail(value);
    }
    else if(name === 'userPassword'){
      setPassword(value);
    }
};

  return (
    <>
    <form className="signin-form">
      <label htmlFor="userEmail" className="block">
        Email:
      </label>
      <input
        type="email"
        className="email"
        name="userEmail"
        value = {email}
        placeholder="E.g: faruq123@gmail.com"
        id="userEmail"
        onChange = {(event) => onChangeHandler(event)}
      />
      <label htmlFor="userPassword" className="block">
        Password:
      </label>
      <input
        type="password"
        className="password"
        name="userPassword"
        value = {password}
        placeholder="Your Password"
        id="userPassword"
        onChange = {(event) => onChangeHandler(event)}
      />
      <button className="form-button" onClick = {handleLogin}>
        Sign in
      </button>
    </form>
  </>
  );
}

export default withRouter(SignIn);