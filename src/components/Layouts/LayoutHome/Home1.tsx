import React from "react";
import "../../styles/StylesHome/Home1.css";

const Home1: React.FC = () => {

    return (
        <div className="home-page-container">
            <div className="home-page-content">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="hero-section-content">
                        <h1>Khám Phá Triết Lý Nietzsche</h1>
                        <p>
                            Tìm hiểu về triết lý "Ý chí quyền lực" của Friedrich Nietzsche, nơi sức mạnh và khát vọng là động lực thúc đẩy con người vượt qua thử thách.
                        </p>
                        <div className="hero-section-buttons">
                            <button className="explore-btn">Khám Phá</button>
                            <button className="learn-btn">Tìm Hiểu</button>
                        </div>
                    </div>
                    <div className="hero-section-image">
                        <img src="https://as1.ftcdn.net/v2/jpg/00/37/56/68/1000_F_37566856_7I5AWWFIAPuutbFAO4HruKo8WyeyVweT.jpg" alt="Nietzsche" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home1;
