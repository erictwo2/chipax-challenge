import { ReactElement, useEffect } from 'react';
import '../styles/globals.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const MyApp = ({ Component, pageProps }): ReactElement => {
  useEffect(() => {
    if (process.browser) {
      AOS.init();
    }
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;
