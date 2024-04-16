import React, { useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Avatar, Menu, MenuItem, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import LoginModal from '../Login/LoginModal';


function AvatarMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
    handleClose();
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };


  return (
    <div className='Menu-avatar' style={{display:"table-column-group"}}>
      <Button
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <Avatar>
          <AccountCircle />
        </Avatar>
      </Button>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {!user ? (
          <>
            <LoginModal open={showLoginModal} onClose={handleCloseLoginModal} />
          </>
        ) : (
          <>
            <MenuItem onClick={() => {handleClose(); window.location.href='/profile';}}>Perfil</MenuItem>
            <MenuItem onClick={logout}>Salir</MenuItem>
          </>
        )}
      </Menu>
    </div>
  );
}

export default AvatarMenu;