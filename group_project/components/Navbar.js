import React from 'react';
import Link from "next/link";
import styles from '@/styles/nav.module.css';

const Navbar = () => {
    return (
        <div className={styles.navcontainer}>

            <div className={styles.navlinks}>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/About">About</Link></li>
                    <li><Link href="/Gallery">Gallery</Link></li>
                    <li><Link href="/Contact">Contact</Link></li>
                </ul>

            <div className={styles.navLogo}>
                
            </div>
            </div>
        </div>
    )
}

export default Navbar;


