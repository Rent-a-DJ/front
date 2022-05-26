import React from "react";
import {makeStyles} from "@mui/styles";
import OneItem, {CartItemType} from "../components/items/OneItem";
import coco from "../assets/coco.png";
import {Alert, Button, Typography} from "@mui/material";
import louis from "../assets/louis.jpg";
import {useRef, useState} from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
};

const useStyles = makeStyles((theme) => ({
    alert: {
        variant: "body2",
        color: "red",
    },
    validDate: {
        variant: "body2",
        color: "green",
    }
}));


const Item: React.FC<Props> = ({ item, handleAddToCart }) => {

    const classes = useStyles();
    const [quantity, setQuantity] = useState("");
    const [startReservationDate, setStartReservationDate] = useState<string>("");
    const [endReservationDate, setEndReservationDate] = useState<string>("");
    const [isReserved, setIsReserved] = useState(false);
    const [isUserLogged, setIsUserLogged] = useState(false);

    const SubmitValues = () => {
        return(
            <div>
                {isReserved ?
                    <Alert severity="error">Matériel non disponible pour les dates demandées</Alert> :
                    <Alert severity="success">Ajouté au panier !</Alert>
                }
            </div>
        )};

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Nom Item</h1>
            <div style={{margin: "20px", display: "flex"}}>
                <img src="https://source.unsplash.com/random" width="300px" height="400" style={{margin: "20px"}}/>
                <div>
                    <p style={{textAlign: "center"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque dapibus metus semper diam vulputate, quis fringilla est
                        viverra. Fusce mi lacus, luctus id nisl quis, lacinia efficitur
                        ligula. Phasellus ullamcorper tristique erat, vel suscipit felis
                        porta at. Nam aliquet mattis orci, vehicula pharetra sem egestas ac.
                        Nulla scelerisque massa a turpis vulputate, sodales iaculis ante
                        ultricies. Vestibulum eget leo ac diam hendrerit vestibulum
                        facilisis quis dolor. Aenean quam nibh, vehicula at eros eget,
                        faucibus ornare nisi. Morbi rhoncus diam vel ante ullamcorper
                        laoreet. Proin porttitor feugiat lectus at eleifend. Pellentesque
                        habitant morbi tristique senectus et netus et malesuada fames ac
                        turpis egestas.
                    </p>
                    <div style={{display: "flex", alignItems: "center",}}>
                        <div style={{display: "inlineBlock"}}>
                            <form onSubmit={SubmitValues} style={{width: "20%"}}>
                                <input type="date" name="startRes" onChange={e => setStartReservationDate(e.target.value)}/>
                                <input type="date" name="endRes" onChange={e => setEndReservationDate(e.target.value)}/>
                                <button onClick={() => handleAddToCart(item)}>Ajouter au panier</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )};
export default Item;
