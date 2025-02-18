import React from "react";
import "../../styles/StylesHome/Home3.css";

const Home3: React.FC = () => {
  return (
    <div className="home3-wrapper">
      {/* ========== SECTION 1: Hero giới thiệu ========== */}
      <div className="hero-container3">
        <h3 className="hero-subtitle">
          Triết học Nietzsche: Khám phá sức mạnh nội tại của con người.
        </h3>
        <h1 className="hero-title">
          Ý chí quyền lực - Định nghĩa lại sức mạnh của bạn
        </h1>
        <p className="hero-description">
          Triết lý Ý chí quyền lực của Nietzsche khám phá cách con người có thể vượt qua
          giới hạn bản thân và định hình số phận của mình. Hãy khám phá những ý tưởng giúp
          bạn phát triển tư duy mạnh mẽ và tự do hơn.
        </p>
      </div>

      {/* ========== SECTION 2: 2 cột trên ========== */}
      <div className="row-container top-row">
        {/* Cột bên trái */}
        <div className="column left">
          <div className="card">
            <p className="card-subtitle">Khái niệm cốt lõi</p>
            <h2 className="card-title">Ý chí quyền lực – Nền tảng tư tưởng của Nietzsche</h2>
            <p className="card-text">
              Ý chí quyền lực là động lực thúc đẩy mọi hành động của con người. Đây không chỉ
              là mong muốn thống trị mà còn là khát vọng vươn lên.
            </p>
            <div className="button-group">
              <button className="button-dark">Khám phá</button>
              <button className="button-outline">Tìm hiểu →</button>
            </div>
            <img src="src/assets/hinh4.jpg" alt="Nietzsche" className="image1" />
          </div>
        </div>

        {/* Cột bên phải */}
        <div className="column right">
          <div className="image-container">
            <img src="src/assets/hinh5.avif" alt="Nietzsche" className="image" />
            <div className="overlay">
              <p className="card-subtitle">Triết học & cuộc sống</p>
              <h3 className="overlay-title">
                Làm thế nào để áp dụng Ý chí quyền lực vào đời sống?
              </h3>
              <p className="overlay-text">
                Nietzsche không chỉ đưa ra triết lý, mà còn thúc đẩy con người tự định nghĩa
                giá trị sống của chính mình.
              </p>
              <button className="overlay-button">Xem thêm →</button>
            </div>
          </div>
        </div>
      </div>

      {/* ========== SECTION 3: 2 cột dưới ========== */}
      <div className="row-container bottom-row">
        {/* Cột bên trái (2 card xếp dọc) */}
        <div className="column left-column-nested">
          {/* Dark card */}
          <div className="dark-card">
            <div className="dark-card-content">
              <p className="card-subtitle">Tư duy mạnh mẽ</p>
              <h3 className="dark-card-title">
                Vượt lên bản thân - Triết lý Nietzsche trong hành động
              </h3>
              <p className="dark-card-text">
                Nietzsche khuyến khích con người đối diện với khó khăn và biến chúng thành
                cơ hội để phát triển.
              </p>
              <button className="dark-card-button">Tìm hiểu thêm →</button>
            </div>
          </div>

          {/* Card trắng */}
          <div className="card">
            <p className="card-subtitle">Triết lý ứng dụng</p>
            <h3 className="card-title">
              Học tập suốt đời - Bí quyết để trở thành phiên bản tốt nhất của bạn
            </h3>
            <p className="card-text">
              Nietzsche nhấn mạnh tầm quan trọng của việc học tập và không ngừng rèn luyện trí tuệ.
            </p>
            <button className="overlay-button">Xem bài viết →</button>
          </div>
        </div>

        {/* Cột bên phải (1 card có hình) */}
        <div className="column right-column-nested">
          <div className="right-card">
            <p className="card-subtitle">Tư tưởng quan trọng</p>
            <h3 className="card-title">
              Siêu nhân (Übermensch) - Hình mẫu lý tưởng trong tư tưởng Nietzsche
            </h3>
            <p className="card-text">
              Nietzsche tin rằng con người có thể trở thành 'siêu nhân' - những cá nhân có khả
              năng tạo ra giá trị mới và vượt lên những quy chuẩn lỗi thời.
            </p>
            <button className="overlay-button">Khám phá ngay →</button>
            <img src="src/assets/hinh6.jpg" alt="Nietzsche" className="image6" />
          </div>
        </div>
      </div>

      {/* ========== SECTION 4: Hero + hình + hero ========== */}
      <div className="hero-container3">
        <h1 className="hero-title">Khám phá triết lý mạnh mẽ</h1>
        <p className="hero-description">
          Hãy tìm hiểu sâu hơn về triết lý 'Ý chí quyền lực' của Nietzsche ngay hôm nay.
        </p>
      </div>
      <img src="src/assets/hinh7.webp" alt="Nietzsche" className="imageout" />

      {/* <div className="hero-container3">
        <h1 className="hero-title">Bài viết nổi bật</h1>
        <p className="hero-description">Khám phá triết lý của Nietzsche</p>
      </div> */}
    </div>
  );
};

export default Home3;
