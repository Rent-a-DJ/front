import * as React from "react";
import {makeStyles} from "@mui/styles";



const useStyles = makeStyles((theme) => ({
    flex:{
        display:"flex",
    },
}));


const Welcome = () => {
    const classes = useStyles();

    return(
        <div>
            <h1>
                Rent a DJ
            </h1>
        </div>
    )
}
export default Welcome;
