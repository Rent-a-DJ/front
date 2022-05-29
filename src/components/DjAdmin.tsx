import React, {useContext, useState} from "react";
import {Button} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {ArticleType} from "../types/ArticleType";
import CartContext from "../contextes/CartContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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

const DjAdmin: React.FC<Props> = (props) => {
    const classes = useStyles();
    const [likes, setLikes] = useState(props.dj.rate);
    const [liked, setLiked] = useState(false);
    const DjAdminContextValue = useContext(CartContext);

    const likeClick = () => {
        setLiked(!liked);
        setLikes(liked ? likes - 1 : likes + 1);
    }

    const isDeleted = DjAdminContextValue.articles.find((element) => (element.id == props.dj.id)) != undefined;

    const handleClick = () => {
        if (isDeleted)
            DjAdminContextValue.setArticles(DjAdminContextValue.articles.filter((element) => (element.id != props.dj.id)))
        else
            DjAdminContextValue.setArticles([...DjAdminContextValue.articles, props.dj]);
    }

    return (
        <div className={classes.djContainer}>
            <img src={props.dj.images[0]} className={classes.djImage} alt={"dj photo"}/>
            <div className={classes.detailsContainer}>
                <div><p><span className={classes.informationLabel}>Description: </span> {props.dj.description}</p></div>

                <div><span className={classes.informationLabel}>Nom: </span><span>{props.dj.name}</span></div>
                <div><span className={classes.informationLabel}>Likes: </span>
                    <span onClick={likeClick}>
            <span>{likes}</span>
                        {
                            liked ? (
                                <FavoriteIcon className={classes.icon}/>
                            ) : (
                                <FavoriteBorderIcon className={classes.icon}/>
                            )
                        }
          </span>
                </div>
                <div><span className={classes.informationLabel}>Prix par jour: </span><span>{props.dj.price}€</span></div>
                <div>
                    <Button style={{width: "100%"}} variant="contained" className={isDeleted ? classes.redButton : ""}
                            onClick={handleClick}>
                        {isDeleted ? "Annuler" : "Supprimer ce DJ"}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DjAdmin;
