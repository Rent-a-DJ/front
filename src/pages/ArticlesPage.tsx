import React, {useEffect, useState} from "react";
import {Button, Container, FormControl, FormHelperText, Grid, Input, InputLabel, Theme} from "@mui/material"
import {makeStyles} from "@mui/styles";
import {ArticleType} from "../types/ArticleType";
import useArticles from "../hooks/useArticles";
import Article from "../components/Article";
import Modal from 'react-modal';
import ReservationSelector from "../components/ReservationSelector";

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
  }
}));

const ArticlesPage: React.FC = () => {
  const {articles} = useArticles();
  const [selectedArticle, setSelectedArticle] = useState<ArticleType>()
  const [modalIsOpen, setIsOpenModal] = useState(false)
  const [rangeDate, setRangeDate] = useState([null, null])
  const classes = useStyles();

  useEffect(() => {
    if (selectedArticle)
      setIsOpenModal(true);

  }, [selectedArticle])

  const BuyArticleModal: React.FC = () => {
    return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpenModal(false)}
        contentLabel="Buy modal"
        ariaHideApp={true}
      >
        <div className={classes.modalBody}>
          <ReservationSelector/>
          <span>{rangeDate[0]}</span>
          <Button variant="contained">Date de début</Button>
          <ReservationSelector/>

          <span>{rangeDate[1]}</span>
          <Button variant="contained">Date de fin</Button>

        </div>
      </Modal>
    )
  }


  return (
    <Container className={classes.cardGrid}>
      <BuyArticleModal/>
      <Grid container spacing={4}>
        {articles.map((article) => (
          <Grid item key={article.id} xs={12} sm={6} md={3}>
            <div className={classes.card}>
              {
                !modalIsOpen && (
                  <Article
                    article={article}
                    setSelectedArticle={setSelectedArticle}
                  />
                )
              }
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
};


export default ArticlesPage;

