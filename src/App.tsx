import React, {useState} from "react";
import Banner from "./components/Banner";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import DJS from "./pages/DJS";
import PasswordForgotten from "./pages/PasswordForgotten";
import ChatBox from "./components/ChatBox";
import "./styles/utils.css";
import SidebarAdmin from "./components/sidebar/SidebarAdmin";
import ReservationSelector from "./components/ReservationSelector";
import ArticlesPage from "./pages/ArticlesPage";
import DateRangeContext from "./contextes/DateRangeContext";
import SelectDateRangeModal from "./components/SelectDateRangeModal";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

function App() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);

  return (
    <div className="App">
      <div className={"fullHeight flex column spaceBetween"}>
        <BrowserRouter>
          <DateRangeContext.Provider value={{dateRange, setDateRange}}>
            <ChatBox/>
            <Banner/>
            <ToastContainer/>
            <SelectDateRangeModal/>
            <Routes>
              <Route path="/" element={<Welcome/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/signin" element={<SignIn/>}/>
              <Route path="/forgotpassword" element={<PasswordForgotten/>}/>
              <Route path="/sidebar" element={<SidebarAdmin/>}/>
              <Route path="/test" element={<ReservationSelector/>}/>
              <Route path="/articles" element={<ArticlesPage/>}/>
              <Route path="/djs" element={<DJS/>}/>

            </Routes>
          </DateRangeContext.Provider>

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
