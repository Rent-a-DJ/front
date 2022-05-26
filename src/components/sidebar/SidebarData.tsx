import React from 'react'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import AddBoxIcon from '@mui/icons-material/AddBox';
import RemoveIcon from '@mui/icons-material/Remove';
import ChatIcon from '@mui/icons-material/Chat';

export const SidebarData = [
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
]
