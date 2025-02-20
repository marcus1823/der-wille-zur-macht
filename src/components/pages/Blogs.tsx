import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import "../styles/Blogs.css";
import { Link } from "react-router-dom";

const Blogs: React.FC = () => {

  return (
    <div>
      {/* Header */}
      <Header />

      {/* ========== PHẦN BLOG CHÍNH (breadcrumb, meta, ảnh hero) ========== */}
      <div className="blog-container">
        <nav className="breadcrumb">
          <span>Blog &gt; Danh mục</span>
        </nav>
        <h1 className="blog-title">Blog - Ý chí quyền lực trong cuộc sống</h1>

        {/* Thông tin tác giả + social icons */}
        <div className="blog-meta">
          <img
            className="author-avatar"
            src="https://as1.ftcdn.net/v2/jpg/00/37/56/68/1000_F_37566856_7I5AWWFIAPuutbFAO4HruKo8WyeyVweT.jpg"
            alt="Friedrich Nietzsche"
          />
          <div className="author-info">
            <span className="author-name">Friedrich Nietzsche</span>
            <span className="blog-date">11 Tháng 1 2022 • 5 phút đọc</span>
          </div>
          <div className="social-icons">
            <a href="#">
              <i className="icon-linkedin"></i>
            </a>
            <a href="#">
              <i className="icon-close"></i>
            </a>
            <a href="#">
              <i className="icon-facebook"></i>
            </a>
          </div>
        </div>

        {/* Ảnh lớn (Hero Image) */}
        <div className="blog-image">
          <img
            src="src/assets/hinh10.jpg"
            alt="God is dead - Nietzsche"
          />
        </div>
      </div>

      {/* ========== PHẦN FEATURED WORKS ========== */}
      <section className="featured-works">
        <div className="intro">
          <p className="intro-category">Blog</p>
          <h2>Bài viết liên quan</h2>
          <p>
            Những bài viết khác về Ý chí quyền lực và triết lý hiện đại.
          </p>
        </div>

        <div className="works-container">
          <div className="work-item">
            <img src="src/assets/hinh11.avif" alt="Tác phẩm nổi bật" />
            <div className="content">
              <div className="meta-line">
                <span className="category">Thể loại</span>
                <span className="time">5 phút đọc</span>
              </div>
              <h2>Sức mạnh của Ý chí quyền lực</h2>
              <p>
                Khám phá cách triết lý này ảnh hưởng đến cuộc sống hàng ngày.
              </p>
              <Link to="/blog-detail">Đọc thêm →</Link>
              
            </div>
          </div>

          <div className="work-item">
            <img src="src/assets/hinh12.jpg" alt="Thus Spoke Zarathustra" />
            <div className="content">
              <div className="meta-line">
                <span className="category">Phê bình</span>
                <span className="time">5 phút đọc</span>
              </div>
              <h2>Triết lý hiện đại và tương lai</h2>
              <p>
                Cách áp dụng triết lý vào thực tiễn và cuộc sống hàng ngày.
              </p>
              <a href="blog-detail">Đọc thêm →</a>
            </div>
          </div>

          <div className="work-item">
            <img src="src/assets/hinh13.jpg" alt="Beyond Good and Evil" />
            <div className="content">
              <div className="meta-line">
                <span className="category">Tầm nhìn</span>
                <span className="time">5 phút đọc</span>
              </div>
              <h2>Sự mạnh mẽ của Ý chí</h2>
              <p>
                Những điều cần biết về triết lý hiện đại và tầm nhìn tương lai.
              </p>
              <a href="#">Đọc thêm →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ========== PHẦN DANH SÁCH BÀI VIẾT TIẾP THEO ========== */}
      <div className="container5">
        <div className="hero-container3">
          <h1 className="hero-title">Khám phá triết lý</h1>
          <p className="hero-description">
            Những bài viết về Ý chí quyền lực
          </p>
        </div>

        <div className="works-container">
          <div className="work-item">
            <img src="src/assets/hinh11.avif" alt="Tác phẩm nổi bật" />
            <div className="content">
              <div className="meta-line">
                <span className="category">Thể loại</span>
                <span className="time">5 phút đọc</span>
              </div>
              <h2>Sức mạnh của Ý chí quyền lực</h2>
              <p>
                Khám phá cách triết lý này ảnh hưởng đến cuộc sống hàng ngày.
              </p>
              <a href="/blog-detail">Đọc thêm →</a>
            </div>
          </div>
 
          <div className="work-item">
            <img src="src/assets/hinh12.jpg" alt="Thus Spoke Zarathustra" />
            <div className="content">
              <div className="meta-line">
                <span className="category">Phê bình</span>
                <span className="time">5 phút đọc</span>
              </div>
              <h2>Triết lý hiện đại và tương lai</h2>
              <p>
                Cách áp dụng triết lý vào thực tiễn và cuộc sống hàng ngày.
              </p>
              <a href="/blog-detail">Đọc thêm →</a>
            </div>
          </div>

          <div className="work-item">
            <img src="src/assets/hinh13.jpg" alt="Beyond Good and Evil" />
            <div className="content">
              <div className="meta-line">
                <span className="category">Tầm nhìn</span>
                <span className="time">5 phút đọc</span>
              </div>
              <h2>Sự mạnh mẽ của Ý chí</h2>
              <p>
                Những điều cần biết về triết lý hiện đại và tầm nhìn tương lai.
              </p>
              <a href="/blog-detail">Đọc thêm →</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Blogs;
