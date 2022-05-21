import * as React from "react";
import {makeStyles} from "@mui/styles";
import {Avatar, Badge, Box, Button, IconButton, Menu, MenuItem, Stack, Theme, Tooltip} from "@mui/material";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from "@mui/material";
import SettingsApplicationsSharpIcon from '@mui/icons-material/SettingsApplicationsSharp';
import LocalGroceryStoreSharpIcon from '@mui/icons-material/LocalGroceryStoreSharp';
import logo from "../assets/logo.png";


const pages=["Accueil","Matériel", "Djs"];
const userSettings=["Profil", "Déconnexion"];
const basket=["Panier", "Commander maintenant"]

const useStyles = makeStyles((theme: Theme) => ({

    shop: {
        fontSize : "large",
    },
    logo: {
        width: "50px",
        height: "auto",
    },

    banner: {
        position : "static",
        variant : "h6",
        backgroundColor : "green"
    },

    name :{
        variant : "H6",
        sx : {flexGrow: 1},
    },
}));


const Banner = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const [anchorElBasket, setAnchorElBasket] = React.useState<null | HTMLElement>(null);



    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleOpenBasketMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElBasket(event.currentTarget);
    };



    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleCloseBasketMenu = () => {
        setAnchorElUser(null);
    };

    const [itemNumber, setItemNumber] =
        React.useState<null | HTMLElement>(null);

    const [userImg, setUserImg] =
        React.useState<null | HTMLElement>(null);

        const classes = useStyles();
        return (

                <AppBar className={classes.banner}>
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                            <IconButton sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}>
                                <img src= {logo} className={classes.logo}/>
                            </IconButton>
                            <Typography className={classes.name}>
                                Rent a DJ
                            </Typography>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Button
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>
                                ))}
                            </Box>
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="userAvatar" src= "https://source.unsplash.com/random" />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {userSettings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Panier">
                                    <IconButton size="large" aria-label="show shopping" color="inherit">
                                        <LocalGroceryStoreSharpIcon className={classes.shop} />
                                        <Badge badgeContent={itemNumber} color="error">
                                        </Badge>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElBasket}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElBasket)}
                                    onClose={handleCloseBasketMenu}
                                >
                                    {basket.map((item) => (
                                        <MenuItem key={item} onClick={handleCloseBasketMenu}>
                                            <Typography textAlign="center">{item}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                    </Toolbar>
                        </Container>
                </AppBar>

        );
    };


export default Banner;
