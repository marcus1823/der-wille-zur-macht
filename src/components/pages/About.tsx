import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import About1 from "../Layouts/LayoutAbout/About1";
import About2 from "../Layouts/LayoutAbout/About2";

const About: React.FC = () => {

  return (
    <div>

      <Header />
      <About1 />
      <About2 />

      <Footer />
    </div>

  );
};

export default About;
