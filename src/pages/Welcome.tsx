import * as React from "react";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
  pageContainer: {
    width: "100%",
    height: "100%",
    backgroundImage: "url(/dj-background.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  backgroundImage: {
    width: "100px",
    height: "100px",
  },
  title: {
    fontSize: "70px",
    color: "white",
    fontFamily: "Varela Round",
    borderRadius: 20,
    borderWidth: "20",
    borderColor: "white",
    borderStyle: "solid",
    padding: "1rem",
    textShadow: "#474747 3px 5px 2px",
  },
  titleContainer: {
    marginTop: "175px",
    marginLeft: "auto",
    marginRight: "auto"
  },
  details : {
    marginTop: "10%",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    fontSize: "20px",
    textShadow: "#474747 3px 5px 2px",
  },
}));

const Welcome = () => {
  const classes = useStyles();
  console.log(classes.pageContainer);
  return (
    <div className={classes.pageContainer}>
      <div className="flex fullWidth column">
        <div className={classes.titleContainer}>
          <span className={classes.title}>Rent a DJ</span>
        </div>
        <p className={classes.details}>Rent a Dj est une plateforme de location et de service spécialisée autour de l'univers de la musique !</p>
      </div>
    </div>
  );
};
export default Welcome;
