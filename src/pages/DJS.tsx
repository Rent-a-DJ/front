import * as React from "react";
import {makeStyles} from "@mui/styles";
import useDjs from "../hooks/useDjs";
import Dj from "../components/Dj";

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
  const {djs} = useDjs();
  return (
    <div className={classes.pageContainer}>
      <h1 className={classes.title}>Louer un DJ</h1>
      <div className={classes.djsContainer}>
        {
          djs.map((dj) => <Dj dj={dj}/>)
        }
      </div>
    </div>
  );
};
export default DJS;
