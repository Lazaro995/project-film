import React, { useState } from "react";
import { ProfileProps } from "./profileInterface";
const Profile: React.FC<ProfileProps> = ({avatarImage}) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const options = [
        {label: "Ver Perfil", href: "/profile"}
    ]
}