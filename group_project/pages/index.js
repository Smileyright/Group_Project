import React from "react";
import Link from "next/link";
import FooterComponent from "@/components/Footer";
import '../styles/global.css';
function Home() {
  return (
    <div>
    <Link href="/About">About</Link>
    <Link href="/Contact">Contact</Link>
    </div>
  )
}

export default Home;