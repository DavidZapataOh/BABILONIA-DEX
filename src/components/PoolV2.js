"use client";
import React, { useState, useEffect, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Range, getTrackBackground } from 'react-range';

const tokens = [
    { id: 1, name: 'AVAX', symbol: 'AVAX', image: 'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=024' },
    { id: 2, name: 'USDT', symbol: 'USDT', image: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=024' },
    { id: 3, name: 'BTC', symbol: 'BTC', image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=024' },
];


const CreatePoolV2 = () => {
    const [token1, setToken1] = useState(tokens[0]);
    const [token2, setToken2] = useState(tokens[1]);
    const [isTokenModalOpen, setIsTokenModalOpen] = useState(false);
    const [activeField, setActiveField] = useState('');
    const [searchToken, setSearchToken] = useState(''); 
    const [balance1, setBalance1] = useState(1000); // Dummy balance for token 1
    const [balance2, setBalance2] = useState(500); 
    const [amount, setAmount] = useState('');
    const [amount1, setAmount1] = useState('');
    const [amount2, setAmount2] = useState('');
    const [poolShare, setPoolShare] = useState(0);
    const [price1, setPrice1] = useState(0);
    const [price2, setPrice2] = useState(0);
    
    const handlePercentageChange = (token, percentage) => {
        if (token === 'token1') {
            setAmount1((balance1 * (percentage / 100)).toFixed(2));
        } else {
            setAmount2((balance2 * (percentage / 100)).toFixed(2));
        }
    };

    const handleTokenSelect = (token) => {
        if (activeField === 'token1') {
            setToken1(token);
        } else {
            setToken2(token);
        }
        setIsTokenModalOpen(false);
    };

    useEffect(() => {
        if (!isTokenModalOpen) {
            setSearchToken('');
        }
    }, [isTokenModalOpen]);
    
    useEffect(() => {
        if (amount1 && amount2) {
            // Example calculation for pool share and price (these are placeholders and need real formulas based on your pool mechanics)
            const newPoolShare = (parseFloat(amount1) / (1000 + parseFloat(amount1))) * 100; // Simplified calculation
            const newPrice1 = parseFloat(amount2) / parseFloat(amount1); // Price of token2 in terms of token1
            const newPrice2 = parseFloat(amount1) / parseFloat(amount2); // Price of token2 in terms of token1

            setPoolShare(newPoolShare.toFixed(2));
            setPrice1(newPrice1.toFixed(2));
            setPrice2(newPrice2.toFixed(2));
        }
    }, [amount1, amount2]);

    return (
        <section className="min-h-screen bg-background flex flex-col py-20 items-center justify-center">
            <div className="w-full max-w-2xl bg-elementBackground p-8 rounded-[40px_10px_40px_10px] shadow-2xl">
                <h1 className="text-3xl font-bold text-secondary mb-6">Crear Pool V2</h1>
                {/* Token Selection */}
                <div className="relative mb-6">
                    <label className="block text-textSecondary mb-2">Token 1:</label>
                    <div className="flex items-center bg-background p-0 rounded-[30px_5px_30px_5px] shadow-lg transition-shadow hover:shadow-2xl transform hover:-translate-y-1 duration-300">
                        <button
                            onClick={() => {
                                setIsTokenModalOpen(true);
                                setActiveField('from'); // Identifica el campo activo
                            }}
                            className="relative w-1/5 cursor-pointer bg-background text-left shadow-md rounded-[20px_5px_20px_5px] text-secondary border-2 border-primary p-4"
                        >
                            <span className="flex items-center">
                                <img src={token1.image} alt="" className="w-6 h-6 mr-2 rounded-full border-2 border-accent" />
                                {token1.symbol}
                            </span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <ChevronUpDownIcon className="w-5 h-5 text-primary" aria-hidden="true" />
                            </span>
                        </button>
                        <input
                            type="number"
                            value={amount1}
                            onChange={(e) => setAmount1(e.target.value)}
                            placeholder="0.00"
                            className="ml-4 w-1/2 p-2 rounded-lg bg-background text-secondary border-0 focus:ring-primary focus:border-primary"
                        />
                        <div className="absolute right-1 flex">
                            {['25%', '50%', '75%', '100%'].map(percentage => (
                                <button key={percentage} onClick={() => handlePercentageChange('token1', parseInt(percentage, 10))}
                                    className="text-primary mx-1 text-xs bg-elementBackground p-2 rounded-xl hover:text-accent">
                                    {percentage}
                                </button>
                            ))}
                        </div>
                    </div>
                    <p className="text-xs text-textSecondary mt-1">Balance: {balance1} {token1.symbol}</p>
                </div>
                <div className="relative mb-6">
                    <label className="block text-textSecondary mb-2">Token 2:</label>
                    <div className="flex items-center bg-background p-0 rounded-[30px_5px_30px_5px] shadow-lg transition-shadow hover:shadow-2xl transform hover:-translate-y-1 duration-300">
                        <button
                            onClick={() => {
                                setIsTokenModalOpen(true);
                                setActiveField('from'); // Identifica el campo activo
                            }}
                            className="relative w-1/5 cursor-pointer bg-background text-left shadow-md rounded-[20px_5px_20px_5px] text-secondary border-2 border-primary p-4"
                        >
                            <span className="flex items-center">
                                <img src={token2.image} alt="" className="w-6 h-6 mr-2 rounded-full border-2 border-accent" />
                                {token2.symbol}
                            </span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <ChevronUpDownIcon className="w-5 h-5 text-primary" aria-hidden="true" />
                            </span>
                        </button>
                        <input
                            type="number"
                            value={amount2}
                            onChange={(e) => setAmount2(e.target.value)}
                            placeholder="0.00"
                            className="ml-4 w-1/2 p-2 rounded-lg bg-background text-secondary border-0 focus:ring-primary focus:border-primary"
                        />
                        <div className="absolute right-1 flex">
                            {['25%', '50%', '75%', '100%'].map(percentage => (
                                <button key={percentage} onClick={() => handlePercentageChange('token2', parseInt(percentage, 10))}
                                    className="text-primary mx-1 text-xs bg-elementBackground p-2 rounded-xl hover:text-accent">
                                    {percentage}
                                </button>
                            ))}
                        </div>
                    </div>
                    <p className="text-xs text-textSecondary mt-1">Balance: {balance2} {token2.symbol}</p>
                </div>

                {/* Modal de Selección de Tokens */}
                <Dialog
                    open={isTokenModalOpen}
                    onClose={() => setIsTokenModalOpen(false)}
                    className="fixed z-50 inset-0 overflow-y-auto"
                >
                    <div className="flex items-center justify-center min-h-screen px-4 text-center">
                        <div className="fixed inset-0 bg-black opacity-30" />
                            <Dialog.Panel className="bg-elementBackground rounded-[30px_10px_30px_10px] max-w-lg mx-auto p-6 z-50 relative shadow-2xl transform transition-transform hover:scale-105 duration-500">
                                <Dialog.Title className="text-secondary text-lg font-bold">Selecciona un Token</Dialog.Title>
                                <Dialog.Description className="text-textSecondary mt-2">
                                    Escoge uno de los tokens disponibles o introduce el address de un contrato ERC20.
                                </Dialog.Description>

                                {/* Campo de Búsqueda */}
                                <input
                                    type="text"
                                    placeholder="Buscar por nombre o pegar address ERC20..."
                                    className="w-full mt-4 p-3 rounded-lg bg-background text-secondary border-0 focus:ring-primary focus:border-primary"
                                    onChange={(e) => setSearchToken(e.target.value)}
                                />

                                {/* Lista de Tokens */}
                                <div className="max-h-60 mt-4 overflow-y-auto">
                                    {tokens
                                        .filter(
                                            (token) =>
                                            token.name.toLowerCase().includes(searchToken.toLowerCase()) ||
                                            token.symbol.toLowerCase().includes(searchToken.toLowerCase())
                                        )
                                    .map((token) => (
                                        <div
                                            key={token.id}
                                            onClick={() => {
                                                handleTokenSelect(token);
                                            }}
                                            className="flex items-center cursor-pointer p-3 bg-background rounded-lg hover:bg-gray-700 transition-all mb-2"
                                        >
                                            <img
                                                src={token.image}
                                                alt={token.name}
                                                className="w-8 h-8 mr-2 rounded-full border-2 border-accent"
                                            />
                                            <div>
                                                <p className="text-secondary font-bold">{token.name}</p>
                                                <p className="text-textSecondary">{token.symbol}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Botón para Cerrar */}
                                <button
                                    onClick={() => setIsTokenModalOpen(false)}
                                    className="mt-6 bg-primary w-full py-2 rounded-lg text-background font-bold text-lg hover:bg-accent transition"
                                >
                                    Cerrar
                                </button>
                            </Dialog.Panel>
                        </div>
                </Dialog>
                
                {/* Prices and Pool Share */}
                <div className="mt-6">
                    <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="block text-textSecondary mb-2">Price A:</label>
                            <input
                                type="text"
                                value={`1 ${token1.symbol} = ${price1} ${token2.symbol}`}
                                readOnly
                                className="w-full p-2 bg-background text-secondary rounded-lg shadow-md border-2 border-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-textSecondary mb-2">Price B:</label>
                            <input
                                type="text"
                                value={`1 ${token2.symbol} = ${price2} ${token1.symbol}`}
                                readOnly
                                className="w-full p-2 bg-background text-secondary rounded-lg shadow-md border-2 border-primary"
                            />
                        </div>
                        <div>
                            <label className="block text-textSecondary mb-2">Pool Share:</label>
                            <input
                                type="text"
                                value={`${poolShare}% of the pool`}
                                readOnly
                                className="w-full p-2 bg-background text-secondary rounded-lg shadow-md border-2 border-primary"
                            />
                        </div>
                    </div>
                </div>

                {/* Create Pool Button */}
                <button className="w-full bg-gradient-to-r from-primary to-accent rounded-[20px_5px_20px_5px] py-3 text-background font-bold text-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                        onClick={() => alert(`Creating pool with ${token1.symbol}/${token2.symbol}`)}>
                    Crear Pool
                </button>
            </div>
        </section>
    );
};

export default CreatePoolV2;
