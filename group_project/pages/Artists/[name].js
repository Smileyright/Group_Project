import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/artistPage.module.css";

export default function ArtistPage() {
  const [artistDetails, updateArtist] = useState(
    {
      vangogh: {
        name: "Vincent van Gogh",
        image: "/images/artist2.jpg",
        bio: "Van Gogh was a Dutch post-impressionist painter known for his emotionally expressive works like Starry Night.",
        works: ["Starry Night", "Sunflowers", "The Bedroom"],
        likes: 0,
        liked: false
      },
      monet: {
        name: "Claude Monet",
        image: "/images/artist1.jpg",
        bio: "Monet was a founder of French Impressionism, known for painting natural landscapes with light and color.",
        works: ["Water Lilies", "Impression, Sunrise", "Rouen Cathedral"],
        likes: 0,
        liked: false
      },
      picasso: {
        name: "Pablo Picasso",
        image: "/images/artist3.jpg",
        bio: "Picasso was a Spanish painter and sculptor who co-founded the Cubist movement.",
        works: ["Guernica", "Les Demoiselles d'Avignon", "The Weeping Woman"],
        likes: 0,
        liked: false
      }
    }
  )
  const router = useRouter();
  const { name } = router.query;

  const artist = artistDetails[name];
  const artistKeys = Object.keys(artistDetails);
  const currentIndex = artistKeys.indexOf(name);
  const nextArtistKey = artistKeys[(currentIndex + 1) % artistKeys.length];
  const nextArtistName = artistDetails[nextArtistKey]?.name;

  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((prevLiked) => {
      const newLiked = !prevLiked;
      setLikes((prevLikes) => prevLikes + (newLiked ? 1 : -1));
      return newLiked;
    });
  };

  useEffect(() => {
    // Reset likes when switching artists
    setLikes(artist.likes);
    setLiked(artist.liked);
  }, [name]);

  if (!artist) return <p>Artist not found.</p>;

  return (
    <div>
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

        {/* 👇 NEXT ARTIST BUTTON */}
        <div className={styles.nextArtist}>
          <Link href={`/Artists/${nextArtistKey}`}>
            <button className={styles.nextButton}>
              Next: {nextArtistName} →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
