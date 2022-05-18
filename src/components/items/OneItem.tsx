import React from "react";
import {Card, CardContent, CardMedia, Container, Grid, Theme, Typography} from "@mui/material"
import { makeStyles } from "@mui/styles";

type Props = {
    image: string;
    name: string;
    category : string;
    id: string;
    isAvailable : boolean;
    price : string;
    rate : any;
}

const useStyles = makeStyles((theme:Theme) => ({
    oneItemGeneral:{
        alignItems: "center",
            display:"flex",
    },
    container: {
        maxWidth : "md",
    },
    card: {

    },
    cardMedia: {

    },
    cardContent: {

    }

}));

const OneItem : React.FC<Props> = (props) =>{
    const classes = useStyles();
    return (
        <div>
            <Container className={classes.container}>
                <Grid container spacing={4}>
                    <Grid item>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.cardMedia}
                            image={props.image}
                            title="Image"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5">
                                    cc
                                </Typography>
                                <Typography>

                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                </Grid>
            </Container>

        </div>
    )

};

export default  OneItem;
