import * as React from "react";
import {makeStyles} from "@mui/styles";
import {
    Avatar,
    Badge,
    Box,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Theme,
    Tooltip,
} from "@mui/material";
import {
    Typography,
    AppBar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    CssBaseline,
    Grid,
    Toolbar,
    Container,
} from "@mui/material";
import SettingsApplicationsSharpIcon from "@mui/icons-material/SettingsApplicationsSharp";
import LocalGroceryStoreSharpIcon from "@mui/icons-material/LocalGroceryStoreSharp";
import logo from "../assets/logo.png";
import {Link, NavLink} from "react-router-dom";

const basket = ["Panier", "Commander maintenant"];
const pages = ["Accueil", "Matériel", "Djs"];
const userSettings = ["Inscription", "Connexion"];


const basketLink = ["/basket", "/orderNow"];
const profileLink = ["/signIn", "/logIn"];
const navbarLink = ["/", "/items", "/djs"];

const useStyles = makeStyles((theme: Theme) => ({
    shop: {
        fontSize: "large",
    },
    logo: {
        width: "50px",
        height: "auto",
    },
    linkStyle: {
        textDecoration: "none",
        color: "white",
    },
    menuStyle: {
        textDecoration: "none",
        color: "black",
    },
    banner: {
        variant: "h6",
    },

    name: {
        variant: "H6",
        sx: {flexGrow: 1},
    },
}));

const Banner = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
        null
    );
    const [anchorElBasket, setAnchorElBasket] =
        React.useState<null | HTMLElement>(null);

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
        setAnchorElBasket(null);
    };

    const [itemNumber, setItemNumber] = React.useState<null | HTMLElement>(null);



    const [userImg, setUserImg] = React.useState<null | HTMLElement>(null);

    const classes = useStyles();
    return (
        <AppBar sx={{position: "relative !important"}} className={classes.banner}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link to="/" className={classes.linkStyle}>
                        <IconButton sx={{display: {xs: "flex", md: "none"}, mr: 1}}>
                            <img src={logo} alt="logo" className={classes.logo}/>
                        </IconButton>
                        <Typography className={classes.name}>Rent a DJ</Typography>
                    </Link>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {xs: "none", md: "flex"},
                            justifyContent: "center",
                        }}
                    >
                        {pages.map((page, index) => (
                            <Link to={navbarLink[index]} className={classes.linkStyle}>
                            <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{my: 2, color: "white", display: "block"}}
                                >
                                    {page}
                                </Button>
                            </Link>

                        ))}
                    </Box>
                    <Box>
                        <Tooltip title="Panier">
                            <IconButton
                                onClick={handleOpenUserMenu}
                                size="large"
                                aria-label="show shopping"
                                color="inherit"
                            >
                                <LocalGroceryStoreSharpIcon className={classes.shop}/>
                                <Badge badgeContent={itemNumber} color="error"></Badge>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: "45px"}}
                            id="menu-appbar"
                            anchorEl={anchorElBasket}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElBasket)}
                            onClose={handleCloseBasketMenu}
                        >
                            {basket.map((item, index) => (
                                <Link to={basketLink[index]} className={classes.menuStyle}>
                                    <MenuItem key={item} onClick={handleCloseBasketMenu}>
                                        <Typography textAlign="center">{item}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <Box>
                        <Tooltip title="Profil">
                            <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                <Avatar
                                    alt="userAvatar"
                                    src="https://source.unsplash.com/random"
                                />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{mt: "45px"}}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "right",
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {userSettings.map((setting, index) => (
                                <Link to={profileLink[index]} className={classes.menuStyle}>
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
        ;
};

export default Banner;
