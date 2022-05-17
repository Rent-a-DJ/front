import React, { useState } from "react";
import {Grid, TextField} from "@mui/material";
import img from "assets/logo.png"

interface Props{
    onSubmit : ()=> void;
}
/*
const loginForm:React.FC<Props> = () => {
    return(
        <TextField/>;
    )
}

const Login = () => {
    const [userMail, setUserMail] = useState("");
    const [password, setPassword] = useState("");


    const login = (username: string, password: string) => {
        console.log("/! Logged in as ", username, password);
    };

    return(
        <div>
        <img src={img} id="logo" alt="Logo Rent-A-Dj" />
        <div style={{position: "absolute", top: 0, left: 0, width: "100%"}}>
            <Grid

    </div>);
};

export default Login;

        */