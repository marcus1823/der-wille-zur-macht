import React from "react";
import Header from "../Layouts/Header";
import "../styles/Home.css"

const Home: React.FC = () => {

    return (
        <div >
            <Header />

            <div className="home-container1">

                {/* Hero Section */}
                <section className="hero">
                    <div className="hero-content">
                        <h1>Sức mạnh của triết lý Nietzsche</h1>
                        <p>
                            Khám phá triết lý "Ý chí quyền lực" của Friedrich Nietzsche, nơi mà
                            sức mạnh và khát vọng dẫn dắt con người vượt qua mọi thử thách.
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
                        <h1>Ý chí quyền lực: <span>Khám phá triết lý</span></h1>
                        <p>
                            Triết lý 'Ý chí quyền lực' của Nietzsche khuyến khích chúng ta vượt qua mọi thử thách.
                            Nó mở ra một con đường mới để hiểu về bản thân và thế giới xung quanh.
                        </p>
                        <div className="section2-buttons">
                            <button className="btn-primary">Khám phá</button>
                            <button className="btn-secondary">Đọc thêm</button>
                        </div>
                    </div>
                </section>
            </div>

            {/* phan session 3 */}
            <div className="hero-container3">
                <h3 className="hero-subtitle">Triết học Nietzsche: Khám phá sức mạnh nội tại của con người.</h3>
                <h1 className="hero-title">Ý chí quyền lực - Định nghĩa lại sức mạnh của bạn</h1>
                <p className="hero-description">
                    Triết lý Ý chí quyền lực của Nietzsche khám phá cách con người có thể vượt qua giới hạn bản thân và định hình số phận của mình.
                    Hãy khám phá những ý tưởng giúp bạn phát triển tư duy mạnh mẽ và tự do hơn.
                </p>
            </div>
        </div>



    );
};

export default Home;
