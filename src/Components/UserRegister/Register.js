import React from 'react';
import { TextField, Button } from '@mui/material';

function Register() {
  return (
    <form>
      <TextField label="Nombre" type="Nombre" fullWidth required />
      <TextField label="Apellido" type="Apellido" fullWidth required />
      <TextField label="Email" type="email" fullWidth required />
      <TextField label="Contraseña" type="password" fullWidth required />
      <TextField label="Confirmar Contraseña" type="password" fullWidth required />
      <Button type="submit" variant="contained" color="primary">
        Registrarse
      </Button>
    </form>
  );
}

export default Register;
