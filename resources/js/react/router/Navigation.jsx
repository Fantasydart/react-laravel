import React from 'react';
import {Routes , Route} from "react-router-dom";
import Home from '../pages/Home'
import NotFound from "../pages/NotFound";
import Cart from "../pages/Cart";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" name element={<Home/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default Navigation;
