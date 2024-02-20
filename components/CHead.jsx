import Head from "next/head";

export default function CHead ({ title }) {
  return (
    <>
      <Head>
        <title>{title} | Green Energy</title>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicons/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicons/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='194x194'
          href='/favicons/favicon-194x194.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/favicons/android-chrome-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicons/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicons/site.webmanifest' />
        <link rel='mask-icon' href='/favicons/safari-pinned-tab.svg' color='#1cca45' />
        <meta name='apple-mobile-web-app-title' content='Green Energy' />
        <meta name='application-name' content='Green Energy' />
        <meta name='msapplication-TileColor' content='#00a300' />
        <meta name='msapplication-TileImage' content='/favicons/mstile-144x144.png' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
    </>
  );
};