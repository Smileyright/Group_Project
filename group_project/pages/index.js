import React from "react";
import FooterComponent from "@/components/Footer";
import '../styles/global.css';
import Head from "next/head";
import HeaderComponent from "@/components/Header";
function Home() {
  return (
    <div>
    <HeaderComponent />
    <h1>This is the home page</h1>
    <FooterComponent />
    </div>
  )
}

export default Home;