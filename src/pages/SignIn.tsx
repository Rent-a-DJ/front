import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {makeStyles} from "@mui/styles";


const theme = createTheme();

import logo from "../assets/logo.png";
import {Paper, Theme} from "@mui/material";
import {useState} from "react";


const useStyles = makeStyles((theme: Theme) => ({
    logo: {
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
    },
}));


const SignIn = () => {

    const classes = useStyles();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <img src={logo} className={classes.logo} alt="Login"/>
            <div style={{position: "absolute", top: 0, left: 0, width: "100%"}}>
                <Grid
                    container
                    style={{
                        height: "100vh",
                    }}
                    className={"login"}
                >
                    <Grid item xs={10} sm={5} md={3}>
                        <Paper
                            style={{
                                padding: "2vh",
                                opacity: "0.9",
                            }}
                        >
                            <form onSubmit={(e) => e.preventDefault()}>
                                <Grid
                                    container
                                    alignItems="center"
                                    direction="column"
                                    spacing={2}
                                >
                                    <Grid item container>
                                        <TextField
                                            id="lastName"
                                            label="Nom"
                                            variant="outlined"
                                            fullWidth
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item container>
                                        <TextField
                                            id="firstName"
                                            label="Prénom"
                                            variant="outlined"
                                            fullWidth
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item container>
                                        <TextField
                                            id="username"
                                            label="Adresse e-mail ou identifiant"
                                            variant="outlined"
                                            fullWidth
                                            autoFocus
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item container>
                                        <TextField
                                            id="password"
                                            label="Mot de passe"
                                            variant="outlined"
                                            fullWidth
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </Grid>
                                    <Grid item container direction="row-reverse" spacing={2}>
                                        <Grid item container>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                type="submit"
                                                fullWidth
                                            >
                                                Créer mon compte
                                            </Button>
                                            <Grid container justifyContent="flex-end">
                                                <Grid item>
                                                    <Link href="#" variant="body2">
                                                        Vous avez déja un compte ? Connectez vous
                                                    </Link>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default SignIn;
