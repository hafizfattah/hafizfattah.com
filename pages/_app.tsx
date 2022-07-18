/* eslint-disable @next/next/inline-script-id */
import {gsap} from 'gsap';
import {CSSPlugin} from 'gsap/CSSPlugin';
import Script from 'next/script';
import DefaultLayout from '../layouts/default';
import '../styles/globals.scss';
gsap.registerPlugin(CSSPlugin);

function MyApp({Component, pageProps}: any) {
  return (
    <div>
      <Script strategy="lazyOnload" src={'https://www.googletagmanager.com/gtag/js?id=G-YDT17PCFS3'} />
      <Script strategy="lazyOnload" src={'https://www.googletagmanager.com/gtag/js?id=G-YDT17PCFS3'}>
        {`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-YDT17PCFS3');
				`}
      </Script>

      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </div>
  );
}

export default MyApp;
