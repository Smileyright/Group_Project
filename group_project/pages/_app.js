import React from "react";
import '/styles/global.css';
import HeaderComponent from "@/components/Header";
import Navbar from "@/components/Navbar";
import FooterComponent from "@/components/Footer";

function App({ Component, pageProps }) {
  return(
    <div>
      <HeaderComponent />
      <Navbar />
      <Component {...pageProps} />
      <FooterComponent />
    </div>
  ) ;
}

export default App;