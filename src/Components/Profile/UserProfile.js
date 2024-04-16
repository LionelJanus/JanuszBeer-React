import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

function UserProfile() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h1>Perfil del Usuario</h1>
      <p>Nombre: {user?.firstName}</p>
      <p>Apellido: {user?.lastName}</p>
      <p>Email: {user?.email}</p>
      <p>Órdenes de Compra: {/* Renderizar órdenes aquí */}</p>
    </div>
  );
}

export default UserProfile;
