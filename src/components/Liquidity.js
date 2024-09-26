"use client";
import React, { useState } from 'react';
import { FaPlus, FaCog } from 'react-icons/fa';
import { Dialog } from '@headlessui/react';
import TokenPairIcon from './PairIcon';
import Link from 'next/link';

const positions = [
  { id: 1, pair: 'AVAX/USDT', version: 'V2', amount: '100 AVAX / 2000 USDT', share: '0.5%' },
  { id: 2, pair: 'BTC/USDT', version: 'V3', amount: '1 BTC / 30,000 USDT', share: '1%' },
];

const Pool = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isCreatePoolOpen, setIsCreatePoolOpen] = useState(false);

  return (
    <section className="min-h-screen bg-background py-20 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-elementBackground p-8 rounded-[40px_10px_40px_10px] shadow-2xl">
        <div className="flex justify-between mb-6">
          <h1 className="text-3xl font-bold text-secondary">Pool de Liquidez</h1>
          <button
            onClick={() => setIsSettingsOpen(true)}
            className="text-textSecondary hover:text-primary transition-colors"
          >
            <FaCog className="w-6 h-6" />
          </button>
        </div>

        {/* Posiciones Actuales */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-secondary mb-4">Tus Posiciones</h2>
          {positions.length > 0 ? (
            <div className="space-y-4">
              {positions.map((position) => (
                <div
                  key={position.id}
                  className="flex justify-between items-center p-4 bg-background rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  <div>
                    <TokenPairIcon
                      token1Image="https://cryptologos.cc/logos/avalanche-avax-logo.png?v=024"
                      token2Image="https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=024"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">{position.pair}</h3>
                    <p className="text-sm text-textSecondary">{position.amount}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-textSecondary">Versión: {position.version}</p>
                    <p className="text-lg font-bold text-secondary">{position.share}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-textSecondary">No tienes posiciones de liquidez activas.</p>
          )}
        </div>

        {/* Crear Nueva Posición */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-secondary">Añadir Nueva Posición</h2>
          <button
            onClick={() => setIsCreatePoolOpen(true)}
            className="flex items-center text-background bg-primary py-2 px-4 rounded-[20px_5px_20px_5px] shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <FaPlus className="mr-2" /> Crear Posición
          </button>
        </div>
      </div>

      {/* Modal de Configuración */}
      <Dialog
        open={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4 text-center">
          <div className="fixed inset-0 bg-black opacity-30" />
          <Dialog.Panel className="bg-elementBackground rounded-lg max-w-sm mx-auto p-6 z-50 relative shadow-lg">
            <Dialog.Title className="text-secondary text-lg font-bold">Configuración de Pool</Dialog.Title>
            <Dialog.Description className="text-textSecondary mt-2">
              Configura las preferencias de tus posiciones de liquidez.
            </Dialog.Description>
            {/* Aquí puedes agregar configuraciones adicionales */}
            <button
              onClick={() => setIsSettingsOpen(false)}
              className="mt-6 bg-primary w-full py-2 rounded-lg text-background font-bold text-lg hover:bg-accent transition"
            >
              Guardar
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Modal de Crear Posición */}
      <Dialog
        open={isCreatePoolOpen}
        onClose={() => setIsCreatePoolOpen(false)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4 text-center">
          <div className="fixed inset-0 bg-black opacity-30" />
          <Dialog.Panel className="bg-elementBackground rounded-lg max-w-lg mx-auto p-6 z-50 relative shadow-lg">
            <Dialog.Title className="text-secondary text-lg font-bold">Crear Nueva Posición</Dialog.Title>
            <Dialog.Description className="text-textSecondary mt-2">
              Selecciona la versión de Uniswap para tu nueva posición de liquidez.
            </Dialog.Description>
            <div className="space-y-4 mt-4">
              <Link href="/pools/v2">
                <button
                  className="w-full py-3 rounded-[20px_5px_20px_5px] bg-gradient-to-r from-primary to-accent text-background font-bold text-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                >
                  Crear en V2
                </button>
              </Link>
              <Link href="/pools/v3">
                <button
                  className="mt-2 w-full py-3 rounded-[20px_5px_20px_5px] bg-gradient-to-r from-primary to-accent text-background font-bold text-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                >
                  Crear en V3
                </button>
              </Link>
            </div>
            <button
              onClick={() => setIsCreatePoolOpen(false)}
              className="mt-6 bg-primary w-full py-2 rounded-lg text-background font-bold text-lg hover:bg-accent transition"
            >
              Cerrar
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </section>
  );
};

export default Pool;
