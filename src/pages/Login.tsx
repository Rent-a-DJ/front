import React, {FormEvent, useState} from "react";
import { Grid } from "@mui/material";
import { Paper, TextField, Button, Theme } from "@material-ui/core";
import {makeStyles} from "@mui/styles";
import logo from "../assets/logo.png";
import useLogin from "../hooks/useLogin";
import {useNavigate} from "react-router-dom";


const useStyles = makeStyles((theme: Theme) => ({
    fontLogo: {
        position: "fixed",
        left: 0,
        top: 0,
        width: "100%",
    },
}));

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {login} = useLogin();
    const navigate = useNavigate()
    const classes = useStyles();

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        login(email, password).then(r => {if (r) navigate("/")});
    }

    return (
        <div>
            <img src={logo} className={classes.fontLogo} alt="Login" />
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
                <Grid
                    container
                    style={{
                        height: "100vh",
                    }}
                    className={"login"}
                >
                    <Grid
                        item
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs={10} sm={5} md={3}>
                            <Paper
                                style={{
                                    padding: "2vh",
                                    opacity: "0.9",
                                }}
                            >
                                <form onSubmit={onSubmit}>
                                    <Grid
                                        container
                                        alignItems="center"
                                        direction="column"
                                        spacing={2}
                                    >
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
                                                    Connexion
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Login;
