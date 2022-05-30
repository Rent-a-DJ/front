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
import ArticlesPage from "./pages/ArticlesPage";
import DateRangeContext from "./contextes/DateRangeContext";
import SelectDateRangeModal from "./components/SelectDateRangeModal";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";
import {ArticleType} from "./types/ArticleType";
import CartContext from "./contextes/CartContext";
import UserContext from "./contextes/UserContext";
import CategoriesContext from "./contextes/CategoriesContext";
import CreateItemAdmin from "./pages/CreateItemAdmin";
import DeleteItemAdmin from "./pages/DeleteItemAdmin";
import useAuth from "./hooks/useAuth";
import useCategories from "./hooks/useCategories";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const {categories, setCategories} = useCategories();
  const {user, setUser} = useAuth();

  return (
    <div className="App">
      <div className={"fullHeight flex column spaceBetween"}>
        <BrowserRouter>
          <DateRangeContext.Provider value={{dateRange, setDateRange}}>
            <CartContext.Provider value={{articles, setArticles}}>
              <UserContext.Provider value={{user, setUser}}>
                <CategoriesContext.Provider value={{categories, setCategories}}>
                  <ChatBox/>
                  <Banner/>
                  <ToastContainer/>
                  <SelectDateRangeModal/>
                  <Routes>
                    <Route path="/" element={<Welcome/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                    <Route path="/forgotpassword" element={<PasswordForgotten/>}/>
                    <Route path="/articles" element={<ArticlesPage/>}/>
                    <Route path="/djs" element={<DJS/>}/>

                    <Route path="/admin/createitem"
                           element={<PrivateRoute isAdmin={true} children={<CreateItemAdmin/>}/>}/>
                    <Route path="/admin/deleteitem"
                           element={<PrivateRoute isAdmin={true} children={<DeleteItemAdmin/>}/>}/>
                  </Routes>
                </CategoriesContext.Provider>
              </UserContext.Provider>
            </CartContext.Provider>
          </DateRangeContext.Provider>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
