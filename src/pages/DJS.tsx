import * as React from "react";
import {makeStyles} from "@mui/styles";
import Dj from "../components/Dj";
import useArticles from "../hooks/useArticles";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "1rem",
    textAlign: "center",
  },
  djsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  pageContainer: {
    height: "100%",
    backgroundColor: "whitesmoke"
  },

}));

const DJS = () => {
  const classes = useStyles();
  const {articles} = useArticles({name: "dj"});
  return (
    <div className={classes.pageContainer}>
      <h1 className={classes.title}>Louer un DJ</h1>
      <div className={classes.djsContainer}>
        {
          articles.map((dj) => <Dj dj={dj}/>)
        }
      </div>
    </div>
  );
};
export default DJS;
