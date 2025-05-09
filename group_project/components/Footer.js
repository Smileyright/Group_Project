import React from 'react';
import styles from '@/styles/footer.module.css';
import Link from "next/link";
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram, FaTiktok } from "react-icons/fa";

const FooterComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.icons}>
                <a href="https://www.facebook.com/artistsnetwork" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className={styles.icon} />
                </a>
                <a href="https://twitter.com/artsy" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className={styles.icon} />
                </a>
                <a href="https://www.pinterest.com/artistsnetwork/" target="_blank" rel="noopener noreferrer">
                    <FaPinterest className={styles.icon} />
                </a>
                <a href="https://www.instagram.com/artsy/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className={styles.icon} />
                </a>
                <a href="https://www.tiktok.com/@art" target="_blank" rel="noopener noreferrer">
                    <FaTiktok className={styles.icon} />
                </a>
            </div>

            <div className={styles.footnav}>
                <ul>
                    <h3>Art Gallery</h3>
                    <p><Link href="/">Home</Link></p>
                    <p><Link href="/Artists/vangogh">Artists</Link></p>
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
