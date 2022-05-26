import React from "react";
import Banner from "./components/Banner";
import AllItems from "./pages/AllItems";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import DJS from "./pages/DJS";
import PasswordForgotten from "./pages/PasswordForgotten";
import ChatBox from "./components/ChatBox";
import "./styles/utils.css";

function App() {
  return (
    <div className="App">
      <div className={"fullHeight flex column spaceBetween"}>
      <BrowserRouter>
        <ChatBox/>
        <Banner/>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/allitems" element={<AllItems/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/djs" element={<DJS/>}/>
          <Route path="/forgotpassword" element={<PasswordForgotten/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
