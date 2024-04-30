import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Carousel from "./Carousel/Carousel";
import {Outlet} from "react-router-dom"
import Joinus from "./Joinus";

function Layout() {
  return (
    <>
      <Header />
      <Carousel /> 
      <Joinus/>
     <Outlet/> 
       <Footer />
    </>
  );
}

export default Layout;
