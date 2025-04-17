import React, { useState } from "react";
import FooterComponent from "@/components/Footer";
import HeaderComponent from "@/components/Header";
import Navbar from "@/components/Navbar";
import styles from "@/styles/contact.module.css";
import '/styles/global.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    suggestion: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add validation or send to an API here
  };

  return (
    <div>
      <HeaderComponent />
      <Navbar />

      <div className={styles.contContainer}>
        <div className={styles.contHead}>
          <h4>Artist Gallery</h4>
          <h1>CONTACT US</h1>
        </div>

        <div className={styles.contBody1}>
          <h2>Contact Details</h2>
          <p>groupsproj@humber.ca</p>
          <p>416 675-3111</p>
          <h3>Etobicoke</h3>
          <p>205 Humber College Blvd, Etobicoke, ON M9W 5L7</p>
        </div>

        <div className={styles.contBody2}>
          <h2>Gallery Suggestions</h2>
          <p>
            We are always looking for ways to improve our gallery. If you have
            any suggestions or feedback, please let us know!
          </p>

          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Your First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Your Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="suggestion">Suggestion/Question</label>
              <textarea
                id="suggestion"
                name="suggestion"
                placeholder="Your Suggestion"
                rows={5}
                required
                value={formData.suggestion}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit Suggestion
            </button>
          </form>
        </div>
      </div>

      <FooterComponent />
    </div>
  );
}

export default ContactPage;
