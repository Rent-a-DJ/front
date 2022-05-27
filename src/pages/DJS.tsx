import * as React from "react";
import {makeStyles} from "@mui/styles";
import louis from "../assets/louis.jpg";
import coco from "../assets/coco.png";
import {Button} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: "1rem",
    textAlign: "center",
  },
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
  djsContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  pageContainer: {
    height: "100%",
    backgroundColor: "whitesmoke"
  },
  detailsContainer: {
    marginLeft: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
}));

const DJS = () => {
  const classes = useStyles();

  return (
    <div className={classes.pageContainer}>
      <h1 className={classes.title}>Louer un DJ</h1>
      <div className={classes.djsContainer}>
        <div className={classes.djContainer}>
          <img src={coco} className={classes.djImage}/>
          <div className={classes.detailsContainer}>
            <div><p><span className={classes.informationLabel}>Description: </span> DJ Snoke est un dj né en région
              parisienne. Il est devenu fan d'ondes sonores à l'age de 8 ans. Son groove ne vous laissera pas
              indiférent.</p></div>

            <div><span className={classes.informationLabel}>Nom: </span><span>DJ Snoke</span></div>
            <div><span className={classes.informationLabel}>Déplacement: </span><span>Région Parisienne</span></div>
            <div><span className={classes.informationLabel}>Prix par jour: </span><span>70€</span></div>
            <div>
              <Button style={{width: "100%"}} variant="contained">
                Je TE choisis
              </Button>
            </div>
          </div>
        </div>


        <div className={classes.djContainer}>
          <img src={louis} className={classes.djImage}/>
          <div className={classes.detailsContainer}>
            <div><p><span className={classes.informationLabel}>Description: </span> DJ Snoke est un dj né en région
              parisienne. Il est devenu fan d'ondes sonores à l'age de 8 ans. Son grouve ne vous laissera pas
              indiférent.</p></div>

            <div><span className={classes.informationLabel}>Nom: </span><span>DJ Snoke</span></div>
            <div><span className={classes.informationLabel}>Déplacement: </span><span>Région Parisienne</span></div>
            <div><span className={classes.informationLabel}>Prix par jour: </span><span>70€</span></div>
            <div>
              <Button style={{width: "100%"}} variant="contained">
                Je TE choisis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DJS;
