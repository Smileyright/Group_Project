import React from "react";
import Link from "next/link";
import FooterComponent from "@/components/Footer";
import '../styles/global.css';
function Home() {
  return (
    <>
      <Link href="/Test">Test</Link>
      <FooterComponent />
    </>
  )
}

export default Home;