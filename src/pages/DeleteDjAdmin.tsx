import * as React from "react";
import {makeStyles} from "@mui/styles";
import useDjs from "../hooks/useDjs";
import Dj from "../components/Dj";
import Button from "@material-ui/core/Button";
import DjAdmin from "../components/DjAdmin";

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
        backgroundColor: "whitesmoke",
    },
    center: {
        marginTop: "3rem",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
}));

const DJS = () => {
    const classes = useStyles();
    const {djs} = useDjs();
    return (
        <div className={classes.pageContainer}>
            <h1 className={classes.title}>Supprimer un DJ</h1>
            <div className={classes.djsContainer}>
                {
                    djs.map((dj) => <DjAdmin dj={dj}/>)
                }
            </div>
            <div className={classes.center}>
                <Button variant="contained">Valider pour supprimer définitivement</Button>
            </div>
        </div>
    );
};
export default DJS;
