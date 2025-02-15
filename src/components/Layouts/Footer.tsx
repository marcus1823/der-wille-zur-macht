import "../styles/Footer.css";
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Phần trên */}
      <div className="topSection">
        {/* Logo */}
        <div className="logo">Logo</div>

        {/* Navigation */}
        <nav className="nav">
          <a href="#">Liên kết Một</a>
          <a href="#">Liên kết Hai</a>
          <a href="#">Liên kết Ba</a>
          <a href="#">Liên kết Bốn</a>
          <a href="#">Liên kết Năm</a>
        </nav>

        {/* Social Icons */}
        <div className="socialIcons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaXTwitter /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>

      {/* Đường kẻ ngang */}
      <hr className="line"/>

      {/* Phần dưới */}
      <div className="bottomSection">
        <p>© 2025 Nietzsche Power. Bảo lưu mọi quyền.</p>
        <nav className="bottomNav">
          <a href="#">Chính sách Quyền riêng tư</a>
          <a href="#">Điều khoản Dịch vụ</a>
          <a href="#">Cài đặt Cookies</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
