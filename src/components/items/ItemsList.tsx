import React from "react";

interface IItems {
    name: string;
    category : string;
    id: string;
    isAvailable : boolean;
    price : string;
    rate : any;
}

const itemsList: IItems[] = [

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




function QualityScale(props : any){
    const range = [1, 2, 3, 4, 5]
    return(
    <div>  {range.map((rangeElem) => props >=rangeElem ?
        <span key={rangeElem.toString()}>*</span> : null
    )}
    </div>)
}



function ItemsList(){
    return (
        <ul>
            {itemsList.map((item)=>(
                <li key={item.id}>{ item.name }
                    {item.isAvailable ? <span>🔥</span> : <span>👎</span>}
                    <QualityScale  scaleValue={item.rate}/>
                </li>
            ))}
        </ul>

    )
}
export default  ItemsList


