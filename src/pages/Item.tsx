import * as React from "react";
import {makeStyles} from "@mui/styles";
import OneItem from "../components/items/OneItem";
import coco from "../assets/coco.png";
import {Alert, Button, Typography} from "@mui/material";
import louis from "../assets/louis.jpg";
import {useRef, useState} from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";


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

const Item = () => {
    const classes = useStyles();


    const [quantity, setQuantity] = useState("");
    const [startReservationDate, setStartReservationDate] = useState("");
    const [endReservationDate, setEndReservationDate] = useState("");
    const [isReserved, setIsReserved] = useState(false);
    const [isUserLogged, setIsUserLogged] = useState(false);
    const nameForm = useRef(null)


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
                                <input type="select" onChange={e => setQuantity(e.target.value)}>
                                    <option value="one">one</option>
                                    <option value="two">two</option>
                                    <option value="three">three</option>
                                    <option value="four">four</option>
                                    <option value="five">five</option>
                                </input>
                                <input type="date" ref={startReservationDate}
                                       onChange={e => setStartReservationDate(e.target.value)}/>
                                <input type="date" ref={endReservationDate}
                                       onChange={e => setEndReservationDate(e.target.value)}/>
                                <button>Ajouter au panier</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};
export default Item;
