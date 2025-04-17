import React from "react";
import FooterComponent from "@/components/Footer";
import '../styles/global.css';
import HeaderComponent from "@/components/Header";
import Navbar from '@/components/Navbar';
function Home() {
  return (
    <div>
    <HeaderComponent />
    <Navbar />
    <h1>This is the home page</h1>
    <FooterComponent />
    </div>
  )
}

export default Home;