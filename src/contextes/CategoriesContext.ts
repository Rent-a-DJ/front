import {createContext} from "react";
import {CategoryType} from "../types/CategoryType";

type Props = {
    categories: CategoryType[];
    setCategories: (categories: CategoryType[]) => void;
}

const CartContext = createContext({} as Props);

export default CartContext;
