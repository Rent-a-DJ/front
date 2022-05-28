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
                title: "Create item",
                icon: <AddBoxIcon/>,
                link: "/createitem"
            },
            {
                title: "Delete item",
                icon: <RemoveIcon/>,
                link: "/deleteitem"
            },
            {
                title: "Add a DJ",
                icon: <PersonAddAlt1Icon/>,
                link: "/addadj"
            },
            {
                title: "Delete a DJ",
                icon: <PersonRemoveIcon/>,
                link: "/deleteadj"
            },
            {
                title: "Messages",
                icon: <ChatIcon/>,
                link: "/messages"
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
