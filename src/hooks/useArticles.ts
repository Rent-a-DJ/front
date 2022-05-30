import {useEffect, useState} from "react";
import {ArticleType, FilterType} from "../types/ArticleType";
import axios from "axios";

const useArticles = (filter: FilterType) => {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  const fetchItems = async () => {
    try {
      let {data} = await axios.get<ArticleType[]>("/article/items");
      if (filter.name != "all" && filter.name != "admin") {
        data = data.filter((element) => element.category.name == filter.name)
      } else  if (filter.name == "all") {
        data = data.filter((element) => element.category.name != "dj")
      }
      setArticles(data);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchItems();
  }, [filter.name]);

  return {articles, fetchItems}
}

export default useArticles;
