import { Header, Footer } from '@/components';
import Image from 'next/image';

export default function Leonardo5Anos() {
  return (
    <div className="flex flex-col min-h-screen bg-green-900 text-white">
      <Header />

      {/* Banner Principal */}
      <section className="relative w-full h-96 flex items-center justify-center">
        <Image 
          src="/banners/leonardo-banner.webp" 
          alt="Banner Aniversário Leonardo" 
          layout="fill" 
          objectFit="cover" 
          priority
        />
        <div className="absolute bottom-4 flex flex-col items-center text-center px-4">
          <h1 className="text-3xl font-extrabold text-white drop-shadow-lg border-2 border-white inline-block px-2 bg-black bg-opacity-70 rounded-lg">
            Leonardo 5 Anos
          </h1>
          <p className="text-lg font-semibold text-white drop-shadow-md mt-2 bg-black bg-opacity-70 inline-block px-2 rounded-lg">
            Missão: Celebrar com os Vingadores!
          </p>
        </div>
      </section>

      {/* Detalhes do Evento */}
      <section className="max-w-3xl mx-auto p-6 text-center">
        <p className="text-xl mb-4">Você foi convocado para uma missão especial no aniversário do Leonardo!</p>
        <div className="bg-green-700 p-4 rounded-lg">
          <p><strong>📍 Local:</strong> Parks & Games - Shopping Park Botucatu</p>
          <p>Av. Dr. José Amaro Faraldo, 1050 – Vila Real, Botucatu – SP</p>
          <p className="mt-2"><strong>📅 Data:</strong> 31/05/2025</p>
          <p><strong>⏰ Início:</strong> 18h30</p>
          <p><strong>🎂 Parabéns:</strong> 20h30</p>
        </div>
      </section>

      {/* Botões de Ação */}
      <section className="flex flex-col items-center gap-4 mb-10">
        <a href="https://wa.me/5514996947699" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full">
          Confirmar Presença no WhatsApp
        </a>
        <a href="https://www.google.com/maps/place/Parks+%26+Games+-+Shopping+Park+Botucatu/@-22.8835,-48.4432,17z" target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg">
          Ver Local no Google Maps
        </a>
      </section>

      <Footer />
    </div>
  );
}
