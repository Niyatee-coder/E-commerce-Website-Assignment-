export default function Contact() {
  return (
    <div className="contact-page">

  <div className="left-panel">
    <h1>Let's Connect ✨</h1>
    <p>
      We'd love to hear from you. Whether you have a question about our
      products, orders, or anything else, our team is ready to help.
    </p>

    <div className="contact-info">
      <h2>Get In Touch</h2>

      <p>📍 Mumbai, India</p>
      <p>📞 +91 9876543210</p>
      <p>✉ fashionfactory@gmail.com</p>
      <p>🕒 Mon - Sat : 9AM - 8PM</p>
    </div>
  </div>

  <div className="contact-box">
    <h2>Send Message</h2>

    <input type="text" placeholder="Your Name" />

    <input type="email" placeholder="Your Email" />

    <input type="text" placeholder="Subject" />

    <textarea rows="5" placeholder="Your Message"></textarea>

    <button>Send Message</button>
  </div>

</div>
  );
}

