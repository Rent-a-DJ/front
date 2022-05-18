import React from 'react';
import MultipleItems from "../components/items/MultipleItems";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
    allItems: {

    }
}));

const itemsList = [

    {
        image: "https://source.unsplash.com/random",
        name: 'enceinte',
        category : 'sound',
        id : '1ed',
        isAvailable : true,
        price : '60',
        rate : 5
    },
    {
        image: "https://source.unsplash.com/random",
        name: 'lyre',
        category : 'lightning',
        id : '2ed',
        isAvailable : true,
        price : '30',
        rate : 5
    },
    {
        image: "https://source.unsplash.com/random",
        name: 'par',
        category : 'lightning',
        id : '3ed',
        isAvailable : true,
        price : '20',
        rate : 5
    },
    {
        image: "https://source.unsplash.com/random",
        name: 'derby',
        category : 'lightning',
        id : '4ed',
        isAvailable : true,
        price : '30',
        rate : 5
    },
    {
        image: "https://source.unsplash.com/random",
        name: 'lumière UV',
        category : 'lightning',
        id : '5ed',
        isAvailable : true,
        price : '30',
        rate : 5
    },
];

const AllItems = () =>{
    const classes = useStyles();

    return(
        <div className={classes.allItems}>
            <MultipleItems list={itemsList}/>

        </div>
    )
}

export default AllItems;
