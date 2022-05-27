import {createContext} from "react";
import {ArticleType} from "../types/ArticleType";

type Props = {
  articles: ArticleType[];
  setArticles: (articles: ArticleType[]) => void;
}

const CartContext = createContext({} as Props);

export default CartContext;
