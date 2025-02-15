import React from "react";
import "../../styles/StylesHome/Home1.css";

const Home1: React.FC = () => {

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
                        <img src="src/assets/hinh1.jpg" alt="Nietzsche" />
                    </div>
                </section>
            </div>

            <div className="home-container2">
                {/* Section2: Hero */}
                <section className="section2-container">
                    {/* Hình ảnh bên trái */}
                    <div className="section2-image">
                        <img src="src/assets/hinh2.webp" alt="Nietzsche" />
                    </div>

                    {/* Nội dung bên phải */}
                    <div className="section2-content">
                        <h1>
                            Ý chí quyền lực: <span>Khám phá triết lý</span>
                        </h1>
                        <p>
                            Triết lý 'Ý chí quyền lực' của Nietzsche khuyến khích chúng ta vượt qua mọi
                            thử thách. Nó mở ra một con đường mới để hiểu về bản thân và thế giới xung
                            quanh.
                        </p>
                        <div className="section2-buttons">
                            <button className="btn-primary">Khám phá</button>
                            <button className="btn-secondary">Đọc thêm</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home1;
