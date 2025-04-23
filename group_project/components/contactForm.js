import React, { useState } from "react";
import styles from "@/styles/contact.module.css";
import StarRating from "@/components/rating";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    suggestion: "",
    rating: 0
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleRating = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      rating: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      suggestion: "",
      rating: 0
    });
  };

  return (
    <div className={styles.contBody2}>
      <h2>Gallery Suggestions</h2>
      <p>We are always looking for ways to improve our gallery. If you have any suggestions or feedback, please let us know!</p>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Your First Name"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Your Last Name"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="suggestion">Suggestion/Question</label>
          <textarea
            id="suggestion"
            name="suggestion"
            value={formData.suggestion}
            onChange={handleChange}
            placeholder="Your Suggestion"
            required
            rows={5}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="rating">Rate Your Experience:</label>
          <StarRating rating={formData.rating} onRate={handleRating} />
        </div>

        <button type="submit" className={styles.submitButton}>
          Submit Suggestion
        </button>
      </form>

      {submitted && (
        <p style={{ textAlign: "center", marginTop: "1rem", color: "green" }}>
          Thank you for your suggestion! We'll get back to you soon.
        </p>
      )}
    </div>
  );
}

export default ContactForm;
