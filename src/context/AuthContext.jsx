import React from 'react'


const AuthContext = React.createContext();

export const AuthProvider = ({ children }) =>{

  const auth = {};

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )

};
