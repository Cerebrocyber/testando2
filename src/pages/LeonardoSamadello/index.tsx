'use client'

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const play = () => {
    audioRef.current?.play();
  };

  const pause = () => {
    audioRef.current?.pause();
  };

  const resetAndPlay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  return (
    <div className='homepage'>
      <div className="homepage-background"></div>
      <section className='homepage-content'>

        <Link href='/cliente1' className='flex gap-2 flex-center'>
          <div className="logo-container">
            <Image
              src='/assets/images/leo.svg'
              alt='logo'
              fill
              className='logosmart'
              style={{ objectFit: 'contain' }}
            />
          </div>
        </Link>

        <p className="nome-cliente">
          LEONARDO
        </p>

        <Image src='/assets/images/qr-code-leonardo.png' alt='' width={120} height={120} className='qrcode' />

        <div className="qr-text">
          <p>Escaneie para ouvir no celular!</p>
          <div className="text-white text-sm mt-1 flex items-center justify-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path d="M9 3v12.56A4 4 0 1 0 11 19V8h7V3H9z" />
            </svg>
            <span>Uma música feita com amor só para Leonardo!</span>
          </div>
        </div>

        {/* Player de áudio */}
        <audio ref={audioRef} src="/assets/music1.mp3" />

        <div className="player-buttons">
          <button onClick={play} className="button">
            <span style={{ fontSize: '22px' }}>▶️</span>
            <span>PLAY</span>
          </button>

          <button onClick={pause} className="button">
            <span style={{ fontSize: '22px' }}>⏸️</span>
            <span>PAUSE</span>
          </button>

          <button onClick={resetAndPlay} className="button">
            <span style={{ fontSize: '22px' }}>🔁</span>
            <span>RESET</span>
          </button>
        </div>

        {/* Botão WhatsApp */}
        <div className="mt-6">
          <a
            href="https://api.whatsapp.com/send?phone=5514998237788&text=Ol%C3%A1!%20Tenho%20interesse%20em%20criar%20uma%20m%C3%BAsica%20personalizada%20com%20a%20Imagiluz.%20Pode%20me%20ajudar%20a%20come%C3%A7ar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-2 px-4 rounded-full shadow-md hover:scale-105 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              width="20"
              height="20"
              fill="white"
            >
              <path d="M16 .027C7.164.027.027 7.164.027 16c0 2.82.738 5.59 2.144 8.02L.027 32l8.176-2.125A15.875 15.875 0 0 0 16 31.973c8.836 0 15.973-7.137 15.973-15.973C31.973 7.164 24.836.027 16 .027zm0 29.293a13.2 13.2 0 0 1-6.718-1.84l-.48-.282-4.854 1.262 1.292-4.723-.312-.485A13.165 13.165 0 0 1 2.706 16c0-7.326 5.967-13.293 13.293-13.293S29.293 8.674 29.293 16 23.326 29.32 16 29.32zm7.2-10.636c-.396-.198-2.34-1.157-2.703-1.29-.364-.133-.63-.198-.897.2-.267.396-1.03 1.29-1.262 1.557-.231.267-.464.3-.86.1-.396-.198-1.672-.616-3.183-1.963-1.177-1.05-1.972-2.347-2.205-2.743-.231-.396-.026-.61.173-.808.178-.177.396-.464.594-.696.198-.231.264-.396.396-.66.132-.267.066-.498-.033-.696-.1-.198-.897-2.16-1.23-2.97-.324-.792-.654-.684-.897-.696-.231-.01-.498-.012-.765-.012-.267 0-.696.1-1.06.498-.364.396-1.39 1.358-1.39 3.307 0 1.95 1.423 3.833 1.622 4.1.198.267 2.797 4.266 6.78 5.983 3.983 1.717 3.983 1.144 4.7 1.066.72-.079 2.34-.954 2.673-1.875.33-.92.33-1.713.231-1.875-.1-.165-.36-.264-.756-.462z"/>
            </svg>
            <span>Saiba mais</span>
          </a>
        </div>

        <footer className="footer">
          <p>© 2025 Imagiluz. Todos os direitos reservados.</p>
          <a href="https://imagiluz.com.br" target="_blank" rel="noopener noreferrer">
            <img src="/assets/images/imagiluz-sol-branco.svg" alt="Logo Imagiluz" className="footer-logo" />
          </a>
        </footer>

      </section>
    </div>
  );
};

export default Home;