import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const adminList = ['JuanCito', 'Roro']

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) =>{

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const login = (username) => {

    const isAdmin = adminList.find(p => p === username);

    setUser({username, isAdmin});
    navigate('/');
  }

  const logout = () => {
    setUser(null);
    navigate('/login');
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
