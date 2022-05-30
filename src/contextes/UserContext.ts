import {createContext} from "react";
import {UserType} from "../types/UserType";

type Props = {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
}

const DateRangeContext = createContext({} as Props);

export default DateRangeContext;
