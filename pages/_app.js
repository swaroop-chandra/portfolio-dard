import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Swaroop Portfolio</title>
        <meta charset="UTF-8" />

        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="stylesheet" href="/path/to/flickity.css" media="screen" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha384-b/PgW6i1Lb3d5LL6D2YOnX1N5sGvvsuYSg7jjipQjGdUyhwRUyo0XXjpa2UsC8Ry"
          crossorigin=""
        />
        <script src="https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/leaflet.js"></script>

        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,800;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/sc_logo.png" />
      </Head>
      <div className="pt-20 bg-stone-950 h-fit lg:p-10 text-stone-300">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
