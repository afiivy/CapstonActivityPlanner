import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import '../styles/Footer.css';
import '../styles/Header.css'
import '../styles/Body.css';
import '../styles/About.css';
import '../styles/Contact.css';
import '../styles/Thingstodo.css';
import '../styles/Login.css'
import '../styles/Quiz.css'
export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }
  }, []);

  return <Component {...pageProps} />;
}