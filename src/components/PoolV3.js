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

const feeTiers = ['0.01%', '0.05%', '0.30%', '1.00%'];

const CreatePoolV3 = () => {
    const [token1, setToken1] = useState(tokens[0]);
    const [token2, setToken2] = useState(tokens[1]);
    const [isTokenModalOpen, setIsTokenModalOpen] = useState(false);
    const [activeField, setActiveField] = useState('');
    const [feeTier, setFeeTier] = useState(feeTiers[0]);
    const [rangeStart, setRangeStart] = useState('');
    const [rangeEnd, setRangeEnd] = useState('');
    const [amount1, setAmount1] = useState('');
    const [amount2, setAmount2] = useState('');
    const [searchToken, setSearchToken] = useState(''); 
    const [rangeValues, setRangeValues] = useState([0, 100]);
    const [selectedRangeOption, setSelectedRangeOption] = useState('Full Range');
    const [balance1, setBalance1] = useState(1000); // Dummy balance for token 1
    const [balance2, setBalance2] = useState(500); 
    
    const handlePercentageChange = (token, percentage) => {
        if (token === 'token1') {
            setAmount1((balance1 * (percentage / 100)).toFixed(2));
        } else {
            setAmount2((balance2 * (percentage / 100)).toFixed(2));
        }
    };

    const rangeOptions = {
        '5%': [47.5, 52.5],
        '10%': [45, 55],
        '20%': [40, 60],
        'Full Range': [0, 100]
    };

    const openTokenModal = (field) => {
        setActiveField(field);
        setIsTokenModalOpen(true);
    };

    const handleRangeSelect = (option) => {
        setSelectedRangeOption(option);
        setRangeValues(rangeOptions[option]);
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

    return (
        <section className="min-h-screen bg-background flex flex-col py-40 items-center justify-center">
            <div className="w-full max-w-2xl bg-elementBackground p-8 rounded-[40px_10px_40px_10px] shadow-2xl">
                <h1 className="text-3xl font-bold text-secondary mb-6">Crear Pool V3</h1>
                <div>
                    {/* Token Selection */}
                    <div className="mb-4">
                        <label className="block text-textSecondary mb-2">Token 1:</label>
                        <button className="w-full bg-background p-4 rounded-[20px_5px_20px_5px] shadow-md text-secondary border-2 border-primary flex justify-between items-center"
                                onClick={() => openTokenModal('token1')}>
                            <img src={token1.image} alt={token1.name} className="w-6 h-6 mr-2 rounded-full border border-accent" />
                            {token1.symbol}
                            <ChevronUpDownIcon className="w-5 h-5" />
                        </button>
                    </div>
                    <div className="mb-4">
                        <label className="block text-textSecondary mb-2">Token 2:</label>
                        <button className="w-full bg-background p-4 rounded-[20px_5px_20px_5px] shadow-md text-secondary border-2 border-primary flex justify-between items-center"
                                onClick={() => openTokenModal('token2')}>
                            <img src={token2.image} alt={token2.name} className="w-6 h-6 mr-2 rounded-full border border-accent" />
                            {token2.symbol}
                            <ChevronUpDownIcon className="w-5 h-5" />
                        </button>
                    </div>
                </div>
                

                {/* Token Selection Modal */}
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

                {/* Fee Tier Selection */}
                <label className="block text-textSecondary mb-2">Fee Tier:</label>
                <div className="flex justify-around items-center mb-6 space-x-4">
                    {feeTiers.map(tier => (
                        <button key={tier} onClick={() => setFeeTier(tier)} className={`w-1/4 p-1 rounded-lg text-md ${feeTier === tier ? 'bg-accent text-dark font-semibold' : 'bg-background text-gray-300'}`}>
                            {tier}
                        </button>
                    ))}
                </div>

                {/* Range Selection */}
                <div className="mb-4">
                    <label className="block text-textSecondary mb-2">Price Range:</label>
                    <div className="flex justify-between mb-2">
                        {Object.keys(rangeOptions).map(option => (
                            <button key={option}
                                    className={`py-2 px-4 rounded-lg ${selectedRangeOption === option ? 'bg-primary text-background' : 'bg-background text-secondary'} shadow-md`}
                                    onClick={() => handleRangeSelect(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                    <Range
                        values={rangeValues}
                        step={0.1}
                        min={0}
                        max={100}
                        onChange={setRangeValues}
                        disabled={true}
                        renderTrack={({ props, children }) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: '6px',
                                    width: '100%',
                                    background: getTrackBackground({
                                        values: rangeValues,
                                        colors: ['#ccc', '#00C896', '#ccc'],
                                        min: 0,
                                        max: 100
                                    })
                                }}
                                className="rounded-md"
                            >
                                {children}
                            </div>
                        )}
                        renderThumb={({ props }) => (
                            <div
                                {...props}
                                style={{
                                    ...props.style,
                                    height: '20px',
                                    width: '20px',
                                    borderRadius: '50%',
                                    backgroundColor: '#FFF'
                                }}
                            />
                        )}
                    />
                </div>

                {/* Price Inputs */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-textSecondary mb-2">Min Price:</label>
                        <input type="text" value={rangeValues[0]} readOnly
                               className="w-full p-4 bg-background text-secondary rounded-lg shadow-md border-2 border-primary"/>
                    </div>
                    <div>
                        <label className="block text-textSecondary mb-2">Max Price:</label>
                        <input type="text" value={rangeValues[1]} readOnly
                               className="w-full p-4 bg-background text-secondary rounded-lg shadow-md border-2 border-primary"/>
                    </div>
                </div>

                {/* Amount Inputs */}
                <div className=" mb-4">
                    <div>
                        <label className="block text-textSecondary mb-2">Amount Token 1:</label>
                        <div className="relative flex items-center bg-background p-4 rounded-lg shadow-md border-2 border-primary">
                            <img src={token1.image} alt={token1.name} className="w-6 h-6 mr-2 rounded-full" />
                            <input type="text" value={amount1} onChange={(e) => setAmount1(e.target.value)}
                                className="flex-grow bg-transparent text-secondary focus:outline-none"/>
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
                    <div>
                        <label className="block text-textSecondary mb-2">Amount Token 2:</label>
                        <div className="relative flex items-center bg-background p-4 rounded-lg shadow-md border-2 border-primary">
                            <img src={token2.image} alt={token2.name} className="w-6 h-6 mr-2 rounded-full" />
                            <input type="text" value={amount2} onChange={(e) => setAmount2(e.target.value)}
                                className="flex-grow bg-transparent text-secondary focus:outline-none"/>
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
                </div>

                {/* Create Pool Button */}
                <button className="w-full bg-gradient-to-r from-primary to-accent rounded-[20px_5px_20px_5px] py-3 text-background font-bold text-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                        onClick={() => alert(`Creating pool with ${token1.symbol}/${token2.symbol} at ${feeTier} fee.`)}>
                    Crear Pool
                </button>
            </div>
        </section>
    );
};

export default CreatePoolV3;
