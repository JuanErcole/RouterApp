import React from 'react'
import { useState } from 'react';


export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) =>{

  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser(username);
  }

  const logout = () => {
    setUser(null);
  }

  const auth = {
    user,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )

};
