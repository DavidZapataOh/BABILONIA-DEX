import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const Liquidity = () => {
  const [tokenA, setTokenA] = useState('');
  const [tokenB, setTokenB] = useState('');
  const [amountA, setAmountA] = useState('');
  const [amountB, setAmountB] = useState('');

  const addLiquidity = () => {
    alert(`Adding liquidity: ${amountA} ${tokenA} + ${amountB} ${tokenB}`);
  };

  return (
    <div className="bg-dark p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-10">
      <h2 className="text-2xl font-bold text-white mb-4">Add Liquidity</h2>
      <div className="mb-4">
        <label className="block text-secondary mb-2">Token A</label>
        <input
          type="text"
          value={tokenA}
          onChange={(e) => setTokenA(e.target.value)}
          placeholder="Token (e.g., AVAX)"
          className="w-full p-2 rounded bg-background text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-secondary mb-2">Amount A</label>
        <input
          type="number"
          value={amountA}
          onChange={(e) => setAmountA(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-2 rounded bg-background text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-secondary mb-2">Token B</label>
        <input
          type="text"
          value={tokenB}
          onChange={(e) => setTokenB(e.target.value)}
          placeholder="Token (e.g., USDT)"
          className="w-full p-2 rounded bg-background text-white"
        />
      </div>
      <div className="mb-4">
        <label className="block text-secondary mb-2">Amount B</label>
        <input
          type="number"
          value={amountB}
          onChange={(e) => setAmountB(e.target.value)}
          placeholder="Enter amount"
          className="w-full p-2 rounded bg-background text-white"
        />
      </div>
      <button
        onClick={addLiquidity}
        className="bg-primary w-full py-2 rounded-lg hover:bg-accent transition"
      >
        <FaPlus className="inline-block mr-2" /> Add Liquidity
      </button>
    </div>
  );
};

export default Liquidity;
