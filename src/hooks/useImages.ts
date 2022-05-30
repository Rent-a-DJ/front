import {useEffect, useState} from "react";
import axios from "axios";
import {ImageType} from "../types/ImageType";

const useImages = (articleId: number) => {
  const [images, setImages] = useState<ImageType[]>([]);

  const fetchItems = async () => {
    try {
      const {data} = await axios.get<ImageType[]>("/image/list/" + articleId);
      setImages(data);
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchItems();
  }, []);

  return {images}
}

export default useImages;
