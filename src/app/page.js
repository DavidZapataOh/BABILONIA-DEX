import Head from 'next/head';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>BABILONIA DEX</title>
        <meta name="description" content="Create and manage liquidity pools on Avalanche Fuji" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
      </main>
      <Footer />
    </div>
  );
}

