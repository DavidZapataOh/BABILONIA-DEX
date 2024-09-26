import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Pool from '@/components/Liquidity';

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
        <Pool />
      </main>
    </div>
  );
}

