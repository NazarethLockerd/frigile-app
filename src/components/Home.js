import React from "react"
import './HomeStyles.css'
import NavBar from "./NavBar";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Testimonals from "./Testimonals";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";

const Home= ()=>{
    return(
        <div>
        <NavBar/>
        <Hero />
        <Pricing/>
        <Testimonals />
        <FAQ />
        <Contact/>
        <Footer />
        </div>

    )
}

export default Home;