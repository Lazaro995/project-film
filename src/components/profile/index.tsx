import React from "react";
import { Avatar, Dropdown, DropdownItem } from "@nextui-org/react";
import { ProfileProps } from "./profileInterface";

const Profile: React.FC<ProfileProps> = ({ avatarImage }) => {
  const options = [
    { label: "Ver Perfil", href: "/profile" },
    { label: "Usuario", href: "/user" },
    { label: "Amigos", href: "/friends" },
    { label: "Configuración", href: "/settings" },
  ];

  const profileOptionClick = (href: string) => () => {
//Poner la logica de la ruta
    console.log("Navegacion en:", href);
  };

  return (
    <Dropdown
      overlay={(
        <>
          {options.map((option, index) => (
            <DropdownItem
              key={index}
              color="primary"
              onClick={profileOptionClick(option.href)}
            >
              {option.label}
            </DropdownItem>
          ))}
        </>
      )}
    >
      <Avatar src={avatarImage} scale={5} style={{ cursor: "pointer" }} />
    </Dropdown>
  );
};

export default Profile;
/*
Crear un componente nuevo: Se llamará Profile: Va a consistir en un avatar que recibe por PROP la imagen del usuario
y al clickearse se abre y mete 4 o 5 opciones. Ejemplo ver perfil, usuario, amigos, etc. Puedo usar next ui (idealmente (=> usalo))
Cada opcion debe mandarte a una ruta distinta (No importa el contenido)
*/