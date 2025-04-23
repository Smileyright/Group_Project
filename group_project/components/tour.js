import React, { useState } from "react";
import styles from "@/styles/virtual.module.css";

const tourImages = [
  { src: "/images/vangogh1.jpg", title: "Van Gogh - Starry Night" },
  { src: "/images/monet1.jpg", title: "Monet - Water Lilies" },
  { src: "/images/picasso1.jpg", title: "Picasso - Les Demoiselles d'Avignon" },
  { src: "/images/vangogh2.jpg", title: "Van Gogh - Sunflowers" },
];

export default function VirtualTour() {
  const [index, setIndex] = useState(0);
  const total = tourImages.length;

  const goNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className={styles.virtualTour}>
      <h2 className={styles.title}>Virtual Tour</h2>
      <div className={styles.imageWrapper}>
        <img src={tourImages[index].src} alt={tourImages[index].title} className={styles.image} />
        <p className={styles.caption}>{tourImages[index].title}</p>
      </div>
      <div className={styles.controls}>
        <button onClick={goPrev} className={styles.navButton}>Previous</button>
        <button onClick={goNext} className={styles.navButton}>Next</button>
      </div>
    </div>
  );
}
