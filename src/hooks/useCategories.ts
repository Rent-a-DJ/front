import {useEffect, useState} from "react";
import {CategoryType} from "../types/CategoryType";
import axios from "axios";

const useCategories = () => {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const fetchCategories = async () => {
    try {
      const {data} = await axios.get<CategoryType[]>("/category");
      setCategories(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  return {categories, setCategories}
}

export default useCategories;
