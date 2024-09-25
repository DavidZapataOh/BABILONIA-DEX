import React from 'react';
import { FaExchangeAlt, FaCoins, FaChartPie } from 'react-icons/fa';

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaExchangeAlt className="text-primary text-5xl mb-4" />,
      title: 'Intercambia Tokens',
      description:
        'Realiza intercambios rápidos y seguros con comisiones bajas en la red Avalanche. Fácil y transparente.',
    },
    {
      icon: <FaCoins className="text-primary text-5xl mb-4" />,
      title: 'Añadir Liquidez',
      description:
        'Contribuye con liquidez y gana recompensas. Gestiona tus posiciones en tiempo real y visualiza el rendimiento de tu inversión.',
    },
    {
      icon: <FaChartPie className="text-primary text-5xl mb-4" />,
      title: 'Explora Pools',
      description:
        'Revisa estadísticas y datos históricos de los pools para tomar decisiones informadas antes de participar.',
    },
  ];

  return (
    <section className="py-20 bg-background text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-secondary mb-10">
          ¿Qué puedes hacer en Babilonia?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-elementBackground p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-secondary mb-2">
                {feature.title}
              </h3>
              <p className="text-textSecondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
