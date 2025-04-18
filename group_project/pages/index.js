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
      <HeaderComponent />
      <Navbar />

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
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg" alt="Van Gogh" />
            <p>Vincent van Gogh</p>
          </Link>
          <Link href="/Artists/monet" className={styles.featuredCard}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Claude_Monet_1899_Nadar.jpg" alt="Claude Monet" />
            <p>Claude Monet</p>
          </Link>
          <Link href="/Artists/picasso" className={styles.featuredCard}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Pablo_picasso_1.jpg/800px-Pablo_picasso_1.jpg" alt="Pablo Picasso" />
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

      <FooterComponent />
    </div>
  );
}
