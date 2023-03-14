import { useRef } from 'react';
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll';

import 'locomotive-scroll/dist/locomotive-scroll.css';

import GlobalsStyles from '../styles/Globals';
import Reset from '../styles/Reset';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

function App({ Component, pageProps }) {
  const { asPath } = useRouter();
  const containerRef = useRef(null);

  return (
    <RLSProvider
      options={{
        smooth: true,
        lerp: 0.04,
        multiplier: 0.8,
      }}
      watch={[]}
      location={asPath}
      onLocationChange={scroll =>
        scroll.scrollTo(0, { duration: 0, disableLerp: false })
      }
      containerRef={containerRef}
    >
      <Reset />
      <GlobalsStyles />

      <div data-scroll-container ref={containerRef}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </RLSProvider>
  );
}

export default App;
