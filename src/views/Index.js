import React from "react";
import Header from "../components/header/Header";
import AboutUs from "../components/about-us/About-us";
import Roadmap from "../components/roadmap/Roadmap";
import Faqs from "../components/faqs/Faqs";
import Team from "../components/team/Team";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import TopClouds from "../components/header/TopClouds";
import Burger from "../components/burger/Burger";

function Index() {

    return (
        <>
            <TopClouds/>
            <Burger/>
            <Navbar/>
            <Header/>
            <AboutUs/>
            <Roadmap/>
            <Faqs/>
            <Team/>
            <Footer/>
        </>
    );
}

export default Index