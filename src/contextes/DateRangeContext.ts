import {createContext} from "react";

type Props = {
  dateRange: [Date | null, Date | null];
  setDateRange: (value: [Date | null, Date | null]) => void;
}

const DateRangeContext = createContext({} as Props);

export default DateRangeContext;
