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
  Theme,
  Tooltip,
} from "@mui/material";
import {
  Typography,
  AppBar,
  Toolbar,
  Container,
} from "@mui/material";
import LocalGroceryStoreSharpIcon from "@mui/icons-material/LocalGroceryStoreSharp";
import logo from "../assets/logo.png";
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import CartPage from "../pages/CartPage";
import cartContext from "../contextes/CartContext";
import UserContext from "../contextes/UserContext";
import {toast} from "react-toastify";


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
  profileContainer: {
    padding: "1rem"
  },
  label: {
    fontWeight: "bold"
  }

}));

const Banner = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const cartContextValue = useContext(cartContext);
  const userContextValue = useContext(UserContext);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const handleLogout = () => {
    handleCloseUserMenu()
    localStorage.removeItem("token");
    userContextValue.setUser(null);
    toast.success("Vous êtes déconnecté");
  }

  const pages = ["Accueil", "Matériel", "Djs"];
  const navbarLink = ["/", "/articles", "/djs"];

  const UserSpace = () => {
    if (userContextValue.user != null) {
      const user = userContextValue.user;
      return (
        <div className={classes.profileContainer}>
          <div>
            <span className={classes.label}>Nom: </span>
            <span>{user.lastName}</span>
          </div>
          <div>
            <span className={classes.label}>Prénom: </span>
            <span>{user.firstName}</span>
          </div>
          <div>
            <span className={classes.label}>Solde: </span>
            <span>{user.coins} €</span>
          </div>
          {
            userContextValue.user.isAdmin && (
              <Link to={"/admin/createitem"} className={classes.linkUserStyle}>
                <MenuItem key={"admin"} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Administration</Typography>
                </MenuItem>
              </Link>
            )
          }
          <MenuItem key={"logout"} onClick={handleLogout}>
            <Typography textAlign="center">Se déconnecter</Typography>
          </MenuItem>
        </div>
      )
    }

    return (
      <>
        <Link to={"/logIn"} className={classes.linkUserStyle}>
          <MenuItem key={"Connexion"} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Connexion</Typography>
          </MenuItem>
        </Link>
        <Link to={"/signIn"} className={classes.linkUserStyle}>
          <MenuItem key={"signIn"} onClick={handleCloseUserMenu}>
            <Typography textAlign="center">S'inscrire</Typography>
          </MenuItem>
        </Link>
      </>
    )

  }


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
            <Badge badgeContent={cartContextValue.articles.length} color="success">
              <IconButton
                onClick={() => setCartOpen(!cartOpen && cartContextValue.articles.length != 0)}
                aria-label="show shopping"
                color="inherit"
              >
                <Tooltip title="Panier">
                  <LocalGroceryStoreSharpIcon/>
                </Tooltip>
              </IconButton>
              <CartPage isOpen={cartOpen} setIsOpen={setCartOpen}/>
            </Badge>
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
              <UserSpace/>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
    ;
};

export default Banner;
