import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark p-4 text-center">
      <div className="container mx-auto text-secondary">
        <p>&copy; {new Date().getFullYear()} Babilonia DEX. Todos los derechos reservados.</p>
        <p className="mt-2">
          <a href="/terms" className="hover:text-primary">Términos y Condiciones</a> | 
          <a href="/privacy" className="hover:text-primary"> Política de Privacidad</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
