// components/TextInput.tsx
'use client'
import React, { useState } from 'react';

const TextInput = () => {
  const [inputText, setInputText] = useState('');

  // Função para remover pontos finais
  const removeFinalPeriods = (text) => {
    return text.endsWith('.') ? text.slice(0, -1) : text;
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div className="flex w-full flex-col items-center justify-center bg-gray-100">
      <div className="p-4 bg-white shadow-lg rounded-lg">
        <h1 className="text-xl font-semibold text-gray-800 mb-4">Entrada de Texto</h1>
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded w-full mb-4"
          placeholder="Digite algo..."
        />
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-700">Texto Sem Ponto Final:</h2>
          <p className="text-gray-600">{removeFinalPeriods(inputText)}</p>
        </div>
      </div>
    </div>
  );
};

export default TextInput;
