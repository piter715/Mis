
import React, { useState, useCallback } from 'react';
import { generateWish } from '../services/gemini';
import { SparklesIcon, LoadingIcon } from './Icons';

const GeminiWish: React.FC = () => {
  const [wish, setWish] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleGenerateWish = useCallback(async () => {
    setIsLoading(true);
    setError('');
    setWish('');
    try {
      const newWish = await generateWish("Isabella Sofía");
      setWish(newWish);
    } catch (err) {
      setError('No se pudo crear un deseo mágico en este momento. ¡Inténtalo de nuevo!');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 my-6 border border-white border-opacity-20 text-center">
      <h3 className="text-2xl font-bold text-pink-200 mb-4 animated-shimmer">Generador de Deseos Mágicos</h3>
      <p className="text-rose-100 mb-6">Pide a nuestra hada madrina digital que cree un deseo especial para la quinceañera.</p>
      
      <button
        onClick={handleGenerateWish}
        disabled={isLoading}
        className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <LoadingIcon className="w-5 h-5 animate-spin" />
            Creando Magia...
          </>
        ) : (
          <>
            <SparklesIcon className="w-5 h-5" />
            Generar un Deseo
          </>
        )}
      </button>

      {wish && (
        <div className="mt-6 p-4 bg-white/20 rounded-lg border border-white/30">
          <p className="text-lg italic text-white text-glow">"{wish}"</p>
        </div>
      )}
      {error && <p className="mt-4 text-red-300">{error}</p>}
    </div>
  );
};

export default GeminiWish;
