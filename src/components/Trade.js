import React, { useState } from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Trade = () => {
    const [fromToken, setFromToken] = useState('');
    const [toToken, setToToken] = useState('');
    const [amount, setAmount] = useState('');

    return (
        <div className="bg-dark p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-bold text-white mb-4">Token Swap</h2>
            <div className="mb-4">
                <label className="block text-secondary mb-2">From</label>
                <input
                type="text"
                value={fromToken}
                onChange={(e) => setFromToken(e.target.value)}
                placeholder="Token (e.g., AVAX)"
                className="w-full p-2 rounded bg-background text-white"
                />
            </div>
            <div className="text-center mb-4">
                <FaArrowDown className="text-accent" />
            </div>
            <div className="mb-4">
                <label className="block text-secondary mb-2">To</label>
                <input
                    type="text"
                    value={toToken}
                    onChange={(e) => setToToken(e.target.value)}
                    placeholder="Token (e.g., USDT)"
                    className="w-full p-2 rounded bg-background text-white"
                />
            </div>
            <div className="mb-4">
                <label className="block text-secondary mb-2">Amount</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full p-2 rounded bg-background text-white"
                />
            </div>
            <button className="bg-primary w-full py-2 rounded-lg hover:bg-accent transition">
                Swap
            </button>
        </div>
    );
};

export default Trade;
