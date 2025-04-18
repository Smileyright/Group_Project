// components/slideshow.js
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/slideshow.module.css";

export default function GallerySlideshow({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0 || !images[currentIndex]) {
    return <p>Loading slideshow...</p>;
  }

  return (
    <div className={styles.slideshow}>
      <div className={styles.imageContainer}>
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={1000}
          height={700}
          className={styles.slideImage}
        />
        <div className={styles.caption}>{images[currentIndex].alt}</div>
      </div>
    </div>
  );
}
