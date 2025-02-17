import React from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import "../styles/Blogs.css"

const Blogs: React.FC = () => {

    return (
        <div>
            <Header />
            <div className="blog-container">
                <nav className="breadcrumb">
                    <span>Blog &gt; Danh mục</span>
                </nav>
                <h1 className="blog-title">Blog - Ý chí quyền lực trong cuộc sống</h1>
                <div className="blog-meta">
                    <img className="author-avatar" src="src/assets/hinh1.jpg" alt="Friedrich Nietzsche" />
                    <div className="author-info">
                        <span className="author-name">Friedrich Nietzsche</span>
                        <span className="blog-date">11 Tháng 1 2022 • 5 phút đọc</span>
                    </div>
                    <div className="social-icons">
                        <a href="#"><i className="icon-linkedin"></i></a>
                        <a href="#"><i className="icon-close"></i></a>
                        <a href="#"><i className="icon-facebook"></i></a>
                    </div>
                </div>
                <div className="blog-image">
                    <img src="src/assets/hinh10.jpg" alt="God is dead - Nietzsche" />
                </div>
            </div>

            <section className="featured-works">
                <div className="intro">
                    <p>Blog</p>
                    <h2>Short heading goes here</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>

                <div className="works-container">
                    <div className="work-item">
                        <img src="src/assets/hinh11.avif" alt="Tác phẩm nổi bật" />
                        <div className="content">
                            <span className="category">Thể loại </span>
                            <span className="time">5 phút đọc</span>
                            <h2>Sức mạnh của Ý chí quyền lực</h2>
                            <p>Khám phá cách triết lý này ảnh hưởng đến cuộc sống hàng ngày.</p>
                            <a href="#">Đọc thêm →</a>
                        </div>
                    </div>
                    <div className="work-item">
                        <img src="src/assets/hinh12.jpg" alt="Thus Spoke Zarathustra" />
                        <div className="content">
                            <span className="category">Phê bình </span>
                            <span className="time">5 phút đọc</span>
                            <h2>Triết lý hiện đại và tương lai</h2>
                            <p>Cách áp dụng triết lý vào thực tiễn và cuộc sống hàng ngày.</p>
                            <a href="#">Đọc thêm →</a>
                        </div>
                    </div>
                    <div className="work-item">
                        <img src="src/assets/hinh13.jpg" alt="Beyond Good and Evil" />
                        <div className="content">
                            <span className="category">Tầm nhìn</span>
                            <span className="time">5 phút đọc</span>
                            <h2>Sự mạnh mẽ của Ý chí</h2>
                            <p>Những điều cần biết về triết lý hiện đại và tầm nhìn tương lai.</p>
                            <a href="#">Đọc thêm →</a>
                        </div>
                    </div>
                </div>


            </section>

            <div className="container5">

                <div className="hero-container3">
                    <h1 className="hero-title">Khám phá triết lý</h1>
                    <p className="hero-description">
                    Những bài viết về Ý chí quyền lực
                    </p>
                </div>

                <div className="articles">
                    <div className="article">
                        <img src="src/assets/hinh8.jpg" alt="Nietzsche 1" className="image8" />
                        <div className="content">
                            <span className="category">Ý nghĩa</span>
                            <span className="time">5 phút đọc</span>
                            <h2>Sự mạnh mẽ của Ý chí</h2>
                            <p>Khám phá cách Nietzsche định nghĩa sức mạnh và khát vọng.</p>
                            <a href="#">Đọc thêm →</a>
                        </div>
                    </div>
                    <div className="article">
                        <img src="src/assets/hinh3.jpg" alt="Nietzsche 2" className="image8" />
                        <div className="content">
                            <span className="category">Triết lý</span>
                            <span className="time">7 phút đọc</span>
                            <h2>Vượt qua giới hạn bản thân</h2>
                            <p>Tìm hiểu cách vượt qua thử thách trong cuộc sống.</p>
                            <a href="#">Đọc thêm →</a>
                        </div>
                    </div>
                </div>
                <button className="view-all">Xem tất cả</button>
            </div>

            <Footer />
        </div>

    );
};

export default Blogs;
