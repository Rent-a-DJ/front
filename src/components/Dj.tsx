import React, {useContext, useState} from "react";
import {Button} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {ArticleType} from "../types/ArticleType";
import CartContext from "../contextes/CartContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {Carousel} from "react-responsive-carousel";
import {API_URL} from "../config";
import useImages from "../hooks/useImages";
import useLikes from "../hooks/useLikes";

const useStyles = makeStyles((theme) => ({
  djContainer: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
    height: "250px",
    marginTop: "3rem",
    backgroundColor: "white",
    boxShadow: "-2px -1px 23px 3px rgba(0,0,0,0.46)",
    padding: "1rem",
    borderRadius: "20px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  djImage: {
    width: "30%",
    borderRadius: "10px"
  },
  informationLabel: {
    fontWeight: "bold",
  },
  detailsContainer: {
    marginLeft: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  redButton: {
    backgroundColor: "red",
  },
  icon: {
    color: "Pink"
  }
}));

type Props = {
  dj: ArticleType;
}

const Dj: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [liked, setLiked] = useState(false);
  const {images} = useImages(props.dj.id);
  const cartContextValue = useContext(CartContext);
  const {likesNumber, setLikesNumber, countLikes} = useLikes(props.dj.id);

  const likeClick = () => {
    setLiked(!likesNumber);
    setLikesNumber(likesNumber ? likesNumber - 1 : likesNumber + 1);
  }

  const isInCart = cartContextValue.articles.find((element) => (element.id == props.dj.id)) != undefined;

  const handleClick = () => {
    if (isInCart)
      cartContextValue.setArticles(cartContextValue.articles.filter((element) => (element.id != props.dj.id)))
    else
      cartContextValue.setArticles([...cartContextValue.articles, props.dj]);
  }

  return (
    <div className={classes.djContainer}>
      <Carousel
        dynamicHeight
        infiniteLoop
        showThumbs={false}
      >
        {
          images.map((image) => {
            return <img src={API_URL + "/image/" + image.id} className={classes.djImage} alt={"dj photo"}/>
          })
        }
      </Carousel>
      <div className={classes.detailsContainer}>
        <div><p><span className={classes.informationLabel}>Description: </span> {props.dj.description}</p></div>

        <div><span className={classes.informationLabel}>Nom: </span><span>{props.dj.name}</span></div>
        <div><span className={classes.informationLabel}>Likes: </span>
          <span onClick={likeClick}>
            <span>{likesNumber}</span>
            {
              liked ? (
                <FavoriteIcon className={classes.icon}/>
              ) : (
                <FavoriteBorderIcon className={classes.icon}/>
              )
            }
          </span>
        </div>
        <div><span className={classes.informationLabel}>Prix par jour: </span><span>{props.dj.priceByDay}€</span></div>
        <div>
          <Button style={{width: "100%"}} variant="contained" className={isInCart ? classes.redButton : ""}
                  onClick={handleClick}>
            {isInCart ? "Enlever du panier" : "Ajouter au panier"}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Dj;
