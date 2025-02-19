import  { useState } from "react";
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
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
 
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyti1D89jv9UqgYC-gqT1LvE7rHeOq-RRcsb7TK3wXDLl1QbuPUCqs13ZlbjpB-qptnGg/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Dữ liệu được gửi dưới dạng JSON
      });
      const result = await response.json();
      console.log('Success:', result);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit form.');
    }
  };

  return (
    <div>
      <Header />
      <div className="contact-container">
        <h1>Liên hệ và chia sẻ</h1>
        <h3 className="contact-title">Chúng tôi luôn mong nhận được ý kiến đóng góp và câu hỏi của bạn về triết học Nietzsche.</h3>
      </div>
      <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center", marginBottom: 20 }}>
        <h4 style={{marginBottom: 10}}>Liên hệ chúng tôi</h4>
        <p>Chúng tôi khuyến khích bạn chia sẻ ý kiến.</p>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px", marginTop: 19 }}>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Họ" required style={{ padding: "8px", width: "100%" }} />
          <input type="email" name="email" value={formData.email} placeholder="Email" onChange={handleChange} required style={{ padding: "8px", width: "100%" }} />
          <input name="message" value={formData.message} onChange={handleChange} placeholder="Nội dung" required style={{ padding: "8px", width: "100%", height: "100px" }}></input>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
            <label style={{ marginLeft: "5px" }}>Tôi chấp nhận điều khoản</label>
          </div>
          <button type="submit" style={{ padding: "10px", backgroundColor: "black", color: "white", border: "none", cursor: "pointer" }}>Gửi</button>
        </form>
      </div>
      <div className="blog-image" style={{width: "80%",marginLeft: "11%"}}>
        <img src="src/assets/hinh14.jpg" alt="God is dead - Nietzsche" />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;