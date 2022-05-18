import {makeStyles} from "@mui/styles";
import OneItem from "../components/items/OneItem";


const useStyles = makeStyles((theme) => ({
    flex:{
        display:"flex",
    },
}));


const Item = () => {
    const classes = useStyles();

    return(
        <div>
            <h1>
                ok
            </h1>
        </div>
    )
}
export default Item;
