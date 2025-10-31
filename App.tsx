
import React, { useState, useEffect, useRef } from 'react';
import Countdown from './components/Countdown';
import GeminiWish from './components/GeminiWish';
import { CalendarIcon, ClockIcon, LocationIcon, GiftIcon, DressIcon, ChurchIcon, MusicOnIcon, MusicOffIcon, WhatsAppIcon, MapPinIcon } from './components/Icons';

const Sparkles: React.FC = () => {
  useEffect(() => {
    const createSparkle = (e: MouseEvent) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      document.body.appendChild(sparkle);

      const size = Math.random() * 8 + 4;
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;

      const x = e.pageX;
      const y = e.pageY;
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;

      setTimeout(() => {
        sparkle.remove();
      }, 1000);
    };

    window.addEventListener('mousemove', createSparkle);
    return () => window.removeEventListener('mousemove', createSparkle);
  }, []);

  return null;
};


const Section: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = '' }) => (
  <div className={`bg-white bg-opacity-10 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-8 my-6 border border-white border-opacity-20 transform transition-all duration-500 hover:scale-105 ${className}`}>
    {children}
  </div>
);

const App: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.log("Audio playback failed:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const targetDate = new Date('2025-06-14T18:00:00');

  return (
    <>
      <Sparkles />
      <div className="min-h-screen bg-cover bg-center bg-fixed text-white" style={{ backgroundImage: "url('https://picsum.photos/seed/disneycastle/1920/1080')" }}>
        <div className="min-h-screen bg-gradient-to-b from-black/50 via-purple-900/60 to-pink-900/70 p-4 md:p-8">
          <main className="max-w-3xl mx-auto">
            <header className="text-center py-10">
              <h2 className="text-2xl md:text-3xl font-light text-pink-200 text-glow">Mis XV Años</h2>
              <h1 className="font-handwriting text-7xl md:text-9xl my-4 text-glow animated-shimmer">Isabella Sofía</h1>
              <p className="text-lg md:text-xl text-pink-100 italic">"Donde los sueños se hacen realidad."</p>
            </header>

            <Section>
              <div className="text-center text-rose-100">
                <p className="text-lg leading-relaxed">
                  Con la bendición de Dios y el amor de mis padres, tengo el honor de invitarte a celebrar conmigo mis <strong>XV años</strong>, un sueño hecho realidad. Te espero para compartir esta noche mágica llena de princesas, luces y felicidad.
                </p>
              </div>
            </Section>

            <Countdown targetDate={targetDate} />
            
            <Section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <ChurchIcon className="w-12 h-12 text-pink-300 mb-2" />
                  <h3 className="text-xl font-bold text-pink-200">Ceremonia Religiosa</h3>
                  <p className="text-rose-100">Parroquia de Nuestra Señora de los Cielos</p>
                  <p className="text-rose-100">5:00 p.m.</p>
                  <a href="https://www.google.com/maps/search/?api=1&query=Calle+Aurora+123,Ciudad+Mágica,MX" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center text-sm bg-pink-500 hover:bg-pink-600 transition-colors text-white font-bold py-2 px-4 rounded-full">
                    <MapPinIcon className="w-4 h-4 mr-2" /> Ver Ubicación
                  </a>
                </div>
                 <div className="flex flex-col items-center">
                  <LocationIcon className="w-12 h-12 text-pink-300 mb-2" />
                  <h3 className="text-xl font-bold text-pink-200">Recepción</h3>
                  <p className="text-rose-100">Salón "Encantado de Disney Dreams"</p>
                   <p className="text-rose-100">6:00 p.m.</p>
                  <a href="https://www.google.com/maps/search/?api=1&query=Calle+de+los+Sueños+777,Ciudad+Mágica,MX" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center text-sm bg-pink-500 hover:bg-pink-600 transition-colors text-white font-bold py-2 px-4 rounded-full">
                    <MapPinIcon className="w-4 h-4 mr-2" /> Ver Ubicación
                  </a>
                </div>
              </div>
               <div className="flex flex-col items-center mt-6 border-t border-white/20 pt-6">
                  <CalendarIcon className="w-8 h-8 text-pink-300 mb-2" />
                  <p className="text-lg font-bold">Sábado 14 de Junio de 2025</p>
              </div>
            </Section>

            <Section>
              <div className="flex flex-col md:flex-row justify-around items-center gap-6">
                <div className="text-center">
                  <DressIcon className="w-12 h-12 text-pink-300 mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-pink-200">Código de Vestimenta</h3>
                  <p className="text-rose-100">Formal Elegante</p>
                </div>
                <div className="text-center">
                  <GiftIcon className="w-12 h-12 text-pink-300 mx-auto mb-2" />
                  <h3 className="text-xl font-bold text-pink-200">Mesa de Regalos</h3>
                  <p className="text-rose-100">En "Fantasía Boutique"</p>
                  <p className="text-rose-100 text-sm">(o depósito en tarjeta mágica ✨)</p>
                </div>
              </div>
            </Section>
            
            <Section>
              <h3 className="text-2xl font-bold text-center text-pink-200 mb-4">Confirmar Asistencia</h3>
              <p className="text-center text-rose-100 mb-4">Por favor confirma antes del 30 de Mayo de 2025.</p>
              <a href="https://wa.me/5215512345678?text=Hola!%20Confirmo%20mi%20asistencia%20a%20los%20XV%20de%20Isabella%20Sofía." target="_blank" rel="noopener noreferrer" className="w-full max-w-sm mx-auto flex items-center justify-center gap-3 bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105">
                <WhatsAppIcon className="w-6 h-6" /> Confirmar por WhatsApp
              </a>
            </Section>
            
            <GeminiWish />

            <footer className="text-center py-8 text-pink-200">
              <p>¡Ven y sé parte de este mágico cuento! 🌟</p>
            </footer>
          </main>
        </div>
        <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" loop />
        <button
          onClick={toggleMusic}
          className="fixed bottom-4 right-4 bg-pink-500/80 backdrop-blur-sm text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition-all transform hover:scale-110 focus:outline-none"
          aria-label="Toggle Music"
        >
          {isPlaying ? <MusicOffIcon className="w-6 h-6" /> : <MusicOnIcon className="w-6 h-6" />}
        </button>
      </div>
    </>
  );
};

export default App;
