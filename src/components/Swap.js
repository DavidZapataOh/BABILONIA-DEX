"use client";
import React, { useState, useEffect } from 'react';
import { FaExchangeAlt, FaCog } from 'react-icons/fa';
import { Listbox, Transition, Dialog } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

const tokens = [
    { id: 1, name: 'AVAX', symbol: 'AVAX', image: 'https://cryptologos.cc/logos/avalanche-avax-logo.png?v=024' },
    { id: 2, name: 'USDT', symbol: 'USDT', image: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=024' },
    { id: 3, name: 'BTC', symbol: 'BTC', image: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=024' },
];

const slippages = ['0.1%', '0.5%', '1%', 'Personalizado'];

const Swap = () => {
    const [fromToken, setFromToken] = useState(tokens[0]);
    const [toToken, setToToken] = useState(tokens[1]);
    const [amount, setAmount] = useState('');
    const [slippage, setSlippage] = useState(slippages[0]);
    const [customSlippage, setCustomSlippage] = useState(''); 
    const [isSettingsOpen, setIsSettingsOpen] = useState(false); 
    const [isTokenModalOpen, setIsTokenModalOpen] = useState(false);
    const [searchToken, setSearchToken] = useState(''); 
    const [activeField, setActiveField] = useState(null);
    const [conversionRate, setConversionRate] = useState(0);
    const [realUSDValue, setRealUSDValue] = useState(0);
    const [estimatedGas, setEstimatedGas] = useState(0);

    useEffect(() => {
        if (!isTokenModalOpen) {
            setSearchToken('');
        }
    }, [isTokenModalOpen]);

    const handleSwap = () => {
        let finalSlippage = slippage === 'Personalizado' ? customSlippage : slippage;
        alert(`Swapping ${amount} ${fromToken.symbol} to ${toToken.symbol} with ${finalSlippage}% slippage`);
    };

    const handleTokenSelect = (token) => {
        if (activeField === 'from') {
            if (token.symbol === toToken.symbol) {
                setToToken(fromToken);
            }
            setFromToken(token);
        } else if (activeField === 'to') {
            if (token.symbol === fromToken.symbol) {
                setFromToken(toToken);
            }
            setToToken(token);
        }
        setIsTokenModalOpen(false);
    };

    const getConversionRate = (fromToken, toToken) => {
        if (fromToken.symbol === 'AVAX' && toToken.symbol === 'USDT') {
            setConversionRate(20); 
            setRealUSDValue(20); 
        } else {
            setConversionRate(1); 
            setRealUSDValue(1);
        }
    };

    useEffect(() => {
        getConversionRate(fromToken, toToken);
    }, [fromToken, toToken]);

    const estimateGas = () => {
        setEstimatedGas(0.002); 
    };

    useEffect(() => {
        estimateGas();
    }, [fromToken, toToken, amount]);

    return (
        <section className="min-h-screen bg-background flex flex-col py-20 items-center justify-center">
            <div className="w-full max-w-lg bg-elementBackground p-8 rounded-[40px_10px_40px_10px] shadow-2xl transform hover:scale-105 transition-all duration-500">
                <div className="flex justify-between mb-6">
                    <h1 className="text-3xl font-bold text-secondary">Swap Tokens</h1>
                    <button
                        onClick={() => setIsSettingsOpen(true)}
                        className="text-textSecondary hover:text-primary transition-colors"
                    >
                        <FaCog className="w-6 h-6" />
                    </button>
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
                            <Dialog.Title className="text-secondary text-lg font-bold">Configuración de Slippage</Dialog.Title>
                            <Dialog.Description className="text-textSecondary mt-2">Ajusta la tolerancia de slippage para tus transacciones.</Dialog.Description>
                            <Listbox value={slippage} onChange={setSlippage}>
                                <div className="relative mt-4">
                                    <Listbox.Button className="relative w-full cursor-default bg-background p-4 text-left shadow-md rounded-lg text-secondary">
                                        <span>{slippage}</span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                            <ChevronUpDownIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                                        </span>
                                    </Listbox.Button>
                                    <Transition as={Fragment}>
                                        <Listbox.Options className="absolute w-full mt-1 bg-background max-h-60 rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                                            {slippages.map((slip, index) => (
                                                <Listbox.Option
                                                    key={index}
                                                    className="cursor-default select-none relative p-2 hover:bg-gray-700 text-white"
                                                    value={slip}
                                                >
                                                    <span className={`block truncate ${slip === slippage ? 'font-bold' : ''}`}>{slip}</span>
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </div>
                            </Listbox>

                            {/* Input para slippage personalizado */}
                            {slippage === 'Personalizado' && (
                                <div className="mt-4">
                                    <label className="block text-textSecondary mb-2">Slippage Personalizado (%)</label>
                                    <input
                                        type="number"
                                        value={customSlippage}
                                        onChange={(e) => setCustomSlippage(e.target.value)}
                                        placeholder="0.00"
                                        className="w-full p-3 rounded-lg bg-background text-secondary border-0 focus:ring-primary focus:border-primary"
                                    />
                                </div>
                            )}

                            <button
                                onClick={() => setIsSettingsOpen(false)}
                                className="mt-6 bg-primary w-full py-2 rounded-lg text-background font-bold text-lg hover:bg-accent transition"
                            >     
                                Guardar
                            </button>
                        </Dialog.Panel>
                    </div>
                </Dialog>

                {/* Token de entrada */}
                <div className="relative mb-6">
                    <label className="block text-textSecondary mb-2">De</label>
                    <div className="flex items-center bg-background p-0 rounded-[30px_5px_30px_5px] shadow-lg transition-shadow hover:shadow-2xl transform hover:-translate-y-1 duration-300">
                        <button
                            onClick={() => {
                                setIsTokenModalOpen(true);
                                setActiveField('from'); // Identifica el campo activo
                            }}
                            className="relative w-full cursor-pointer bg-background text-left shadow-md rounded-[20px_5px_20px_5px] text-secondary border-2 border-primary p-4"
                        >
                            <span className="flex items-center">
                                <img src={fromToken.image} alt="" className="w-6 h-6 mr-2 rounded-full border-2 border-accent" />
                                {fromToken.symbol}
                            </span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <ChevronUpDownIcon className="w-5 h-5 text-primary" aria-hidden="true" />
                            </span>
                        </button>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0.00"
                            className="ml-4 w-1/2 p-2 rounded-lg bg-background text-secondary border-0 focus:ring-primary focus:border-primary"
                        />
                    </div>
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

                {/* Botón de Intercambio */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <button
                    onClick={() => {
                        setFromToken(toToken);
                        setToToken(fromToken);
                        setAmount(prevAmount => {
                            return prevAmount; 
                        });
                    }}
                    className="p-2 rotate-90 mt-2 bg-secondary rounded-full shadow-lg hover:bg-primary transition transform hover:scale-110"
                    >
                        <FaExchangeAlt className="text-background w-5 h-5" />
                    </button>
                </div>

                {/* Token de salida */}
                <div className="relative mb-6">
                    <label className="block text-textSecondary mb-2">A</label>
                    <div className="flex items-center bg-background p-0 rounded-[30px_5px_30px_5px] transition-shadow shadow-inner hover:shadow-2xl transform hover:-translate-y-1 duration-300 border-accent">
                        <button
                            onClick={() => {
                                setIsTokenModalOpen(true);
                                setActiveField('to'); // Identifica el campo activo
                            }}
                            className="relative w-full cursor-pointer bg-background text-left shadow-md rounded-[20px_5px_20px_5px] text-secondary border-2 border-primary p-4"
                        >
                            <span className="flex items-center">
                                <img
                                    src={toToken.image}
                                    alt=""
                                    className="w-6 h-6 mr-2 rounded-full border-2 border-accent"
                                />
                                {toToken.symbol}
                            </span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                <ChevronUpDownIcon className="w-5 h-5 text-primary" aria-hidden="true" />
                            </span>
                        </button>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="0.00"
                            className="ml-4 w-1/2 p-2 rounded-lg bg-background text-secondary border-0 focus:ring-primary focus:border-primary "
                        />
                    </div>

                    {/* Mostrar tasa de conversión */}
                    <div className="flex items-center mt-2 text-sm text-textSecondary bg-background p-2 rounded-md shadow-md">
                        <span className="mr-1">
                            <i className="fas fa-exchange-alt text-primary"></i>
                        </span>
                        <span>1 {toToken.symbol} = {conversionRate} {fromToken.symbol} ({realUSDValue} USD)</span>
                    </div>
                </div>

                {/* Botón de Swap */}
                <button
                    onClick={handleSwap}
                    className="w-full py-3 rounded-[20px_5px_20px_5px] bg-gradient-to-r from-primary to-accent text-background font-bold text-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
                >
                    <FaExchangeAlt className="inline-block mr-2" /> Swap
                </button>
            </div>
        
            <div className="max-w-lg mt-4 bg-background p-2 rounded-md shadow-lg border border-primary">
                <span className="text-textSecondary text-sm">
                    <i className="fas fa-gas-pump text-primary mr-2"></i>
                    Estimación de gas:
                </span>
                <span className="text-secondary font-semibold ml-2">{estimatedGas} AVAX</span>
            </div>
        </section>
    );
};

export default Swap;
