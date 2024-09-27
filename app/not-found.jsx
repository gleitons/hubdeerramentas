// components/UnderConstruction.tsx
import React from 'react';
import { FaTools } from 'react-icons/fa'; // Usando react-icons para um ícone de ferramenta

const UnderConstruction =  () => {
  return (
    <div className="flex w-full p-10 items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <FaTools className="mx-auto text-6xl text-yellow-500 mb-4" />
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">
          Ferramenta em Construção
        </h1>
        <p className="text-gray-600">
          Estamos trabalhando duro para trazer essa funcionalidade em breve.
        </p>
      </div>
    </div>
  );
};

export default UnderConstruction;
