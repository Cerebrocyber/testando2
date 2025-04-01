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
          src='/assets/images/imagiluz.svg'
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

        <div className="bots">
          <Link href='tel:+5514996217032' className='flex gap-2 flex-center'>
            <Image src='/assets/images/bx1.svg' alt='' width={60} height={60} className='bot' />
          </Link>
          <Link href='https://api.whatsapp.com/send?phone=5514996217032&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20SmartCard' className='flex gap-2 flex-center'>
            <Image src='/assets/images/bx2.svg' alt='' width={60} height={60} className='bot' />
          </Link>
          <Link href='http://www.facebook.com/smartcardweb/' className='flex gap-2 flex-center'>
            <Image src='/assets/images/bx3.svg' alt='' width={60} height={60} className='bot' />
          </Link>
          <Link href='https://www.instagram.com/smartcardweb/' className='flex gap-2 flex-center'>
            <Image src='/assets/images/bx4.svg' alt='' width={60} height={60} className='bot' />
          </Link>
          <Link href='https://goo.gl/maps/J2Y53kaACZYtwgmaA?coh=178573&entry=tt' className='flex gap-2 flex-center'>
            <Image src='/assets/images/bx5.svg' alt='' width={60} height={60} className='bot' />
          </Link>
        </div>

        <Image src='/assets/images/qrcode.svg' alt='' width={120} height={120} className='qrcode' />

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

      </section>
    </div>
  );
};

export default Home;
