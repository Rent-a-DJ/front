import React from "react";
import CartItem from "./CartItem";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import {ArticleType} from "../../types/ArticleType";


type Props = {
    cartItems: ArticleType[];
    addToCart: (clickedItem: ArticleType) => void;
    removeFromCart: (id: number) => void;
};

const useStyles = makeStyles((theme: Theme) => ({
    compo: {
        width: "500px",
        padding: "20px",
    },
}));


const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
    const classes = useStyles();

    const calculateTotal = (items: ArticleType[]) =>
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

    return (
        <div className={classes.compo}>
            <IconButton color="primary" aria-label="upload picture" component="span">
                <CloseIcon/>
            </IconButton>
            <h2>Votre Panier</h2>
            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </div>
    );
};

export default Cart;
