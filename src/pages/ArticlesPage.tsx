import React, {useContext, useState} from "react";
import {Container, Grid, Theme} from "@mui/material"
import {makeStyles} from "@mui/styles";
import useArticles from "../hooks/useArticles";
import Article from "../components/Article";
import DateRangeContext from "../contextes/DateRangeContext";
import CategoriesContext from "../contextes/CategoriesContext";
import {FilterType} from "../types/ArticleType";

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
  categoriesContainer: {
    marginTop: "3rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%"
  },
  categoryButton: {
    cursor: "pointer",
    backgroundColor: "#878787",
    padding: "0.5rem",
    marginLeft: "1rem",
    marginRight: "1rem",
    borderRadius: "10px",
    color: "white",
    '&:hover': {
      backgroundColor: "grey",
    }
  }

}));

const ArticlesPage: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>({name: "all"});
  const {articles} = useArticles(filter);
  const dateRangeContextValue = useContext(DateRangeContext);
  const categoriesContextValue = useContext(CategoriesContext);
  const classes = useStyles();

  const showElements = dateRangeContextValue.dateRange[0] != null && dateRangeContextValue.dateRange[1] != null;


  const CategoriesFilter = () => {
    return (
      <div className={classes.categoriesContainer}>
        <div key={"all"} className={classes.categoryButton} onClick={() => setFilter({name: "all"})}>
          tout
        </div>
        {
          categoriesContextValue.categories.map((category) => {
            if (category.name == "dj")
              return;
            return (
              <div key={category.id} className={classes.categoryButton} onClick={() => setFilter({name: category.name})}>
                {category.name}
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <div className={"fullHeightPercent"}>
      <CategoriesFilter/>
      <Container className={classes.cardGrid}>
        <Grid container spacing={4}>
          {
            showElements && (
              articles.map((article) => (
                <Grid item key={article.id} xs={12} sm={6} md={3}>
                  <div className={classes.card}>
                    <Article article={article}/>
                  </div>
                </Grid>
              ))
            )
          }
        </Grid>
      </Container>
    </div>
  )
};


export default ArticlesPage;

