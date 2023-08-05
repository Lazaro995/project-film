import React, { useState } from 'react';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { ProfileProps } from './profileInterface';
import { useNavigate } from "react-router-dom";
import { NAVIGATE_CONTENT } from './constant';
const Profile: React.FC<ProfileProps> = ({ userImage }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
const navigate_totals = NAVIGATE_CONTENT
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
        <MenuItem onClick={() => { navigate_totals.map(); handleClose(); }}>

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



