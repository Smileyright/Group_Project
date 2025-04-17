import FooterComponent from "@/components/Footer";
import React from "react";
import styles from "@/styles/contact.module.css"
import HeaderComponent from "@/components/Header";
import '/styles/global.css';


function ContactPage() {
    return (
        <div>
            <HeaderComponent />
            <div className={styles.contContainer}>
                <div className={styles.contHead}>
                <h4>Artist Gallary</h4>
                <h1>CONTACT US</h1>
            
                </div>
                <FooterComponent />
            </div>

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
