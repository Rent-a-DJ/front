import * as React from "react";
import {makeStyles} from "@mui/styles";
import {Theme, Typography} from "@mui/material";


const useStyles = makeStyles((theme: Theme) => ({
    footer:{

    }




}));


const Footer = () => {

    const classes = useStyles();
    return (

        <div>
           <footer className={classes.footer}>
               <Typography variant="h6" align="center" gutterBottom>
                    Rent a DJ
               </Typography>
               <Typography variant="subtitle1" align="center">
                   Contact us !
               </Typography>
           </footer>
        </div>
    );
};


export default Footer;
