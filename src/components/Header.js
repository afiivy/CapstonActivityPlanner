import Link from 'next/link';
//import Image from 'next/image';
//placeholder for logo image
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
       {/*<div className={styles.logo}> 
        <Link href="/">
         <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </Link> 
      </div>*/}
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.login}>
        <Link href="/login">Login</Link>
      </div>
    </header>
  );
};

export default Header;