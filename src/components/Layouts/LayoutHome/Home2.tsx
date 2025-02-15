import React from "react";
import "../../styles/StylesHome/Home2.css";

const Home2: React.FC = () => {

    return (
        <div>
            {/* Section 3 */}
            <div className="hero-container3">
                <h3 className="hero-subtitle">
                    Triết học Nietzsche: Khám phá sức mạnh nội tại của con người.
                </h3>
                <h1 className="hero-title">Ý chí quyền lực - Định nghĩa lại sức mạnh của bạn</h1>
                <p className="hero-description">
                    Triết lý Ý chí quyền lực của Nietzsche khám phá cách con người có thể vượt qua
                    giới hạn bản thân và định hình số phận của mình. Hãy khám phá những ý tưởng giúp
                    bạn phát triển tư duy mạnh mẽ và tự do hơn.
                </p>
            </div>

            {/* Section 4 */}
            {/* Ý chí quyền lực */}
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

            {/* Làm thế nào để áp dụng */}
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

            <div className="container4">
                {/* Cột bên trái */}
                <div className="left-column">
                    {/* Vượt lên bản thân */}
                    <div className="dark-card">
                        <img src="https://via.placeholder.com/400" alt="Nietzsche Dark" />
                        <div className="dark-card-content">
                            <p className="card-subtitle">Tư duy mạnh mẽ</p>
                            <h3 className="dark-card-title">
                                Vượt lên bản thân - Triết lý Nietzsche trong hành động
                            </h3>
                            <p className="dark-card-text">
                                Nietzsche khuyến khích con người đối diện với khó khăn và biến chúng thành cơ hội để phát triển.
                            </p>
                            <button className="dark-card-button">Tìm hiểu thêm →</button>
                        </div>
                    </div>

                    {/* Học tập suốt đời */}
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

                {/* Cột bên phải */}
                <div className="right-column">
                    <div className="right-card">
                        <p className="card-subtitle">Tư tưởng quan trọng</p>
                        <h3 className="card-title">
                            Siêu nhân (Übermensch) - Hình mẫu lý tưởng trong tư tưởng Nietzsche
                        </h3>
                        <p className="card-text">
                            Nietzsche tin rằng con người có thể trở thành 'siêu nhân' - những cá nhân có khả năng tạo ra giá trị mới và vượt lên những quy chuẩn lỗi thời.
                        </p>
                        <button className="overlay-button">Khám phá ngay →</button>
                        <img src="src/assets/hinh6.jpg" alt="Nietzsche" className="image6" />
                    </div>
                </div>

                <div className="hero-container3">
                    <h1 className="hero-title">Khám phá triết lý mạnh mẽ</h1>
                    <p className="hero-description">
                        Hãy tìm hiểu sâu hơn về triết lý 'Ý chí quyền lực' của Nietzsche ngay hôm nay.
                    </p>
                    <div className="section2-buttons">
                        <button className="btn-primary">Khám phá</button>
                        <button className="btn-secondary">Đọc thêm</button>
                    </div>
                </div>
                <img src="src/assets/hinh7.webp" alt="Nietzsche" className="imageout" />
                <div className="hero-container3">
                    <h1 className="hero-title">Bài viết nổi bật</h1>
                    <p className="hero-description">
                        Khám phá triết lý của Nietzsche
                    </p>
                </div>

                <div className="container5">
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

            </div>


        </div>
    );
};

export default Home2;
