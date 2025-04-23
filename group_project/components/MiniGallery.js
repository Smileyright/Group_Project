import React from "react";
import Image from "next/image";
import styles from "@/styles/minigallery.module.css";

export const images = [
  { src: "/images/art1.PNG", alt: "Art 1" },
  { src: "/images/art2.jpg", alt: "Art 2" },
  { src: "/images/art3.jpeg", alt: "Art 3" },
  { src: "/images/art4.jpg", alt: "Art 4" },
  { src: "/images/art5.jpg", alt: "Art 5" },
  { src: "/images/art6.jpg", alt: "Art 6" },
  { src: "/images/art7.jpg", alt: "Art 7" },
  { src: "/images/art8.jpg", alt: "Art 8" },
  { src: "/images/art9.jpg", alt: "Art 9" },
  { src: "/images/art10.jpg", alt: "Art 10" },
  { src: "/images/art11.jpg", alt: "Art 11" },
  { src: "/images/art12.jpg", alt: "Art 12" },
  { src: "/images/art13.jpg", alt: "Art 13" },
  { src: "/images/art14.jpg", alt: "Art 14" },
  { src: "/images/art15.jpg", alt: "Art 15" },
  { src: "/images/art16.jpg", alt: "Art 16" },
  { src: "/images/art17.jpg", alt: "Art 17" },
  { src: "/images/art18.jpg", alt: "Art 18" },
  { src: "/images/art19.jpg", alt: "Art 19" },
];

export default function MiniGallery() {
  return (
    <div className={styles.miniGallery}>
      <h2>Mini Gallery</h2>
      <div className={styles.miniGalleryGrid}>
        {images.map((img, index) => {
          // 19 images
          const dynamicClass =
            index === 0 || index === 10 ? styles.large : 
            index % 4 === 0 ? styles.tall :           
            "";                                       

          return (
            <div key={index} className={`${styles.imageWrapper} ${dynamicClass}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className={styles.galleryImage}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}