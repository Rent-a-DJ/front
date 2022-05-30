import axios from "axios";
import {ArticleDto, ArticleType} from "../types/ArticleType";
import {toast} from "react-toastify";

const useArticle = () => {
  const createArticle = async (articleDto: ArticleDto, files: FileList) => {
    try {
      const {data} = await axios.post<ArticleType>("/article", articleDto);
      addImages(data.id, files)
      toast.success("L'article a bien été crée")
    } catch (e) {
      toast.error("Une erreur est survenue")
      console.log(e);
    }
  }

  const addImages = (articleId: number, files: FileList) => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    try {
      axios.post('/image/' + articleId, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      toast.success("Les photos ont bien été ajoutés")
    } catch (e) {
      console.log(e)
      toast.error("Une erreur est survenue")
    }

  }

  const deleteArticle = async (articleId: number) => {
    try {
      await axios.delete('/article/' + articleId)
      toast.success("L'article a bien été supprimé")
    } catch (e) {
      console.log(e)
      toast.error("Une erreur est survenue")
    }
  }

  return {createArticle, deleteArticle}
}

export default useArticle;
