import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/artistPage.module.css";
import { ArtistContext } from "@/components/Context";

export default function ArtistPage() {
  const {artistDetails, updateArtist} = useContext(ArtistContext);
  
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
    if (!name || !artistDetails[name]) return;
    setLiked((prevLiked) => {
      const newLiked = !prevLiked;
      setLikes((prevLikes) => prevLikes + (newLiked ? 1 : -1));
      updateArtist((prevValue) => ({
        ...prevValue,
        [name]: {
          ...prevValue[name],
          likes: prevValue[name].likes + (newLiked ? 1 : -1),
          liked: !prevValue[name].liked,
        },
      }))
      return newLiked;
    });
  };

  useEffect(() => {
    // Reset 
    if (artist) {
      setLikes(artist.likes);
      setLiked(artist.liked);
    }
    
  }, [name, artist]);

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
