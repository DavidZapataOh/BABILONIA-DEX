"use client";
import React, { useState } from 'react';

const CreatePool = () => {
  const [token1, setToken1] = useState('');
  const [token2, setToken2] = useState('');
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');

  const createPool = () => {
    alert(`Creating pool: ${token1} / ${token2} with amounts ${amount1} and ${amount2}`);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-4">Create a New Pool</h2>
      <div className="bg-dark p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-white mb-2">Token 1:</label>
          <input
            type="text"
            value={token1}
            onChange={(e) => setToken1(e.target.value)}
            className="w-full p-2 rounded bg-background text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Token 2:</label>
          <input
            type="text"
            value={token2}
            onChange={(e) => setToken2(e.target.value)}
            className="w-full p-2 rounded bg-background text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Amount Token 1:</label>
          <input
            type="text"
            value={amount1}
            onChange={(e) => setAmount1(e.target.value)}
            className="w-full p-2 rounded bg-background text-white"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-2">Amount Token 2:</label>
          <input
            type="text"
            value={amount2}
            onChange={(e) => setAmount2(e.target.value)}
            className="w-full p-2 rounded bg-background text-white"
          />
        </div>
        <button
          onClick={createPool}
          className="bg-primary text-white px-6 py-2 rounded-lg shadow-lg hover:bg-secondary transition"
        >
          Create Pool
        </button>
      </div>
    </div>
  );
};

export default CreatePool;
