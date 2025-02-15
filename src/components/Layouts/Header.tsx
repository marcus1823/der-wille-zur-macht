import { Link } from 'react-router-dom';
import '../styles/Header.css'; // Import file CSS

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">

        {/* Navigation */}
        <nav className="nav">
          <Link to="/home">Trang chủ</Link>
          <Link to="/about">Giới thiệu</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Liên hệ</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
