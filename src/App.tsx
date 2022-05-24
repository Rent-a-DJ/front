import React from "react";
import Banner from "./components/Banner";
import AllItems from "./pages/AllItems";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";
import Chatbox from "./components/Chatbox";
import DJS from "./pages/DJS";
import PasswordForgotten from "./pages/PasswordForgotten";
import Item from "./pages/Item";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Chatbox />
                <Banner />
                <Welcome />
                <Footer />
              </>
            }
          />
          <Route
            path="/items"
            element={
              <>
                <Chatbox />
                <Banner />
                <AllItems />
                <Footer />
              </>
            }
          />
            <Route
                path="/item"
                element={
                    <>
                        <Chatbox />
                        <Banner />
                        <Item />
                        <Footer />
                    </>
                }
            />
          <Route
            path="/login"
            element={
              <>
                <Chatbox />
                <Banner />
                <Login />
                <Footer />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <>
                <Chatbox />
                <Banner />
                <SignIn />
                <Footer />
              </>
            }
          />
          <Route
            path="/djs"
            element={
              <>
                <Chatbox />
                <Banner />
                <DJS />
                <Footer />
              </>
            }
          />
            <Route
                path="/forgotpassword"
                element={
                    <>
                        <Chatbox />
                        <Banner />
                        <PasswordForgotten />
                        <Footer />
                    </>
                }
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
