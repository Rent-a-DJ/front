import {makeStyles} from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    flex:{
        display:"flex",
    },
}));

const itemsList = [
    {
        name: 'enceinte',
        category : 'sound',
        id : '1ed',
        isAvailable : true,
        price : '60',
        rate : 5
    },
    {
        name: 'lyre',
        category : 'lightning',
        id : '2ed',
        isAvailable : true,
        price : '30',
        rate : 5
    },
    {
        name: 'par',
        category : 'lightning',
        id : '3ed',
        isAvailable : true,
        price : '20',
        rate : 5
    },
    {
        name: 'derby',
        category : 'lightning',
        id : '4ed',
        isAvailable : true,
        price : '30',
        rate : 5
    },
    {
        name: 'lumière UV',
        category : 'lightning',
        id : '5ed',
        isAvailable : true,
        price : '30',
        rate : 5
    },
];

const Item = () => {
    const classes = useStyles();

    return(
        <div className={classes.flex}>



        </div>
    )
}
export default Item;
