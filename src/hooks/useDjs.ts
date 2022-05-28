import {useEffect, useState} from "react";
import {ArticleType} from "../types/ArticleType";
import louis from "../assets/louis.jpg";
import coco from "../assets/coco.png";

const useDjs = () => {
  const [djs, setDjs] = useState<ArticleType[]>([]);

  const fetchDjs = () => {
    const djList = [
      {
        images: [louis],
        name: 'DJ Louis',
        category : 'dj',
        id : 1000,
        isAvailable : true,
        price : 60,
        rate : 5,
        description: "DJ Snoke est un dj né en région\n" +
          "parisienne. Il est devenu fan d'ondes sonores à l'age de 8 ans. Son groove ne vous laissera pas\n" +
          "indiférent."
      },
      {
        images: [coco],
        name: 'DJ coco',
        category : 'dj',
        id : 1001,
        isAvailable : true,
        price : 30,
        rate : 5,
        description: "Kenji Irak est un dj né en région\n" +
          "Irakienne. Il est devenu fan de bombes sonores à l'age de 8 ans. Ses mooves ne vous laisseront pas\n" +
          "indiférents."
      },
    ];
    setDjs(djList);
  }

  useEffect(() => {
    fetchDjs();
  }, []);

  return {djs}
}

export default useDjs;
