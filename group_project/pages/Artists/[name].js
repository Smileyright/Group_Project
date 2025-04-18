import { useRouter } from "next/router";
import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/artistPage.module.css";
import Navbar from "@/components/Navbar";
import FooterComponent from "@/components/Footer";

const artistDetails = {
  vangogh: {
    name: "Vincent van Gogh",
    image: "/images/artist2.jpg",
    bio: "Van Gogh was a Dutch post-impressionist painter known for his emotionally expressive works like Starry Night.",
    works: ["Starry Night", "Sunflowers", "The Bedroom"]
  },
  monet: {
    name: "Claude Monet",
    image: "/images/artist1.jpg",
    bio: "Monet was a founder of French Impressionism, known for painting natural landscapes with light and color.",
    works: ["Water Lilies", "Impression, Sunrise", "Rouen Cathedral"]
  },
  picasso: {
    name: "Pablo Picasso",
    image: "/images/artist3.jpg",
    bio: "Picasso was a Spanish painter and sculptor who co-founded the Cubist movement.",
    works: ["Guernica", "Les Demoiselles d'Avignon", "The Weeping Woman"]
  }
};

export default function ArtistPage() {
  const router = useRouter();
  const { name } = router.query;

  const artist = artistDetails[name];
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  if (!artist) return <p>Artist not found.</p>;

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <h1>{artist.name}</h1>
        <Image
          src={artist.image}
          alt={artist.name}
          width={300}
          height={400}
          className={styles.image}
        />
        <p>{artist.bio}</p>

        {/* Interact */}
        <div className={styles.likeSection}>
          <button onClick={handleLike} className={styles.likeButton}>
            {liked ? "❤️ Liked" : "🤍 Like"}
          </button>
          <span>{likes} {likes === 1 ? "like" : "likes"}</span>
        </div>

        <h3>Famous Works:</h3>
        <ul className={styles.worksList}>
          {artist.works.map((work, i) => (
            <li key={i}>{work}</li>
          ))}
        </ul>
      </div>
      <FooterComponent />
    </div>
  );
}
