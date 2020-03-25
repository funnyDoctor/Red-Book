import React from "react";
import Header from "../Header/Header"
import About from "../About/About";
import Features from "../Features/Features";
import Gallery from "../Gallery/Gallery";
import Footer from "../Footer/Footer";

const Page = () =>  {
    return (
        <div className={"page"}>
            <Header/>
            <main>
                <About/>
                <Features/>
                <Gallery/>
            </main>
            <Footer/>
        </div>

    )
};


export default Page;