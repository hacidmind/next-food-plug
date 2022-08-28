// import React from 'react';
import Link from 'next/link'
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div>
            <nav className={styles.topnav}>
                <Link className={styles.active} href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="/faq"><a>FAQ</a></Link>
                <Link href="/datapages"><a>Staff</a></Link>
            </nav>
        </div>
    );
}

export default Navbar;
