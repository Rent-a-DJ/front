import {useEffect, useState} from "react";
import axios from "axios";
import {UserType} from "../types/UserType";

const useAuth = () => {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    const getAuth = async () => {
      try {
        const {data} = await axios.get<UserType>("/users/me");
        setUser(data);
      } catch (e) {
        localStorage.removeItem("token");
      }
    }

    if (localStorage.getItem("token"))
      getAuth();

  }, [])

 return {user, setUser}
}

export default useAuth;
