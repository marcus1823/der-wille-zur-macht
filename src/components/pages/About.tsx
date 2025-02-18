import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import "../styles/StylesAbout/About.css";

const About: React.FC = () => {
  return (
    <div>
      <Header />

      <main className="about-page">
        {/* ========== SECTION 1: Hero ========== */}
        <section className="hero-section">
          <div className="container hero-content">
            <div className="hero-texts">
              <h1>Friedrich Nietzsche &amp; Triết thuyết Ý chí quyền lực</h1>
              <p>
                Khám phá tư tưởng mạnh mẽ của Friedrich Nietzsche, nơi mà sức mạnh nội tại
                và khát vọng dẫn dắt con người vượt qua mọi thử thách.
              </p>
            </div>
            <div className="hero-image">
              <img
                src="src/assets/hinhHero.jpg"
                alt="Nietzsche"
              />
            </div>
          </div>
        </section>

        {/* ========== SECTION 2: Cuộc đời và sự nghiệp ========== */}
        <section className="life-career-section">
          <div className="container life-career-container">
            <div className="left-section">
              <h2>Cuộc đời và sự nghiệp của Nietzsche</h2>
              <p>
                Friedrich Nietzsche (1844 - 1900) là một trong những triết gia
                có ảnh hưởng lớn nhất của thế kỷ 19. Tư tưởng của ông đã định
                hình nhiều trường phái triết học hiện đại, để lại dấu ấn sâu
                sắc về sức mạnh ý chí, tính cá nhân và sáng tạo.
              </p>
              <a href="#">Xem chi tiết &gt;</a>
            </div>

            <div className="timeline">
              <div className="event">
                <h3>1844</h3>
                <strong>Sinh ra tại Röcken, Đức</strong>
                <p>
                  Friedrich Nietzsche chào đời, bắt đầu hành trình trở thành một
                  trong những triết gia nổi tiếng nhất.
                </p>
                <a href="#">Xem &gt;</a>
              </div>

              <div className="event">
                <h3>1883</h3>
                <strong>Xuất bản “Thus Spoke Zarathustra”</strong>
                <p>
                  Tác phẩm nổi tiếng, chứa đựng nhiều tư tưởng đột phá về “Siêu
                  nhân” (Übermensch).
                </p>
                <a href="#">Xem &gt;</a>
              </div>

              <div className="event">
                <h3>1889</h3>
                <strong>Giai đoạn khủng hoảng</strong>
                <p>
                  Nietzsche đối mặt với khủng hoảng tinh thần nghiêm trọng, mất
                  khả năng tiếp tục sáng tác.
                </p>
                <a href="#">Xem &gt;</a>
              </div>

              <div className="event">
                <h3>1900</h3>
                <strong>Qua đời</strong>
                <p>
                  Ông qua đời, để lại di sản triết học đồ sộ, ảnh hưởng lớn đến
                  thế hệ sau.
                </p>
                <a href="#">Xem &gt;</a>
              </div>
            </div>
          </div>
        </section>

        {/* ========== SECTION 3: Các tác phẩm tiêu biểu ========== */}
        <section className="featured-works">
          <div className="container intro">
            <h2>Các tác phẩm tiêu biểu của <span>Nietzsche</span></h2>
            <p>
              Friedrich Nietzsche đã cho ra đời nhiều tác phẩm kinh điển, góp phần định hình
              nên tư tưởng hiện đại. Dưới đây là ba trong số những cuốn sách quan trọng.
            </p>
          </div>

          <div className="container works-container">
            <div className="work-item">
              <img src="src/assets/sach1.jpg" alt="Tác phẩm nổi bật" />
              <h3>Tác phẩm nổi bật</h3>
              <p>Khám phá những tư tưởng quan trọng trong loạt bài viết và công trình của ông.</p>
            </div>
            <div className="work-item">
              <img src="src/assets/sach2.jpg" alt="Thus Spoke Zarathustra" />
              <h3>Thus Spoke Zarathustra</h3>
              <p>
                Một tác phẩm triết học sâu sắc về ý nghĩa cuộc sống và sự tự do của con người.
              </p>
            </div>
            <div className="work-item">
              <img src="src/assets/sach3.jpg" alt="Beyond Good and Evil" />
              <h3>Beyond Good and Evil</h3>
              <p>
                Thách thức những giá trị đạo đức truyền thống, mở ra tầm nhìn mới về đạo đức.
              </p>
            </div>
          </div>

          <div className="container buttons">
            <button className="explore-btn">Khám phá</button>
            <button className="more-btn">Xem thêm</button>
          </div>
        </section>

        {/* ========== SECTION 4: Ý chí quyền lực & tầm ảnh hưởng ========== */}
        <section className="influence-section">
          <div className="container influence-container">
            <div className="influence-text">
              <h2>Ý chí quyền lực và tầm ảnh hưởng</h2>
              <p>
                Triết lý “Ý chí quyền lực” của Nietzsche nhấn mạnh khát khao vượt qua giới hạn
                cá nhân, xây dựng hệ giá trị mới và không ngừng sáng tạo. Tư tưởng này đã
                ảnh hưởng đến nhiều lĩnh vực như văn học, tâm lý học, nghệ thuật và chính trị.
              </p>
            </div>
            <div className="influence-image">
              <img
                src="src/assets/hinhInfluence.jpg"
                alt="Nietzsche painting"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
