import React from 'react'
import {makeStyles} from "@mui/styles";
import {SidebarData} from "./SidebarData";


const useStyles = makeStyles((theme) => ({
    sidebar: {
        height: "100%",
        width: "250px",
        backgroundColor: "blueviolet",
    },
    sidebarList: {
        height: "auto",
        width: "100%",
        padding: 0,
    },
    row: {
        width: "100%",
        height: "60px",
        listStyleType: "none",
        margin: 0,
        display: "flex",
        flexDirection: "row",
        color: "white",
        justifyContent: "center",
        alignItems: "center",
        '&:hover': {
            background: "#f00",
        },
    },
    icon: {
        flex: "30%",
        display: "grid",
        placeItems: "center",
    },
    title: {
        flex: "70%",
    },
    }));

function SidebarAdmin() {
    const classes = useStyles();

    return (
        <div className={classes.sidebar}>
            <ul className={classes.sidebarList}>
                {SidebarData.map((value, key) => {
                    return (
                        <li
                            key={key}
                            className={classes.row}
                            onClick={() => {
                                window.location.pathname = value.link
                            }}>
                            {" "}
                            <div className={classes.icon}>{value.icon}</div>
                            {" "}
                            <div className={classes.title}>
                                {value.title}
                            </div>
                        </li>
                    )

                })}
            </ul>
        </div>
    );
}


export default SidebarAdmin;
