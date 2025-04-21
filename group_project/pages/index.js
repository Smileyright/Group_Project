import React from "react";
import Link from "next/link";
import styles from "../styles/main.module.css";
import HeaderComponent from "@/components/Header";
import Navbar from "@/components/Navbar";
import FooterComponent from "@/components/Footer";
import MiniGallery from "@/components/MiniGallery";

export default function HomePage() {
  return (
    <div>
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Discover Iconic Artists & Masterpieces</h1>
        <p className={styles.heroSubtitle}>Step into a curated world of timeless art and creativity</p>
      </div>

      <div className={styles.imageSection}>
      <h1 className={styles.mainArt}></h1>
      </div>

      <div className={styles.buttSection}>
      <Link href="/Gallery" className={styles.heroButton}>Explore Gallery</Link>
      </div>

      <MiniGallery />

      <div className={styles.aboutSection}>
        <h2>About This Site</h2>
        <p>
          This digital gallery highlights renowned artists like Van Gogh, Monet, and Picasso.
          Explore their work, learn about their lives, and enjoy the beauty of classic art.
        </p>
      </div>

      <div className={styles.featuredSection}>
        <h2>Featured Artists</h2>
        <div className={styles.featuredGrid}>
          <Link href="/Artists/vangogh" className={styles.featuredCard}>
            <img src="/images/artist2.jpg" alt="Van Gogh" />
            <p>Vincent van Gogh</p>
          </Link>
          <Link href="/Artists/monet" className={styles.featuredCard}>
            <img src="/images/artist1.jpg" alt="Claude Monet" />
            <p>Claude Monet</p>
          </Link>
          <Link href="/Artists/picasso" className={styles.featuredCard}>
            <img src="/images/artist3.jpg" alt="Pablo Picasso" />
            <p>Pablo Picasso</p>
          </Link>
        </div>
      </div>

      <div className={styles.callToAction}>
        <h2>Start Exploring</h2>
        <div className={styles.ctaButtons}>
          <Link href="/Gallery" className={styles.ctaButton}>Browse Gallery</Link>
          <Link href="/Artists" className={styles.ctaButton}>Meet the Artists</Link>
        </div>
      </div>
    </div>
  );
}
