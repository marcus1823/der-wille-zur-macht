import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import Home1 from "../Layouts/LayoutHome/Home1";
import Home2 from "../Layouts/LayoutHome/Home2";
import Home3 from "../Layouts/LayoutHome/Home3";
import Home4 from "../Layouts/LayoutHome/Home4";

const Home: React.FC = () => {

    return (
        <div>
            <Header />
            <Home1 />
            <Home2 />
            <Home3 />
            <Home4 />
            <Footer />
        </div>
    );
};

export default Home;
