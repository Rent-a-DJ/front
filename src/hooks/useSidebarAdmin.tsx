import React from 'react'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveIcon from '@mui/icons-material/Remove';
import ChatIcon from '@mui/icons-material/Chat';
import {useEffect, useState} from "react";
import {SidebarAdminType} from "../types/SidebarAdminType";

const useSidebarAdmin = () => {
    const [sidebarAdmin, setSidebarAdmin] = useState<SidebarAdminType[]>([]);

    const fetchSidebar = () => {
        const sidebarData = [
            {
                title: "Créer un article",
                icon: <AddBoxIcon/>,
                link: "/admin/createitem"
            },
            {
                title: "Supprimer un article",
                icon: <RemoveIcon/>,
                link: "/admin/deleteitem"
            },
            {
                title: "Messages",
                icon: <ChatIcon/>,
                link: "/admin/messages"
            },
        ];
        setSidebarAdmin(sidebarData);
    }

    useEffect(() => {
        fetchSidebar();
    }, []);

    return {sidebarAdmin}
}

export default useSidebarAdmin;
