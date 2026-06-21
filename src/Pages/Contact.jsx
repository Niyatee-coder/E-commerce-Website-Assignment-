export default function Contact() {
  return (
    <div className="contact-container">

      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have questions? We'd love to hear from you.
        </p>
      </section>

      <div className="contact-content">

        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Subject" />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button>Send Message</button>
        </div>

        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>📍 Mumbai, India</p>
          <p>📞 +91 9876543210</p>
          <p>✉ support@fashionfactory.com</p>
          <p>🕒 Mon - Sat : 9AM - 8PM</p>
        </div>

      </div>

    </div>
  );
}

