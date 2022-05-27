import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {ArticleType} from "../../types/ArticleType";
import React from "react";


const useStyles = makeStyles((theme: Theme) => ({
    wrap: {
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "20px",
        flex: "1",
    },
    informations: {
        display: "flex",
        justifyContent: "space-between",
    },
    img: {
        maxWidth: "80px",
        objectFit: "cover",
        marginLeft: "40px",
    }
}));


type Props = {
    item: ArticleType;
};

const CartItem: React.FC<Props> = ({item}) => {
    const classes = useStyles();

    return (
        <div className={classes.wrap}>
            <div>
                <h3>{item.name}</h3>
                <div className='information'>
                    <p>Price: ${item.price}</p>
                </div>
            </div>
        </div>
    )
};

export default CartItem;
