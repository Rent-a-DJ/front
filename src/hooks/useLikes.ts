import axios from "axios";
import {useEffect, useState} from "react";

const useLikes = (articleId: number) => {
  const [likesNumber, setLikesNumber] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const countLikes = async () => {
    try {
      const {data} = await axios.get<number>("/like/" + articleId);
      setLikesNumber(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    countLikes();
    checkLike();
  }, [])

  const like = async () => {
    try {
      await axios.post("/like/" + articleId);
      countLikes();
      checkLike();
    } catch (e) {
      console.log(e);
    }
  }

  const checkLike = async () => {
    try {
      const {data} = await axios.get<boolean>("/like/me/" + articleId);
      setIsLiked(data);
    } catch (e) {
      console.log(e);
    }
  }

  return {likesNumber, setLikesNumber, countLikes, like, isLiked}
}

export default useLikes;
