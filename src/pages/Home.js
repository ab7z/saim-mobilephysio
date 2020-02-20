import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Prices from "../components/Prices";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <React.Fragment>
            <Header/>
            <Intro/>
            <Services/>
            <Prices/>
            <Contact/>
            <Footer/>
        </React.Fragment>
    );
};

export default Home;