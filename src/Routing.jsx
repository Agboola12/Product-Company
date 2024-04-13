import React from "react";
import { Route, Routes } from "react-router";
import Home from "./User/Home";
import ProductDetails from "./User/ProductDetails";

const Routing = () => {
  return (
        <>
            <Routes>
                    <Route path="/" element={<Home/>}/>
            </Routes>
    </>
  );
};

export default Routing;
