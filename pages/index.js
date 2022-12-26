import Head from "next/head";
import HeroSectoin from "../components/HeroSection";
import Populer from '../components/Populer';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
            <HeroSectoin />
            <Populer />
        </div>
      </main>
    </div>
  );
}
