import logo from "../assets/logo.png"
import * as React from "react";
import {makeStyles} from "@mui/styles";
import {Button, IconButton, Stack, Theme} from "@mui/material";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
import LocalGroceryStoreSharpIcon from '@mui/icons-material/LocalGroceryStoreSharp';


const useStyles = makeStyles((theme: Theme) => ({

    logo:{
        size :"large",
        edge : "start",
    },
    shop: {
        fontSize : "large",
    },
    banner: {
        position : "relative",
        variant : "h6",
        backgroundColor : "green"
    },

    name :{
        variant : "H6",
        sx : {flexGrow: 1},
    },



}));


const Banner = () => {

        const classes = useStyles();
        return (

            <div>
                <CssBaseline/>
                <AppBar className={classes.banner}>
                    <Toolbar>
                        <IconButton className={classes.logo}>
                        <img src="/src/assets/logo.png" />
                        </IconButton>
                        <Typography className={classes.name}>
                            Rent A DJ
                        </Typography>
                        <Stack direction="row" spacing={2}>
                            <Button>Location</Button>
                            <Button>DJs</Button>
                            <Button>Connexion</Button>
                            <LocalGroceryStoreSharpIcon className={classes.shop} />
                            <SettingsApplicationsSharpIcon/>
                        </Stack>
                    </Toolbar>

                </AppBar>
            </div>
        );
    };


export default Banner
