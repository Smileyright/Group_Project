import React, { Suspense, useState } from "react";
import styles from "@/styles/contact.module.css";
import '/styles/global.css';

// Lazy load the ContactForm component
const ContactForm = React.lazy(() => import("@/components/contactForm"));

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    suggestion: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
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
      suggestion: ""
    });
  };

  return (
    <div>
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

          <div className={styles.reactLogo}>
            <img
              src="/images/react.png"
              alt="React logo"
              width="640"
              height="360"
              loading="lazy"
            />
          </div>

        </div>

        <div className={styles.contBody2}>
        
          {/* Lazy load the form component */}
          <Suspense fallback={<div>Loading contact form...</div>}>
            <ContactForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              submitted={submitted}
            />
          </Suspense>

          {submitted && (
            <p style={{ textAlign: "center", marginTop: "1rem", color: "green" }}>
              Thank you for your suggestion! We'll get back to you soon.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
