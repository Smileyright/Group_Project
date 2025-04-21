import React, { useState } from "react";
import '/styles/global.css';
import HeaderComponent from "@/components/Header";
import Navbar from "@/components/Navbar";
import FooterComponent from "@/components/Footer";
import { ArtistContext } from "@/components/Context";

function App({ Component, pageProps }) {
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
  return(
    <div>
      <HeaderComponent />
      <Navbar />
      <ArtistContext.Provider value={{artistDetails, updateArtist}}>
        <Component {...pageProps} />
      </ArtistContext.Provider>
      <FooterComponent />
    </div>
  ) ;
}

export default App;