import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import {makeStyles} from "@mui/styles";


import logo from "../assets/logo.png";
import {Paper, Theme} from "@mui/material";
import {FormEvent, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import useLogin from "../hooks/useLogin";

const useStyles = makeStyles((theme: Theme) => ({
  fontLogo: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
  },
  linkStyle: {
    textDecoration: "none",
    variant: "body2",
  }
}));

const SignIn = () => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {register} = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password
    }
    const isDone = await register(user)
    if (isDone)
      navigate("/logIn");
  }


  return (
    <div>
      <img src={logo} className={classes.fontLogo} alt="Login"/>
      <div style={{position: "relative", top: "55%", left: "35%"}}>
        <Grid container className={"login"}>
          <Grid item xs={10} sm={5} md={3}>
            <Paper
              style={{
                padding: "3vh",
                opacity: "0.9",
              }}
            >
              <form onSubmit={handleSubmit}>
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
                      id="email"
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
                      <Link to={"/login"} className={classes.linkStyle}>
                        <Grid container justifyContent="flex-end">
                          <Grid item>
                            Vous avez déja un compte ? Connectez vous
                          </Grid>
                        </Grid>
                      </Link>
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
};

export default SignIn;
