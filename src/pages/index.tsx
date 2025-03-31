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
          <Image
            src='/assets/images/smartcard.webp'
            alt='logo'
            width={700}
            height={700}
            className='logosmart'
          />
        </Link>

        <p className="fraselogo">
          CARTÕES DIGITAIS INTERATIVOS
        </p>

        <br className='max-md:hidden' />

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

        <Image src='/assets/images/qrcode.svg' alt='' width={60} height={60} className='qrcode' />

        {/* Player de áudio */}
        <audio ref={audioRef} src="/assets/Ring_gremlins.mp3" />

        <div className="player-buttons" style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
          <button onClick={play} className="button"><p className="textbt">Play</p></button>
          <button onClick={pause} className="button"><p className="textbt">Pause</p></button>
          <button onClick={resetAndPlay} className="button"><p className="textbt">Reset</p></button>
        </div>

        <Link href='pasteldobairro' className='flex gap-2 flex-center' style={{ color: 'yellow' }}>
          <h1>P</h1>
        </Link>
        <Link href='jacoiaburguers' className='flex gap-2 flex-center' style={{ color: 'yellow' }}>
          <h1>J</h1>
        </Link>
        <Link href='pastelariacuruzu' className='flex gap-2 flex-center' style={{ color: 'yellow' }}>
          <h1>C</h1>
        </Link>
      </section>
    </div>
  );
};

export default Home;
