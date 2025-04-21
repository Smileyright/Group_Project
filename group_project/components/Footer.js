import React from 'react';
import styles from '@/styles/footer.module.css';
import Link from "next/link";
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaTiktok } from "react-icons/fa";

const FooterComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.icons}>
                <a href="#"><FaFacebook className={styles.icon} /></a>
                <a href="#"><FaTwitter className={styles.icon} /></a>
                <a href="#"><FaPinterest className={styles.icon} /></a>
                <a href="#"><FaInstagram className={styles.icon} /></a>
                <a href="#"><FaTiktok className={styles.icon} /></a>
            </div>

            <div className={styles.footnav}>
                <ul>
                    <h3>Art Gallery</h3>
                    <p><Link href="/">Home</Link></p>
                    <p><Link href="/Artists">Artists</Link></p>
                    <p><Link href="/Gallery">Gallery</Link></p>
                    <p><Link href="/Contact">Contact</Link></p>
                </ul>
            </div>

            <div className={styles.contact}>
                <h3>Wanna get in touch?</h3>
                <p>123-435-2124</p>
                <p>n1923849032@humber.ca</p>
                <p>1234 Humber College Blvd, Toronto, ON</p>
            </div>

            <div className={styles.footbottom}>
                <p>© 2025 — Designed by <span className={styles.designer}>Group</span></p>
            </div>
        </div>
    );
};

export default FooterComponent;
