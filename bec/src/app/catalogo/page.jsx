import React from 'react'

const page = () => {
  return (
    <div>
            <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-white text-lg font-bold">Logo</a>

        {/* Menú de navegación */}
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-white hover:text-gray-300">Inicio</a>
          </li>
          <li>
            <a href="/about" className="text-white hover:text-gray-300">Acerca de</a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-300">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default page