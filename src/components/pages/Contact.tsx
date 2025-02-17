import React, { useState } from "react";
import "../styles/Contact.css";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    termsAccepted: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <div>
      <Header />

      <div className="contact-container">
        <h1>Liên hệ và chia sẻ</h1>
        <h3 className="contact-title">Chúng tôi luôn mong nhận được ý kiến đóng góp và câu hỏi của bạn về triết học Nietzsche.</h3>


      </div>

      <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
        <h4>Liên hệ</h4>
        <h2 style={{ fontWeight: "bold" }}>Chúng tôi</h2>
        <p>Chúng tôi khuyến khích bạn chia sẻ ý kiến.</p>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <label>Họ</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required style={{ padding: "8px", width: "100%" }} />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required style={{ padding: "8px", width: "100%" }} />

          <label>Nội dung</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required style={{ padding: "8px", width: "100%", height: "100px" }}></textarea>

          <div style={{ display: "flex", alignItems: "center" }}>
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
            <label style={{ marginLeft: "5px" }}>Tôi chấp nhận điều khoản</label>
          </div>

          <button type="submit" style={{ padding: "10px", backgroundColor: "black", color: "white", border: "none", cursor: "pointer" }}>Gửi</button>
        </form>
      </div>
      <div className="blog-image">
        <img src="src/assets/hinh14.jpg" alt="God is dead - Nietzsche" />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
