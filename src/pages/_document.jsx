import { i18n } from 'next-i18next';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href="/favicon-180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-64.png"
        />
        {process.env.NODE_ENV === 'production' && (
          <Script id="google-analytics" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': 
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], 
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); 
        })(window,document,'script','dataLayer','GTM-TPM58H4');`}
          </Script>
        )}
      </Head>
      <body>
        <noscript>
          <iframe
            title="google-analytics"
            src="https://www.googletagmanager.com/ns.html?id=GTM-TPM58H4"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Main />
        <NextScript />
        {process.env.NODE_ENV === 'production' && (
          <Script id="online-chat" strategy="afterInteractive">
            {i18n.language === 'en'
              ? `        (function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://cdn-ru.bitrix24.ru/b23485026/crm/site_button/loader_5_yxqb7c.js');`
              : `        (function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://cdn-ru.bitrix24.ru/b23485026/crm/site_button/loader_3_8atvbs.js');`}
          </Script>
        )}
      </body>
    </Html>
  );
}
