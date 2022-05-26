import Button from '@material-ui/core/Button';
import {makeStyles, styled} from "@mui/styles";
import {Theme} from "@mui/material";
import {CartItemType} from "../items/OneItem";


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
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => {
    const classes = useStyles();

    return (
        <div className={classes.wrap}>
            <div>
                <h3>{item.name}</h3>
                <div className='information'>
                    <p>Price: ${item.price}</p>
                    <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
                </div>
                <div className='buttons'>
                    <Button
                        size='small'
                        disableElevation
                        variant='contained'
                        onClick={() => removeFromCart(item.id)}
                    >
                        -
                    </Button>
                    <p>{item.amount}</p>
                    <Button
                        size='small'
                        disableElevation
                        variant='contained'
                        onClick={() => addToCart(item)}
                    >
                        +
                    </Button>
                </div>
            </div>
            <img src={item.image} alt={item.name}/>
        </div>
    )
};

export default CartItem;
