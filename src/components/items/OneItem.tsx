import React, {useEffect, useState} from "react";
import {Card, CardContent, CardMedia, Container, Grid, Theme, Typography} from "@mui/material"
import {makeStyles} from "@mui/styles";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Link} from "react-router-dom";

export type CartItemType = {
    image: string;
    name: string;
    category: string;
    id: number;
    isAvailable: boolean;
    price: number;
    rate: number;
    amount:number;
}


const useStyles = makeStyles((theme: Theme) => ({
    oneItemGeneral: {
        display: "flex",
        alignItems: "center",
    },
    grid: {
        flexWrap: 'wrap',
    },
    icon: {
        color: "Pink"
    },
    cardMedia: {
        paddingTop: "70%",
    },
    cardContent: {
        flexGrow: 1,
    },
    card: {
        height: "350px",
        textDecoration: "none",

    }
}));


const OneItem: React.FC<CartItemType> = (props) => {
    const classes = useStyles();


    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);
    useEffect(() => {
        setLikes(likes => likes + (liked ? 1 : -1));
    }, [liked]);

    return (
        <Container>
            <Grid container spacing={4}>
                <Card className={classes.card}

                >
                    <CardMedia component={Link}
                               to="/allitems/item"
                               className={classes.cardMedia}
                               image={props.image}
                               title="image"
                    />
                    <CardContent className={classes.cardContent}>
                        <Grid className={classes.grid}>
                            <Grid justifyContent="flex-start" alignItems="flex-start">
                                <Typography gutterBottom variant="h6" component="div">
                                    {props.name}
                                </Typography>
                            </Grid>
                            <Grid container justifyContent="flex-end" alignItems="flex-end">
                                Prix/jour : {props.price}
                            </Grid>
                            <Grid container justifyContent="flex-end">
                                <div onClick={() => setLiked((prevState) => !prevState)}>
                                    {likes} {liked ? <FavoriteIcon className={classes.icon}/> :
                                    <FavoriteBorderIcon className={classes.icon}/>}
                                </div>
                            </Grid>
                        </Grid>


                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque dapibus metus semper diam vulputate, quis fringilla est
                            viverra. Fusce mi lacus, luctus id nisl quis, lacinia efficitur
                            ligula. Phasellus ullamcorper tristique erat, vel suscipit felis
                            porta at. Nam aliquet mattis orci, vehicula pharetra sem egestas ac.
                        </Typography>
                    </CardContent>

                </Card>
            </Grid>
        </Container>
    )

};

export default OneItem;
