import * as React from "react";
import { useState } from 'react';
import Cart from '../components/cart/Cart';
import Drawer from '@material-ui/core/Drawer';
import {ArticleType} from "../types/ArticleType";

type Props = {
  isOpen: boolean
}

const CartPage: React.FC<Props> = (props) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([] as ArticleType[]);
    const handleAddToCart = (clickedItem: ArticleType) => {
        setCartItems(prev => {
            // 1. Is the item already added in the cart?
            const isItemInCart = prev.find(item => item.id === clickedItem.id);

            if (isItemInCart) {
                return prev.map(item =>
                    item.id === clickedItem.id
                        ? item
                        : item
                );
            }
            // First time the item is added
            return [...prev, { ...clickedItem, amount: 1 }];
        });
    };

    const handleRemoveFromCart = (id: number) => {
        setCartItems(prev =>
            prev.reduce((ack, item) => {
                if (item.id === id) {
                    return ack;
                } else {
                    return [...ack, item];
                }
            }, [] as ArticleType[])
        );
    };
    if (!props.isOpen)
      return <></>;

    return (
        <div style={{
            zIndex: 100,
            position: "fixed",
            top: "100px",
            right: "20px",
            width: "300px",
            height: "400px",
            backgroundColor: "#F0F9FF",
            borderRadius: "5px",
            opacity: "0.9",

        }}>
            <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
                <Cart
                    cartItems={cartItems}
                    addToCart={handleAddToCart}
                    removeFromCart={handleRemoveFromCart}
                />
            </Drawer>

        </div>
    );
};
export default CartPage;
