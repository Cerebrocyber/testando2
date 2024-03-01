import Link from "next/link";
import Image from "next/image";

const Home = () => (
  <div className='homejacoia'>
    <div className="homejacoia-background"></div>
    <section className='homejacoia-content'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logojacoia.webp'
          alt='logo'
          width={700}
          height={700}
          className='logojacoia'
        />
      </Link>
      <p className="fraselogojacoia">
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
        <Link href='https://api.whatsapp.com/send?phone=5514997468187&text=Gostaria%20de%20fazer%20um%20pedido' className='flex gap-2 flex-center'>
          <Image
            src='/assets/images/bx2.svg'
            alt=''
            width={60}
            height={60}
            className='bot'
          />
        </Link>
        <Link href='https://www.facebook.com/jacoialanches' className='flex gap-2 flex-center'>
          <Image
            src='/assets/images/bx3.svg'
            alt=''
            width={60}
            height={60}
            className='bot'
          />
        </Link>
        <Link href='https://www.instagram.com/jacoia.burgers/' className='flex gap-2 flex-center'>
          <Image
            src='/assets/images/bx4.svg'
            alt=''
            width={60}
            height={60}
            className='bot'
          />
        </Link>
        <Link href='https://www.google.com/maps?sca_esv=bd6b57e9623f4453&output=search&q=Rua+Br%C3%A1z+de+Assis,+279,+Botucatu,+SP,+Brazil&source=lnms&entry=mc' className='flex gap-2 flex-center'>
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
      <Link href='/jacoiaburguersmenu'>
        <span className="button">
          <p className="textbtpastel">CARDÁPIO</p>
        </span>           
      </Link>      
    </section>
  </div>
);

export default Home;
