import React from "react";
import Link from "next/link";

function Home() {
  return (
    <div>
    <Link href="/About">About</Link>
    <Link href="/Contact">Contact</Link>
    </div>
  )
}

export default Home;