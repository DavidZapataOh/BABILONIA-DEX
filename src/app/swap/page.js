import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Swap from '@/components/Swap';

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
        <Swap />
      </main>
    </div>
  );
}

