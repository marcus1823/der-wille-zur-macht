import React from "react";
import "../../styles/StylesAbout/About1.css";

const About1: React.FC = () => {

    return (
        <div>
            <div className="home-container1">
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
                            <button className="learn-btn">Tìm hiểu</button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="src/assets/hinh3.jpg" alt="Nietzsche" />
                    </div>
                </section>
            </div>

            <div className="container2">
                <div className="left-section">
                    <h1>Cuộc đời và sự nghiệp của Nietzsche</h1>
                    <p>Friedrich Nietzsche, sinh năm 1844, là một trong những triết gia vĩ đại nhất của thế kỷ 19. Ông đã có những tác phẩm nổi bật, định hình tư tưởng triết học hiện đại.</p>
                    <a href="#">Xem &gt;</a>
                </div>
                <div className="timeline">
                    <div className="event">
                        <h2>1844</h2>
                        <strong>Sinh ra tại</strong>
                        <p>Nietzsche sinh ra tại Röcken, Đức. Ông đã bắt đầu học tại trường đại học Bonn khi mới 16 tuổi.</p>
                        <a href="#">Xem &gt;</a>
                    </div>
                    <div className="event">
                        <h2>1883</h2>
                        <strong>Xuất bản tác phẩm</strong>
                        <p>Nietzsche xuất bản tác phẩm nổi tiếng 'Thus Spoke Zarathustra', tạo ra một cú sốc lớn trong giới triết học.</p>
                        <a href="#">Xem &gt;</a>
                    </div>
                    <div className="event">
                        <h2>1889</h2>
                        <strong>Giai đoạn khủng hoảng</strong>
                        <p>Nietzsche trải qua một giai đoạn khủng hoảng tâm lý nghiêm trọng, mất khả năng sáng tác và sống cô đơn.</p>
                        <a href="#">Xem &gt;</a>
                    </div>
                    <div className="event">
                        <h2>1900</h2>
                        <strong>Qua đời</strong>
                        <p>Nietzsche qua đời vào năm 1900, để lại một di sản triết học sâu sắc.</p>
                        <a href="#">Xem &gt;</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About1;
