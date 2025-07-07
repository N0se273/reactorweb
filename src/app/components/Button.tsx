import React from 'react';

const Button = () => {
  return (
    <button className="relative inline-block bg-black text-red-500 font-extrabold py-3 px-10 rounded-2xl border-2 border-red-600 shadow-[0_0_20px_rgba(255,0,0,0.5)] hover:text-white hover:border-red-400 hover:shadow-[0_0_30px_rgba(255,50,50,0.8)] active:translate-y-1 active:shadow-[0_0_10px_rgba(255,0,0,0.3)] transition-all duration-300 overflow-hidden z-10 before:absolute before:inset-0 before:rounded-2xl before:border before:border-red-500 before:opacity-30 before:blur before:z-[-1]">
      🔥 Activar Protocolo
    </button>
  );
};

export default Button;
