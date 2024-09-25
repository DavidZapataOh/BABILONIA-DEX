"use client";
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Registrar las escalas y componentes necesarios
ChartJS.register(
    CategoryScale,  
    LinearScale,    
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const StatsSection = () => {
  // Datos de ejemplo para el gráfico
    const data = {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
                label: 'Volumen de 24h (en millones)',
                data: [12, 19, 13, 15, 22, 30, 25],
                borderColor: '#00C896',
                backgroundColor: 'rgba(0, 200, 150, 0.1)',
                borderWidth: 2,
                fill: true,
            },
        ],
    };

    return (
        <section className="py-20 bg-background text-center">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-secondary mb-10">
                Estadísticas en Vivo
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="bg-elementBackground p-8 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-bold text-primary mb-4">
                            $12,345,678
                        </h3>
                        <p className="text-textSecondary">Liquidez Total</p>
                    </div>
                    <div className="bg-elementBackground p-8 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-bold text-primary mb-4">
                        $1,234,567
                        </h3>
                        <p className="text-textSecondary">Volumen 24h</p>
                    </div>
                    <div className="bg-elementBackground p-8 rounded-lg shadow-lg">
                        <h3 className="text-3xl font-bold text-primary mb-4">
                            1,234
                        </h3>
                        <p className="text-textSecondary">Transacciones Recientes</p>
                    </div>
                </div>
                <div className="mt-16 max-w-4xl mx-auto">
                    <Line data={data} />
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
