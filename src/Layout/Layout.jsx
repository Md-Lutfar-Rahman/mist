// import React from 'react';

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navbar from "../components/navbar/Navbar";
import Footer from "../Footer/Footer";
import ScroleNotice from "../components/ScrollNotice/ScroleNotice";

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <ScroleNotice></ScroleNotice>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;