import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
       {<div className={styles.logo}> 
       <Link href="/">
      <Image src="/logo-datenight (1).png" alt="Logo" width={90} height={90} priority= {true}/>
      </Link>


      </div>}
      
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/quiz">Quiz</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/thingstodo">Things To Do</Link>
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