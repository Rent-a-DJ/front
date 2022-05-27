import {useEffect, useState} from "react";
import {ArticleType} from "../types/ArticleType";

const useArticles = () => {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  const fetchItems = () => {
    const articleList = [
      {
        images: ["https://source.unsplash.com/random", "https://source.unsplash.com/random"],
        name: 'enceinte',
        category: 'sound',
        id: 0,
        isAvailable: true,
        price: 60,
        rate: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
          "Pellentesque dapibus metus semper diam vulputate, quis fringilla est\n" +
          "Pellentesque dapibus metus semper diam vulputate, quis fringilla est\n" +
          "Pellentesque dapibus metus semper diam vulputate, quis fringilla est"
      },
      {
        images: ["https://source.unsplash.com/random", "https://source.unsplash.com/random"],
        name: 'lyre',
        category: 'lightning',
        id: 1,
        isAvailable: true,
        price: 30,
        rate: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
          "Pellentesque dapibus metus semper diam vulputate, quis fringilla est\n" +
          "Pellentesque dapibus metus semper diam vulputate, quis fringilla est\n" +
          "Pellentesque dapibus metus semper diam vulputate, quis fringilla est"
      },
      {
        images: ["https://source.unsplash.com/random", "https://source.unsplash.com/random"],
        name: 'par',
        category: 'lightning',
        id: 2,
        isAvailable: true,
        price: 20,
        rate: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
          "Pellentesque dapibus metus semper diam vulputate, quis fringilla est\n" +
          "Pellentesque dapibus metus semper diam vulputate, quis fringilla est\n" +
          "Pellentesque dapibus metus semper diam vulputate, quis fringilla est"
      },
      {
        images: ["https://source.unsplash.com/random", "https://source.unsplash.com/random"],
        name: 'derby',
        category: 'lightning',
        id: 3,
        isAvailable: true,
        price: 30,
        rate: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
          "Pellentesque dapibus metus semper diam vulputate, quis fringilla est\n" +
          "Pellentesque dapibus metus semper diam vulputate, quis fringilla est\n" +
          "Pellentesque dapibus metus semper diam vulputate, quis fringilla est"
      },
      {
        images: ["https://source.unsplash.com/random", "https://source.unsplash.com/random"],
        name: 'lumière UV',
        category: 'lightning',
        id: 4,
        isAvailable: true,
        price: 30,
        rate: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
          "Pellentesque dapibus metus semper diam vulputate, quis fringilla est\n" +
          "Pellentesque dapibus metus semper diam vulputate, quis fringilla est\n" +
          "Pellentesque dapibus metus semper diam vulputate, quis fringilla est"
      },
    ];
    setArticles(articleList);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return {articles}
}

export default useArticles;
