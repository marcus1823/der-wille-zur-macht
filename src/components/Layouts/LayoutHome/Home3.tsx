import React from "react";
import "../../styles/StylesHome/Home3.css";

const Home3: React.FC = () => {

    return (
        <div>

            {/* ss5 */}
            <div className="faq-container">

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

                <h2 className="faq-title">Câu hỏi</h2>
                <p className="faq-description">
                    Dưới đây là những câu hỏi thường gặp về triết lý ý chí quyền lực.
                </p>
                <div className="faq-list">
                    <div>
                        <ul>
                            <li>Ý chí quyền lực là gì?</li>
                            <li>Ý chí quyền lực là khái niệm trung tâm trong triết lý của Nietzsche. Nó thể hiện khát vọng tự
                                khẳng định và phát triển bản thân. Đây là động lực thúc đẩy con người vượt qua thử thách.</li>
                        </ul>
                        <ul>
                            <li>Ai là Friedrich Nietzsche?</li>
                            <li>Friedrich Nietzsche là một triết gia người Đức nổi tiếng với những tư tưởng táo bạo. Ông đã có nhiều tác phẩm ảnh hưởng
                                sâu sắc đến triết học hiện đại. Cuộc đời và tư tưởng của ông vẫn còn gây tranh cãi cho đến ngày nay.</li>
                        </ul>
                        <ul>
                            <li>Tác phẩm nổi bật?</li>
                            <li>Một số tác phẩm nổi bật của Nietzsche bao gồm 'Thus Spoke Zarathustra', 'Beyond Good and Evil', và
                                'The Birth of Tragedy'. Những tác phẩm này khám phá sâu sắc về nhân sinh và triết lý. Chúng đã định hình nhiều
                                tư tưởng trong triết học hiện đại.</li>
                        </ul>
                        <ul>
                            <li>Tại sao nên tìm hiểu?</li>
                            <li>Tìm hiểu về triết lý Ý chí quyền lực giúp bạn hiểu rõ hơn về bản thân và thế giới. Nó khuyến khích sự phát triển cá nhân
                                và vượt qua giới hạn. Điều này có thể mang lại cảm hứng và động lực cho cuộc sống.</li>
                        </ul>
                        <ul>
                            <li>Liên hệ để biết thêm?</li>
                            <li>Nếu bạn còn thắc mắc, hãy liên hệ với chúng tôi. Chúng tôi sẵn sàng hỗ trợ bạn. Đừng ngần ngại đặt câu hỏi!</li>
                        </ul>
                    </div>
                </div>
                <div className="faq-footer">
                    <h3>Còn câu hỏi?</h3>
                    <p>Chúng tôi luôn sẵn sàng hỗ trợ bạn.</p>
                    <button className="faq-button">Liên hệ</button>
                </div>
            </div>
        </div>
    );
};

export default Home3;
