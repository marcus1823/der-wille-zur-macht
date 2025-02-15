import React from "react";
import "../styles/About.css"; // Import file CSS
import Header from "../Layouts/Header";

const About: React.FC = () => {

  return (
    <div className="about-container1">

      <Header />


      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Friedrich Nietzsche & Triết thuyết Ý chí quyền lực</h1>
          <p>
            Khám phá cuộc đời và những tác phẩm cốt lõi của Nietzsche. Tìm hiểu về triết lý 'Ý chí quyền lực' và ảnh hưởng của nó đến tư tưởng hiện đại.
          </p>
          <div className="hero-buttons">
            <button className="explore-btn">Khám phá</button>
            <button className="learn-btn">Tìm hiểu</button>
          </div>
        </div>
        <div className="hero-image">
          <img src="src/assets/hinh3.jpg" alt="Nietzsche" />
        </div>
      </section>
    </div>

  );
};

export default About;
