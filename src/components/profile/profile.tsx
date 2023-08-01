import React, { useState } from "react";
import { ProfileProps } from "./profileInterface";
import { Button, Grid, Avatar } from "@nextui-org/react";
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@nextui-org/react";

const Profile: React.FC<ProfileProps> = ({ avatarImage }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const options = [
        { label: "Profile", href: "/profile" },
        { label: "User", href: "/user" },
        { label: "Friends", href: "/friends" },
        { label: "Settings", href: "/settings" }
        //Agregar mas opciones tanto se necesite
    ];

    const profileMenuToggle = (event: React.MouseEvent) => {
        event.preventDefault();
        setMenuOpen((prev) => !prev);
    };

    const profileOptionClick = (href: string) => () => {
        //Implementar navegacion para el href
        console.log("Navegando en el href");
        // Agrega aquí la lógica para la navegación a la ruta "href"
    };

    return (
        <Grid.Container justify="center" alignItems="center">
            <DropdownTrigger
                open={menuOpen}
                onClick={profileMenuToggle}
                arrow
                popoverStyle={{ minWidth: "150px" }}
                popoverBackground="white"
                popoverBorder="1px solid #eaeaea"
                trigger={
                    <Avatar src={avatarImage} scale={5} style={{ cursor: "pointer" }} />
                }
            >
                {options.map((option, index) => (
                    <Button
                        key={index}
                        color="primary"
                        auto
                        onClick={profileOptionClick(option.href)}
                    >
                        {option.label}
                    </Button>
                ))}
            </DropdownTrigger>
        </Grid.Container>
    );
};

export default Profile;
