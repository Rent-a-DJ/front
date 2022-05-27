import React, {useState} from "react";
import {Card, CardContent, CardMedia, Container, Grid, Theme} from "@mui/material"
import {makeStyles} from "@mui/styles";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {ArticleType} from "../types/ArticleType";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
    height: "350px",
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
  }
}));

type Props = {
  article: ArticleType;
  setSelectedArticle: (article: ArticleType) => void;
}

const Article: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const likeClick = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
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
              props.article.images.map(image => {
                return (
                  <CardMedia component="div"
                             onClick={() => props.setSelectedArticle(props.article)}
                             className={classes.cardMedia}
                             image={image}
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
              <p className={"scroll"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque dapibus metus semper diam vulputate, quis fringilla est
                Pellentesque dapibus metus semper diam vulputate, quis fringilla est
                Pellentesque dapibus metus semper diam vulputate, quis fringilla est
              </p>
              <Grid container justifyContent="space-between" alignItems="flex-end">
                <div>
                  <span>Prix/jour :</span>
                  <span>{props.article.price}</span>
                </div>
                <div onClick={likeClick}>
                  <span>{likes}</span>
                  {
                    liked ? (
                      <FavoriteIcon className={classes.icon}/>
                    ) : (
                      <FavoriteBorderIcon className={classes.icon}/>
                    )
                  }
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
