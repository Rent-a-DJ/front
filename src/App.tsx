import React from 'react';
import Banner from "./components/Banner";
import AllItems from './pages/AllItems'
import Footer from "./components/Footer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";




function App() {
    return (
        <div className="App">
            <Banner/>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<Welcome/>} />
                        <Route path="/items" element={<AllItems/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signin" element={<SignIn/>}/>
                </Routes>
            </BrowserRouter>
            <Footer/>
        </div>)
}

export default App;
