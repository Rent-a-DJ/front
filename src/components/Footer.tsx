import * as React from "react";
import { makeStyles } from "@mui/styles";
import { Link, Theme, Typography } from "@mui/material";

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    position: "fixed",
    bottom: "0px",
    backgroundColor: "#1976d2",
    width: "100%",
    color: "white",
    display: "flex",
    justifyContent: "space-around",
  },
}));

function Copyright() {
  return (
    <Typography variant="body2">
      {"Copyright ©"}
      <Link style={{ color: "white" }} href="/">
        Rent a DJ
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Contact() {
  return (
    <Typography variant="body2">
      <Link style={{ color: "white" }} href="/contact">
        Nous contacter !
      </Link>{" "}
    </Typography>
  );
}

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <footer className={classes.footer}>
        <Typography variant="body2" align="center" gutterBottom>
          Rent a DJ
        </Typography>
        <Copyright />
        <Contact />
      </footer>
    </div>
  );
};

export default Footer;
