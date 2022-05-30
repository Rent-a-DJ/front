import axios from "axios";
import {TokenType} from "../types/TokenType";
import {toast} from "react-toastify";
import {CreateUserType, UserType} from "../types/UserType";
import {useContext} from "react";
import userContext from "../contextes/UserContext";

const useLogin = () => {
  const userContextValue = useContext(userContext);
  const login = async (email: string, password: string) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const {data} = await axios.post<TokenType>("/login", formData, {headers: {"Content-Type": "multipart/form-data"}})
      localStorage.setItem('token', data.accessToken)
      toast.success("Vous êtes connectés");
      getAuth()
      return true;
    } catch (e) {
     toast.error("Mauvais identifiants");
     return false
    }
  }

  const getAuth = async () => {
    const {data} = await axios.get<UserType>("/users/me");
    userContextValue.setUser(data);
  }

  const register = async (user: CreateUserType) => {
    try {
      await axios.post<UserType>("/users", user)
      toast.success("Votre compte a été crée");
      return true;
    } catch (e) {
      toast.error("Des informations sont incorrectes");
      return false
    }
  }

  return {login, register};
}

export default useLogin;
