import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black/80 text-red-500 shadow-[0_0_25px_rgba(255,0,0,0.4)] border border-red-700 rounded-3xl mx-4 mt-4 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between rounded-2xl">
        {/* Logo / Título */}
        <h1 className="text-2xl font-extrabold tracking-wide hover:text-white transition-all duration-300 rounded-xl px-3 py-1">
          🔻 NexusCore
        </h1>

        {/* Links */}
        <ul className="flex space-x-6 text-sm font-semibold bg-black/30 px-4 py-2 rounded-full shadow-inner border border-red-500">
          <li className="hover:text-white transition duration-300 cursor-pointer px-3 py-1 rounded-xl hover:bg-red-600/20">
            Inicio
          </li>
          <li className="hover:text-white transition duration-300 cursor-pointer px-3 py-1 rounded-xl hover:bg-red-600/20">
            Servicios
          </li>
          <li className="hover:text-white transition duration-300 cursor-pointer px-3 py-1 rounded-xl hover:bg-red-600/20">
            Contacto
          </li>
        </ul>

        {/* Botón */}
        <button className="bg-black text-red-500 font-extrabold py-2 px-6 rounded-full border-2 border-red-600 shadow-[0_0_20px_rgba(255,0,0,0.6)] hover:text-white hover:border-red-400 hover:shadow-[0_0_30px_rgba(255,50,50,0.8)] active:translate-y-1 active:shadow-[0_0_10px_rgba(255,0,0,0.3)] transition-all duration-300">
          🔥 Iniciar
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
