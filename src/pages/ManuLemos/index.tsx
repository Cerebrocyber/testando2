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
              src='/assets/images/manu.png'
              alt='logo'
              fill
              className='logosmart'
              style={{ objectFit: 'contain' }}
            />
          </div>
        </Link>

        <p className="nome-cliente">
          MANU
        </p>

        <Image src='/assets/images/qrmanu.png' alt='' width={120} height={120} className='qrcode' />

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
            <span>Uma música feita com amor só para Manu!</span>
          </div>
        </div>

        {/* Player de áudio */}
        <audio ref={audioRef} src="/assets/music2.mp3" />

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