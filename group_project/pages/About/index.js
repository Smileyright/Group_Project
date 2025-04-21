import React from "react";
import FooterComponent from "@/components/Footer";
import HeaderComponent from "@/components/Header";
import Navbar from "@/components/Navbar";
import styles from "@/styles/about.module.css";


function AboutPage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
            <h1>This is the about page</h1>
            </div>
            <div className={styles.footer}>
            </div>
        </div>
    )
}

export default AboutPage;