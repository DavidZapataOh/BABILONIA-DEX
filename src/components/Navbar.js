import React from 'react';
import Link from 'next/link';
import { FaWallet } from 'react-icons/fa';
import CustomConnectButton from './ConnectButton';

const Navbar = () => {
  return (
    <nav className="bg-background p-4 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-bold text-primary">BABILONIA</h1>
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/swap">
            <h1 className="text-textSecondary hover:text-primary">Swap</h1>
          </Link>
          <Link href="/pools">
            <h1 className="text-textSecondary hover:text-primary">Pools</h1>
          </Link>
          <Link href="/teleporter">
            <h1 className="text-textSecondary hover:text-primary">Teleporter</h1>
          </Link>
          <CustomConnectButton/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;