import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={'header'}>
       {<div className={'logo'}> 
       <Link href="/">
      <Image src="/logo-datenight (1).png" alt="Logo" width={90} height={90} priority= {true}/>
      </Link>


      </div>}
      
      <nav>
        <ul className={'navList'}>
          <li className={'navItem'}>
            <Link href="/">Home</Link>
          </li>
          <li className={'navItem'}>
            <Link href="/quiz">Quiz</Link>
          </li>
          <li className={'navItem'}>
            <Link href="/thingstodo">Things To Do</Link>
          </li>
        </ul>
      </nav>
      <div className={'navItem'}>
        <Link href="/login">Login</Link>
      </div>
    </header>
  );
};

export default Header;