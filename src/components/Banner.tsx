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
import {useContext, useState} from "react";
import CartPage from "../pages/CartPage";
import {ArticleType} from "../types/ArticleType";
import cartContext from "../contextes/CartContext";


const useStyles = makeStyles((theme: Theme) => ({

  logo: {
    width: "50px",
    height: "auto",
  },
  linkUserStyle: {
    textDecoration: "none",
    color: "black",
  },
  linkBasketStyle: {
    textDecoration: "none",
    color: "black",
  },
  linkMenuStyle: {
    textDecoration: "none",
    color: "white",
  },
  banner: {
    variant: "h6",

  },

  name: {
    variant: "h6",
    sx: {flexGrow: 1},
  },
}));

const Banner = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const cartContextValue = useContext(cartContext);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const pages = ["Accueil", "Matériel", "Djs"];
  const userSettings = ["Inscription", "Connexion"];


  const profileLink = ["/signIn", "/logIn"];
  const navbarLink = ["/", "/articles", "/djs"];

  const classes = useStyles();
  return (
    <AppBar sx={{position: "relative !important"}} className={classes.banner}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/" className={classes.linkMenuStyle}>
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
              <Link to={navbarLink[index]} className={classes.linkMenuStyle}>
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
              <Badge badgeContent={cartContextValue.articles.length} color="success">
                <IconButton
                  onClick={() => setCartOpen(!cartOpen)}
                  aria-label="show shopping"
                  color="inherit"
                >
                  <CartPage isOpen={cartOpen}/>
                  <LocalGroceryStoreSharpIcon/>
                </IconButton>
              </Badge>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip title="Profil">
              <IconButton onClick={handleOpenUserMenu}>
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
              {userSettings.map((item, index) => (
                <Link to={profileLink[index]} className={classes.linkUserStyle}>
                  <MenuItem key={item} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{item}</Typography>
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
