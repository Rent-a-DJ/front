import React, {useContext, useState} from "react";
import {Card, CardContent, CardMedia, Container, Grid, Theme} from "@mui/material"
import {makeStyles} from "@mui/styles";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {ArticleType} from "../types/ArticleType";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "@material-ui/core/Button";
import CartContext from "../contextes/CartContext";
import useImages from "../hooks/useImages";
import {API_URL} from "../config";
import useLikes from "../hooks/useLikes";

const useStyles = makeStyles((theme: Theme) => ({
  oneItemGeneral: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    color: "Pink"
  },
  cardMedia: {
    paddingTop: "70%",
  },
  cardContent: {
    flexGrow: 1,
    paddingTop: "0 !important",
  },
  card: {
    height: "400px",
    textDecoration: "none",
  },
  detailsContainer: {
    display: "flex",
    flexDirection: "column",
    flexWrap: 'wrap',
    justifyContent: "space-between",
    height: "100%"
  },
  titleContainer: {
    fontWeight: "bold",
  },
  description: {
    fontSize: "13px",
    margin: 0,
    overflowY: "scroll",
    height: "100px"
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    marginTop: "1rem"
  },
  redButton: {
    backgroundColor: "red !important",
    color: "white !important",
  },
}));

type Props = {
  article: ArticleType;
}

const Article: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [liked, setLiked] = useState(false);
  const cartContextValue = useContext(CartContext);
  const {images} = useImages(props.article.id);
  const {likesNumber, setLikesNumber, isLiked, like} = useLikes(props.article.id);

  const likeClick = () => {
    setLiked(!liked);
    setLikesNumber(likesNumber ? likesNumber - 1 : likesNumber + 1);
  }
  const isInCart = cartContextValue.articles.find((element) => (element.id == props.article.id)) != undefined;

  const handleClick = () => {
    if (isInCart)
      cartContextValue.setArticles(cartContextValue.articles.filter((element) => (element.id != props.article.id)))
    else
      cartContextValue.setArticles([...cartContextValue.articles, props.article]);
  }

  return (
    <Container>
      <Grid container spacing={4}>
        <Card className={classes.card}>
          <Carousel
            dynamicHeight
            infiniteLoop
          >
            {
              images.map(image => {
                return (
                  <CardMedia component="div"
                             className={classes.cardMedia}
                             image={API_URL + "/image/" + image.id}
                             title="image"
                  />
                )
              })
            }
          </Carousel>
          <CardContent className={classes.cardContent}>
            <div className={classes.detailsContainer}>
              <div className={classes.titleContainer}>
                <span>{props.article.name}</span>
              </div>
              <p className={"scroll"}>{props.article.description}</p>
              <Grid container justifyContent="space-between" alignItems="flex-end">
                <div>
                  <span>Prix/jour :</span>
                  <span>{props.article.priceByDay}</span>
                </div>
                <div onClick={like}>
                  <span>{likesNumber}</span>
                  {
                    isLiked ? (
                      <FavoriteIcon className={classes.icon}/>
                    ) : (
                      <FavoriteBorderIcon className={classes.icon}/>
                    )
                  }
                </div>
                <div className={classes.buttonContainer}>
                  <Button variant="contained" className={isInCart ? classes.redButton : ""}
                          onClick={handleClick}>{isInCart ? "Enlever du panier" : "Ajouter au panier"}</Button>
                </div>
              </Grid>
            </div>
          </CardContent>

        </Card>
      </Grid>
    </Container>
  )

};

export default Article;
