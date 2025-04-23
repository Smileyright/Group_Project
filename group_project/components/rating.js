import React from "react";
import styles from "@/styles/rating.module.css";

const StarRating = ({ rating, onRate }) => {
  return (
    <div className={styles.starRating}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => onRate(star)}
          className={star <= rating ? styles.filledStar : styles.emptyStar}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
