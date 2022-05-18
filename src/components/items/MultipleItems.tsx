import React from "react";
import {Card, CardContent, CardMedia, Container, Grid, Theme, Typography} from "@mui/material"
import { makeStyles } from "@mui/styles";
import OneItem from "./OneItem";


type Props = {
    list: any;
}


const useStyles = makeStyles((theme:Theme) => ({
    cardGrid: {
        padding : '20px 0'
    },
    card: {
    height: '100%',
        display: 'flex',
        flexDirection : 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexgrow: 1,
    }

}));

const MultipleItems : React.FC<Props> = (props) =>{
    const classes = useStyles();
    return (
        <>
        <main>
            <Container className={classes.cardGrid}>
                <Grid container spacing={4}>
                    {props.list.map((item : any) => (
                    <Grid item key={item} xs={12} sm={6} md={3}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image"
                            />
                            <CardContent className={classes.cardContent}>
                                    <OneItem
                                    image = {item.image}
                                    name = {item.name}
                                    category = {item.category}
                                    id = {item.id}
                                    isAvailable = {item.isAvailable}
                                    price = {item.price}
                                    rate = {item.rate}
                                    />
                            </CardContent>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </main>
        </>

    )

};


export default  MultipleItems;

