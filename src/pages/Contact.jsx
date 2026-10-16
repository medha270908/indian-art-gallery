import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="page contact-page">
        <h1>Thank You!</h1>
        <p>Your feedback has been received. We appreciate you supporting Indian art.</p>
      </div>
    );
  }

  return (
    <div className="page contact-page">
      <h1>Contact / Feedback</h1>
      <p>We would love to hear your thoughts about Indian art and this gallery.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit" className="cta-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
