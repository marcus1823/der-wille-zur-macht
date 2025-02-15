import React from "react";
import "../../styles/StylesAbout/About2.css";

const About2: React.FC = () => {

    return (
        <div>
            <section className="featured-works">
                <div className="intro">
                    <h2>Các tác phẩm tiêu biểu của <span>Nietzsche</span></h2>
                    <p>Friedrich Nietzsche là một trong những triết gia vĩ đại nhất của thế kỷ 19. Các tác phẩm của ông đã định hình nhiều tư tưởng hiện đại và vẫn còn ảnh hưởng sâu sắc đến ngày nay.</p>
                </div>

                <div className="works-container">
                    <div className="work-item">
                        <img src="src/assets/sach1.jpg" alt="Tác phẩm nổi bật" />
                        <h3>Tác phẩm nổi bật</h3>
                        <p>Khám phá những tác phẩm tiêu biểu nhất của ông.</p>
                    </div>
                    <div className="work-item">
                        <img src="src/assets/sach2.jpg" alt="Thus Spoke Zarathustra" />
                        <h3>Thus Spoke Zarathustra</h3>
                        <p>Một tác phẩm triết học sâu sắc về sự tự do và ý nghĩa cuộc sống.</p>
                    </div>
                    <div className="work-item">
                        <img src="src/assets/sach3.jpg" alt="Beyond Good and Evil" />
                        <h3>Beyond Good and Evil</h3>
                        <p>Cuốn sách thách thức những giá trị đạo đức truyền thống.</p>
                    </div>
                </div>

                <div className="buttons">
                    <button className="explore-btn">Khám phá</button>
                    <button className="more-btn">Xem thêm</button>
                </div>
            </section>

            <div className="home-container2">
                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-content">
                        <h1>Sức mạnh của triết lý Nietzsche</h1>
                        <p>
                            Khám phá triết lý "Ý chí quyền lực" của Friedrich Nietzsche, nơi mà sức mạnh
                            và khát vọng dẫn dắt con người vượt qua mọi thử thách.
                        </p>
                        <div className="hero-buttons">
                            <button className="explore-btn">Khám phá</button>
                            <button className="learn-btn">Chia sẻ</button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="src/assets/hinh9.jpg" alt="Nietzsche" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About2;
