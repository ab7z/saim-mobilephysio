import React, {useEffect} from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Services from "../components/Services";
import Prices from "../components/Prices";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = (props) => {
    useEffect(() => {
        window.scrollTo({left: 0, top: 0, behavior: "auto"});

        const serviceSection = document.querySelector('#services'),
            picture = serviceSection.querySelector('picture'),
            options = {},
            observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (window.getComputedStyle(picture).display === 'none' && entry.isIntersecting && window.innerWidth > 740) {
                        picture.style.display = 'unset';
                    }
                })
            }, options);

        observer.observe(serviceSection);
    }, []);

    return (
        <React.Fragment>
            <Header isWebpEnable={props.isWebpEnable}/>
            <Intro/>
            <Services/>
            <Prices/>
            <Contact/>
            <Footer/>
        </React.Fragment>
    );
};

export default Home;