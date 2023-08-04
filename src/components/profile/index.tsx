import React, { useState } from 'react';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { ProfileProps } from './profileInterface';
const Profile: React.FC<ProfileProps> = ({ userImage }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Avatar src={userImage} onClick={handleClick} />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => { /* Agrega aquí la lógica para redirigir a la ruta deseada */ handleClose(); }}>
          Ver perfil
        </MenuItem>
        <MenuItem onClick={() => { /* Agrega aquí la lógica para redirigir a la ruta deseada */ handleClose(); }}>
          Usuario
        </MenuItem>
        <MenuItem onClick={() => { /* Agrega aquí la lógica para redirigir a la ruta deseada */ handleClose(); }}>
          Amigos
        </MenuItem>
        {/* Agrega más opciones si lo deseas */}
      </Menu>
    </>
  );
};

export default Profile;



/*
Crear un componente nuevo: Se llamará Profile: Va a consistir en un avatar que recibe por PROP la imagen del usuario
y al clickearse se abre y mete 4 o 5 opciones. Ejemplo ver perfil, usuario, amigos, etc. Puedo usar next ui (idealmente (=> usalo))
Cada opcion debe mandarte a una ruta distinta (No importa el contenido)
*/