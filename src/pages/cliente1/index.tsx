
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

    <Link href='/' className='flex gap-2 flex-center'>
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
        
    {/* <p className="fraselogo">
          ---
        </p> */}

    {/*<br className='max-md:hidden' /> */}
        
        <Image src='/assets/images/qrcode.svg' alt='' width={120} height={120} className='qrcode' />
        <p className="qr-text">Escaneie para ouvir no celular!</p>

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

        <footer className="footer">
          © 2025 Imagiluz. Todos os direitos reservados.
        </footer>

      </section>
    </div>
  );
};

export default Home;

