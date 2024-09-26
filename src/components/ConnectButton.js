"use client";
import React, { useEffect, useState } from 'react';
import { FaWallet } from 'react-icons/fa';
import { useAppKit, useWalletInfo } from '@reown/appkit/react';
import { useAccount } from 'wagmi';

const CustomConnectButton = () => {
  const { open } = useAppKit();
  const { address: initialAddress } = useAccount();
  const [address, setAddress] = useState(null);
  const { walletInfo } = useWalletInfo();

  useEffect(() => {
    setAddress(initialAddress);
  }, [initialAddress]);

  return (
    <button
      onClick={() => open({ view: address ? 'Account' : 'Connect' })}
      className="w-full p-3 rounded-[20px_5px_20px_5px] bg-gradient-to-r from-primary to-accent text-background font-bold text-md shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 flex items-center justify-center"
    >
      {address ? (
        <span>
          {address.substring(0, 6)}...{address.substring(address.length - 4)}
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
