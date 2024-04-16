import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // Aquí implementarías el login y asegurarte de incluir los nuevos datos
    const userData = {
      email: email,
      firstName: "NombreDeUsuario",
      lastName: "ApellidoDeUsuario"
    };
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};
