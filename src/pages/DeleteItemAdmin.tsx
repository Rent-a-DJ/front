import React, {useContext} from "react";
import {Container, Grid, Theme} from "@mui/material"
import {makeStyles} from "@mui/styles";
import useArticles from "../hooks/useArticles";
import DateRangeContext from "../contextes/DateRangeContext";
import ItemAdmin from "../components/ItemAdmin";

const useStyles = makeStyles((theme: Theme) => ({
    cardGrid: {
        padding: '20px 0'
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: "column",
        paddingTop: "50%",
        flexgrow: 1,
    },
    modal: {
        maxHeight: "80vh",
    },
    modalBody: {
        height: "100%",
        width: "100%",
    },
    modalForm: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%"
    },
    center: {
        marginTop: "3rem",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    title: {
        marginTop: "1rem",
        textAlign: "center",
    },
}));

const ArticlesPage: React.FC = () => {
    const {articles, fetchItems} = useArticles({name: "admin"});
    const dateRangeContextValue = useContext(DateRangeContext);
    const classes = useStyles();
    const showElements = dateRangeContextValue.dateRange[0] != null && dateRangeContextValue.dateRange[1] != null;

    return (
        <Container className={classes.cardGrid}>
            <h1 className={classes.title}>Supprimer un objet</h1>
            <Grid container spacing={4}>
                {
                    showElements && (
                        articles.map((article) => (
                            <Grid item key={article.id} xs={12} sm={6} md={3}>
                                <div className={classes.card}>
                                    <ItemAdmin article={article} fetch={fetchItems}/>
                                </div>
                            </Grid>
                        ))
                    )
                }
            </Grid>
        </Container>
    )
};


export default ArticlesPage;
