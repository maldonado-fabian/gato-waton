// Navbar.tsx
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold">Mi Aplicación</div>
          {/* Aquí puedes agregar tus enlaces de navegación */}
          <ul className="flex space-x-4">
            <li><a href="#" className="text-white">Inicio</a></li>
            <li><a href="#" className="text-white">Acerca</a></li>
            <li><a href="#" className="text-white">Contacto</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;