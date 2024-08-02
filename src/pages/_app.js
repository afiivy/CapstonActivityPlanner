
import '../styles/Footer.css';
import '../styles/Body.css';
import '../styles/About.css';
import Header from '/components/Header';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
