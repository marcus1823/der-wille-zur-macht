import React from "react";
import "../../styles/StylesHome/Home2.css";

const Home2: React.FC = () => {
  return (
    <div className="home-page-container1">
      <section className="home-page-content1">
        <div className="hero-section1">
          <div className="hero-section-content1">
            <h1>Ý chí quyền lực: Khám phá triết lý</h1>
            <p>
              Triết lý 'Ý chí quyền lực' của Nietzsche khuyến khích chúng ta vượt qua mọi
              thử thách. Nó mở ra một con đường mới để hiểu về bản thân và thế giới xung
              quanh.
            </p>
            <div className="hero-section-buttons1">
              <button className="explore-btn1">Khám Phá</button>
              <button className="learn-btn1">Tìm Hiểu</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home2;
