import React, {useContext} from "react";
import CartItem from "./CartItem";
import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import cartContext from "../../contextes/CartContext";
import dateRangeContext from "../../contextes/DateRangeContext";
import {format} from "date-fns";
import {fr} from "date-fns/locale";

const useStyles = makeStyles((theme: Theme) => ({
  compo: {
    width: "500px",
    padding: "20px",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
  },
  centerText: {
    width: "100%",
    textAlign: "center"
  },
  price: {
    width: "100%",
    textAlign: "right",
    marginRight: "1rem"
  }
}));

type Props = {
  setIsOpen: (isOpen: boolean) => void;
}

const Cart: React.FC<Props> = ({setIsOpen}) => {
  const classes = useStyles();
  const cartContextValue = useContext(cartContext);
  const dateRangeContextValue = useContext(dateRangeContext);
  if (dateRangeContextValue.dateRange[0] == null || dateRangeContextValue.dateRange[1] == null)
    return <></>;

  const startingDay = format(
    dateRangeContextValue.dateRange[0],
    'dd MMMM yyyy',
    {locale: fr}
  )

  const endingDay = format(
    dateRangeContextValue.dateRange[1],
    'dd MMMM yyyy',
    {locale: fr}
  )

  const total = cartContextValue.articles.reduce((ack: number, item) => ack + item.price, 0);

  return (
    <div className={classes.compo}>
      <div className={classes.titleContainer}>
        <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => setIsOpen(false)}>
          <CloseIcon/>
        </IconButton>
        <h2 className={classes.centerText}>Votre Panier</h2>
      </div>
      <h3 className={classes.centerText}>Du {startingDay} au {endingDay} </h3>
      {cartContextValue.articles.length === 0 ? <p>No items in cart.</p> : null}
      {cartContextValue.articles.map(item => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}
      <h2 className={classes.price}>Total: ${total.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
