import Link from "next/link";
import Image from "next/image";

const Homecuruzu = () => (
  <div className='homecuruzu'>
    <div className="homecuruzu-background"></div>
    <section className='homecuruzu-content'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logocuruzu.webp'
          alt='logo'
          width={700}
          height={700}
          className='logocuruzu'
        />
      </Link>
      <p className="fraselogocuruzu">
        FAÇA JÁ SUA ENCOMENDA!
      </p>
      <br className='max-md:hidden' />
      <div className="bots">
        <Link href='tel:+551438133975' className='flex gap-2 flex-center'>
          <Image
            src='/assets/images/bx1.svg'
            alt=''
            width={60}
            height={60}
            className='bot'
          />
        </Link>
        <Link href='https://api.whatsapp.com/send?phone=5514996232860&text=Gostaria%20de%20fazer%20um%20pedido!' className='flex gap-2 flex-center'>
          <Image
            src='/assets/images/bx2.svg'
            alt=''
            width={60}
            height={60}
            className='bot'
          />
        </Link>
        <Link href='https://www.facebook.com/pasteldobairro/' className='flex gap-2 flex-center'>
          <Image
            src='/assets/images/bx3.svg'
            alt=''
            width={60}
            height={60}
            className='bot'
          />
        </Link>
        <Link href='https://www.instagram.com/pasteldobairrobtu/' className='flex gap-2 flex-center'>
          <Image
            src='/assets/images/bx4.svg'
            alt=''
            width={60}
            height={60}
            className='bot'
          />
        </Link>
        <Link href='https://www.google.com/maps/dir//Av.+Leonardo+Vilas+Boas,+2741+-+Vila+Nova+Botucatu,+Botucatu+-+SP,+18608-227/@-22.8684529,-48.5404603,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94c7209610ba62b1:0xfd982e6c798107e9!2m2!1d-48.4580587!2d-22.8684741?entry=ttu' className='flex gap-2 flex-center'>
          <Image
            src='/assets/images/bx5.svg'
            alt=''
            width={60}
            height={60}
            className='bot'
          />
        </Link>
      </div>
      <Image
        src='/assets/images/qrcode.svg'
        alt=''
        width={60}
        height={60}
        className='qrcode'
      />
      <Link href='/pastelariacuruzumenu'>
        <span className="button">
          <p className="textbtcuruzu">CARDÁPIO</p>
        </span>           
      </Link>      
    </section>
  </div>
);

export default Homecuruzu;
