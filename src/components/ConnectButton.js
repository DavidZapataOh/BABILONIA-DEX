"use client";
import React from 'react';
import { FaWallet } from 'react-icons/fa';
import { useAppKit, useWalletInfo } from '@reown/appkit/react';
import { useAccount } from 'wagmi';

const CustomConnectButton = () => {
  const { open } = useAppKit();
  const { address } = useAccount(); // Obtiene la dirección de la cuenta conectada
  const { walletInfo } = useWalletInfo(); // Obtiene la información de la wallet conectada

  return (
    <button
      onClick={() => open({ view: address ? 'Account' : 'Connect' })} // Muestra el perfil si está conectado, de lo contrario abre el modal de conexión
      className="w-full p-3 rounded-[20px_5px_20px_5px] bg-gradient-to-r from-primary to-accent text-background font-bold text-md shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex items-center justify-center"
    >
      {address ? (
        <span>
          {walletInfo.name} - {address.substring(0, 6)}...{address.substring(address.length - 4)}
        </span>
      ) : (
        <>
          <FaWallet className="mr-2" /> Conectar Wallet
        </>
      )}
    </button>
  );
};

export default CustomConnectButton;
