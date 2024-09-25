"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { FaExchangeAlt } from 'react-icons/fa';

const HeroSection = () => {
  const router = useRouter();

  const goToSwap = () => {
    router.push('/swap');
  };

  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-background to-gray-800 h-screen text-center flex items-center justify-center">
      <div className="absolute inset-0 bg-background bg-opacity-80"></div>
      <div className="relative z-10 max-w-3xl mx-auto p-4">
        <h1 className="text-5xl font-bold text-secondary mb-6">
          Bienvenido a Babilonia DEX
        </h1>
        <p className="text-lg text-textSecondary mb-10">
          Intercambia y gestiona tus activos en la red Avalanche con velocidad y eficiencia. Una experiencia única en un entorno seguro y amigable.
        </p>
        <div className="bg-elementBackground p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-secondary mb-4">Swap Rápido</h2>
          <div className="mb-4">
            <label className="block text-textSecondary mb-2">De</label>
            <input
              type="text"
              placeholder="Token (e.g., AVAX)"
              className="w-full p-2 rounded bg-background text-secondary"
            />
          </div>
          <div className="mb-4">
            <label className="block text-textSecondary mb-2">A</label>
            <input
              type="text"
              placeholder="Token (e.g., USDT)"
              className="w-full p-2 rounded bg-background text-secondary"
            />
          </div>
          <button
            onClick={goToSwap}
            className="bg-primary text-background w-full py-3 rounded-lg hover:bg-accent transition"
          >
            <FaExchangeAlt className="inline-block mr-2" /> Realizar Swap
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;