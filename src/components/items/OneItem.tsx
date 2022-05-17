import React from "react";
import{Theme} from "@mui/material"
import { makeStyles } from "@mui/styles";

type Props = {
    name: string;
    category : string;
    id: string;
    isAvailable : boolean;
    price : string;
    rate : any;
}

const useStyles = makeStyles((theme:Theme) => ({
    oneItemGeneral:{
        alignItems: "center",
            display:"flex",
    },
    oneItemName:{

    }

}));

const OneItem : React.FC<Props> = (props) =>{
    const classes = useStyles();
    return (
        <div className={classes.oneItemGeneral}>

        </div>
    )

};

export default  OneItem;