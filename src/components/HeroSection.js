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

        {/* Contenedor del Swap Rápido Simplificado */}
        <div className="bg-elementBackground p-6 rounded-[40px_10px_40px_10px] shadow-lg max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-secondary mb-4">Swap</h2>

          {/* Campo De */}
          <div className="relative mb-6">
            <label className="block text-textSecondary mb-2">De</label>
            <div className="flex items-center bg-background p-0 rounded-[30px_5px_30px_5px] shadow-lg transition-shadow transform duration-300">
              <button
                disabled
                className="relative w-full cursor-default bg-background text-left shadow-md rounded-[20px_5px_20px_5px] text-secondary border-2 border-primary p-4"
              >
                <span className="flex items-center">
                  <img src="https://cryptologos.cc/logos/avalanche-avax-logo.png?v=024" alt="AVAX" className="w-6 h-6 mr-2 rounded-full border-2 border-accent" />
                  AVAX
                </span>
              </button>
              <input
                disabled
                type="text"
                value="23"
                className="ml-4 w-1/2 p-2 rounded-lg bg-background text-secondary border-0 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>

          {/* Campo A */}
          <div className="relative mb-6">
            <label className="block text-textSecondary mb-2">A</label>
            <div className="flex items-center bg-background p-0 rounded-[30px_5px_30px_5px] shadow-lg transition-shadow transform duration-300">
              <button
                disabled
                className="relative w-full cursor-default bg-background text-left shadow-md rounded-[20px_5px_20px_5px] text-secondary border-2 border-primary p-4"
              >
                <span className="flex items-center">
                  <span className="w-6 h-6 mr-2 rounded-full border-2 border-accent flex items-center justify-center">
                    <FaExchangeAlt className="text-primary" />
                  </span>
                  Elegir token
                </span>
              </button>
            </div>
          </div>

          {/* Botón de Comenzar */}
          <button
            onClick={goToSwap}
            className="w-full py-3 rounded-[20px_5px_20px_5px] bg-gradient-to-r from-primary to-accent text-background font-bold text-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            Comenzar
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
