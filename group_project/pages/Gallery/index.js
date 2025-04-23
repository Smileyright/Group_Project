import React, { useEffect, useState } from "react";
import styles from "@/styles/gallery.module.css";
import GallerySlideshow from "@/components/slideshow";
import { images as localImages } from "@/components/MiniGallery";
import "@/styles/global.css";

function GalleryPage() {
  const [artworks, setArtworks] = useState([]);
  const [selectedArt, setSelectedArt] = useState(null);
  const [likedArtworks, setLikedArtworks] = useState({}); // State for liked 

  useEffect(() => {
    async function fetchArt() {
      const res = await fetch(
        "https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=11"
      );
      const data = await res.json();
      const top10Ids = data.objectIDs?.slice(0, 10) || [];

      const promises = top10Ids.map((id) =>
        fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
        ).then((res) => res.json())
      );

      const artData = await Promise.all(promises);
      setArtworks(artData.filter((item) => item.primaryImageSmall));
    }

    fetchArt();
  }, []);

  useEffect(() => {
    // Load liked art
    const savedLikes = JSON.parse(localStorage.getItem("likedArtworks")) || {};
    setLikedArtworks(savedLikes);
  }, []);

  useEffect(() => {
    
    localStorage.setItem("likedArtworks", JSON.stringify(likedArtworks));
  }, [likedArtworks]);

  const toggleLike = (artworkId) => {
    setLikedArtworks((prevLikes) => {
      const newLikes = { ...prevLikes };
      if (newLikes[artworkId]) {
        delete newLikes[artworkId]; 
      } else {
        newLikes[artworkId] = true; // Add to liked
      }
      return newLikes;
    });
  };

  const leftColumn = artworks.filter((_, index) => index % 2 === 0);
  const rightColumn = artworks.filter((_, index) => index % 2 !== 0);

  return (
    <div>
      <div className={styles.galleryHeader}>
        <h1>Artist Gallery</h1>
        <p>Click on image for expansion</p>
      </div>

      <GallerySlideshow images={localImages} />

      <div className={styles.galleryContainer}>
        <div className={styles.columns}>
          <div className={styles.column}>
            {leftColumn.map((art, i) => (
              <div
                key={art.objectID}
                className={`${styles.card} ${
                  i % 2 === 0 ? styles.tallCard : styles.shortCard
                }`}
                onClick={() => setSelectedArt(art)}
              >
                <img
                  src={art.primaryImageSmall}
                  alt={art.title}
                  className={styles.cardImage}
                />
                <h2 className={styles.cardTitle}>{art.title}</h2>
                <button
                  onClick={() => toggleLike(art.objectID)}
                  className={styles.likeButton}
                >
                  {likedArtworks[art.objectID] ? "❤️ Liked" : "🤍 Like"}
                </button>
              </div>
            ))}
          </div>

          <div className={styles.column}>
            {rightColumn.map((art, i) => (
              <div
                key={art.objectID}
                className={`${styles.card} ${
                  i % 2 === 0 ? styles.shortCard : styles.tallCard
                }`}
                onClick={() => setSelectedArt(art)}
              >
                <img
                  src={art.primaryImageSmall}
                  alt={art.title}
                  className={styles.cardImage}
                />
                <h2 className={styles.cardTitle}>{art.title}</h2>
                <button
                  onClick={() => toggleLike(art.objectID)}
                  className={styles.likeButton}
                >
                  {likedArtworks[art.objectID] ? "❤️ Liked" : "🤍 Like"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedArt && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedArt(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setSelectedArt(null)}
            >
              
            </button>
            <img
              src={selectedArt.primaryImage}
              alt={selectedArt.title}
              className={styles.modalImage}
            />
            <h2>{selectedArt.title}</h2>
            <p>{selectedArt.artistDisplayName}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
