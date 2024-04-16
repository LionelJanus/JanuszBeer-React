import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle,  Typography, Link  } from '@mui/material';
import { useNavigate } from 'react-router-dom'; 
import { Link as RouterLink } from 'react-router-dom';

function LoginModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleLogin = () => {
    login(email, password);
    handleClose();
  };

  const handleGoToRegister = () => {
    handleClose(); // Cierra el modal de login
    navigate('/register'); // Navega a la ruta de registro
  };


  return (
    <div>
      <Button onClick={handleOpen}>Ingresar</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Iniciar Sesión</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="dense"
            id="password"
            label="Contraseña"
            type="password"
            fullWidth
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleLogin}>Ingresar</Button>
          <Typography variant="body2" style={{ flex: '1 1 auto', textAlign: 'center' }}>
            ¿No tienes cuenta?
            <RouterLink to="/register" style={{ textDecoration: 'none' }}>
            <Button color="primary">Regístrate aquí</Button>
          </RouterLink>
          </Typography>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default LoginModal;
