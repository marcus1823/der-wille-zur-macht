import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import "../styles/BlogDetail.css";

const BlogDetail: React.FC = () => {
  return (
    <div>
      <Header />

      {/* ========== HERO SECTION ========== */}
      <section className="blog-detail-hero">
        <div className="container">
          <h1 className="blog-detail-title">Khám Phá Triết Lý Ý Chí Quyền Lực</h1>
          <div className="blog-detail-meta">
            <span className="author">Friedrich Nietzsche</span>
            <span className="dot">•</span>
            <span className="date">12 Tháng 2, 2025</span>
            <span className="dot">•</span>
            <span className="reading-time">7 phút đọc</span>
          </div>

          <div className="social-share">
            <span>Chia sẻ:</span>
            <a href="#" className="icon-linkedin">in</a>
            <a href="#" className="icon-facebook">fb</a>
            <a href="#" className="icon-twitter">tw</a>
          </div>
        </div>
      </section>

      {/* ========== HERO IMAGE / QUOTE ========== */}
      <section className="hero-image-section">
        <div className="container">
          <div className="hero-image">
            <img src="src/assets/hinhDetailHero.jpg" alt="Nietzsche" />
            <blockquote className="hero-quote">
              "The pure soul is a pure lie"
              <span>— Friedrich Nietzsche</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ========== MAIN CONTENT ========== */}
      <section className="blog-content-section">
        <div className="container blog-content-grid">
          {/* Cột nội dung chính */}
          <div className="blog-content-main">
            <h2>Giới thiệu</h2>
            <p>
              Triết lý Ý Chí Quyền Lực của Nietzsche mở ra một cách nhìn hoàn toàn mới về khả năng
              của con người. Thông qua việc tự vượt qua giới hạn, chúng ta có thể định nghĩa lại
              giá trị của chính mình và thế giới xung quanh.
            </p>
            <p>
              Nietzsche tin rằng mỗi cá nhân đều mang trong mình một sức mạnh nội tại, và việc
              đánh thức, nuôi dưỡng sức mạnh ấy là chìa khóa để đạt đến sự tự do tư tưởng và tinh
              thần.
            </p>

            <h2>Nội dung chính</h2>
            <p>
              Trong tác phẩm <em>“Thus Spoke Zarathustra”</em>, Nietzsche mô tả hành trình
              tinh thần của con người thông qua nhân vật Zarathustra. Ông nhấn mạnh rằng “Siêu
              nhân” (Übermensch) không phải là một thực thể siêu nhiên, mà là một lý tưởng
              mà con người có thể vươn tới bằng cách tự hoàn thiện bản thân.
            </p>
            <img
              className="content-image"
              src="src/assets/hinhDetailContent.jpg"
              alt="Triết lý của Nietzsche"
            />
            <p>
              “Siêu nhân” ở đây tượng trưng cho những cá nhân dám phá vỡ những giá trị cũ,
              tự xây dựng hệ giá trị mới dựa trên ý chí và sáng tạo của chính mình.
            </p>

            <h2>Kết luận</h2>
            <p>
              Ý Chí Quyền Lực không khuyến khích sự thống trị vô tội vạ, mà là lời kêu gọi
              con người hãy trân trọng và phát huy tối đa khả năng sáng tạo, ý chí độc lập.
            </p>
          </div>

          {/* Cột bên phải: Khung trích dẫn, hình Nietzsche... */}
          <aside className="blog-content-aside">
            <div className="aside-quote-box">
              <h3>Khung trích dẫn nổi bật</h3>
              <p>
                “Con người là một sợi dây căng giữa thú vật và Siêu nhân — một sợi dây trên
                vực thẳm.”
              </p>
            </div>
            <div className="aside-image-box">
              <img
                src="src/assets/hinhDetailAside.jpg"
                alt="Nietzsche portrait"
              />
            </div>
          </aside>
        </div>
      </section>

      {/* ========== RATING / COMMENTS ========== */}
      <section className="review-section">
        <div className="container review-container">
          <h2>Nhận xét từ độc giả</h2>
          <div className="rating">
            <span className="stars">★★★★★</span>
            <span className="rating-text">5/5 - 10 đánh giá</span>
          </div>
          <p>
            “Bài viết đã giúp tôi hiểu hơn về triết lý của Nietzsche và cách áp dụng vào cuộc
            sống.”
          </p>
        </div>

        <div className="container comment-container">
          <h3>Chia sẻ bài viết này</h3>
          <div className="comment-actions">
            <button>Thích</button>
            <button>Bình luận</button>
            <button>Chia sẻ</button>
          </div>
        </div>
      </section>

      {/* ========== BÀI VIẾT LIÊN QUAN ========== */}
      <section className="related-posts-section">
        <div className="container">
          <h2>Bài viết liên quan</h2>
          <div className="related-posts-grid">
            <div className="related-post-item">
              <img
                src="src/assets/hinhRelated1.jpg"
                alt="Beyond Good and Evil"
              />
              <h3>Vượt lên giới hạn: Triết lý về tự do</h3>
              <p>
                Cách Nietzsche lý giải sự tự do và sức mạnh cá nhân.
              </p>
              <a href="#">Đọc thêm →</a>
            </div>
            <div className="related-post-item">
              <img
                src="src/assets/hinhRelated2.jpg"
                alt="Human, All Too Human"
              />
              <h3>Con người và bản năng: Góc nhìn mới</h3>
              <p>
                Phân tích cách Nietzsche nhấn mạnh bản năng sáng tạo.
              </p>
              <a href="#">Đọc thêm →</a>
            </div>
            <div className="related-post-item">
              <img
                src="src/assets/hinhRelated3.jpg"
                alt="Genealogy of Morals"
              />
              <h3>Đạo đức và luân lý: Một góc nhìn phê phán</h3>
              <p>
                Đánh giá vai trò của đạo đức truyền thống trong xã hội hiện đại.
              </p>
              <a href="#">Đọc thêm →</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetail;
