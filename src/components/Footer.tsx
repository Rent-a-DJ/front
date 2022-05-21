import * as React from "react";
import {makeStyles} from "@mui/styles";
import {Link, Theme, Typography} from "@mui/material";


const useStyles = makeStyles((theme: Theme) => ({
    footer:{

    }
}));



function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary">
            {'Copyright ©'}
            <Link color="inherit" href="https://mui.com/">
                Rent a DJ
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function Contact() {
    return (
        <Typography variant="body2" color="text.secondary">
            <Link color="inherit" href="https://mui.com/">
                Contact us !
            </Link>{' '}
        </Typography>
    );
}



const Footer = () => {

    const classes = useStyles();
    return (

        <div>
           <footer className={classes.footer}>
               <Typography variant="h6" align="center" gutterBottom>
                    Rent a DJ
               </Typography>
               <Copyright/>
               <Contact/>
           </footer>
        </div>
    );
};


export default Footer;
