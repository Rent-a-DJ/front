import React, {useContext} from "react";
import CartItem from "./CartItem";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import {ArticleType} from "../../types/ArticleType";
import cartContext from "../../contextes/CartContext";


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
    const cartContextValue = useContext(cartContext);
    const total = cartContextValue.articles.reduce((ack: number, item) => ack +  item.price, 0);

    return (
        <div className={classes.compo}>
            <IconButton color="primary" aria-label="upload picture" component="span">
                <CloseIcon/>
            </IconButton>
            <h2>Votre Panier</h2>
            {cartContextValue.articles.length === 0 ? <p>No items in cart.</p> : null}
            {cartContextValue.articles.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2>Total: ${total.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;
