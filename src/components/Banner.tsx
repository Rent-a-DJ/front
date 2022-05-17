import logo from "../assets/logo.png"
import * as React from "react";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
    banner:{
        padding: "5px 0",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        top: "0px",
        position: "sticky",
        zIndex: 100,
    },
    logo:{
        paddingLeft: "20px",
    },
    title:{
        width : "10",
    }

}));

const Banner = () => {
    const classes = useStyles();

    return(

        <div className={classes.banner}>
            <div className={classes.logo}>
            <img
                src ={"/assets/logo.png"}
                alt="hippocampe DJ"
                className="hippo-logo"
            />
            </div>
            <h1 className={classes.title}>Rent a DJ</h1>

            <div>

            </div>
        </div>
    );
};

export default Banner