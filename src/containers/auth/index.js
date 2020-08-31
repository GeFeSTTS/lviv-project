import React, { useEffect, useState } from "react";
import Loader from 'react-loader-spinner';
import app from "../../firebase-config";
import './index.css';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setTimeout(() => setPending(false), 1000)
    });
  }, []);

  if(pending){
    return (
      <div className="preloader-container">
        <Loader
          type="TailSpin"
          color="#F05929"
          height={100}
          width={100}
          timeout={5000}
        />
      </div>      
    )
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
    );
};
  