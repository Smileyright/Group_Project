import FooterComponent from "@/components/Footer";
import React from "react";
import styles from "@/styles/contact.module.css"
import HeaderComponent from "@/components/Header";
import '/styles/global.css';
import Navbar from '@/components/Navbar';


function ContactPage() {
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
    <p>We are always looking for ways to improve our gallery. If you have any suggestions or feedback, please let us know!</p>

    <form onSubmit={(e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
    }} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
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
          placeholder="Your Phone Number"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="suggestion">Suggestion/Question</label>
        <textarea
          id="suggestion"
          name="suggestion"
          placeholder="Your Suggestion"
          required
          rows={5}
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
        
    )
}

export default ContactPage;

// <div className={styles.container}>
// <div className={styles.icons}>
//     <a href=""><i className="fa-brands fa-facebook"></i></a>
//     <a href=""><i className="fa-brands fa-twitter"></i></a>
//     <a href=""><i className="fa-brands fa-pinterest"></i></a>
//     <a href=""><i className="fa-brands fa-instagram"></i></a>
//     <a href=""><i className="fa-brands fa-tiktok"></i></a>
// </div>
