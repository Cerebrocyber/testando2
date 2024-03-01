import Image from "next/image";
import Link from "next/link";

const Pasteldobairro = () => (
  <section className='teste-content'>
   <div className="imageteste-container">
    <Image
      src='/assets/images/pastelmenu1.webp'
      alt=''
      width={700}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/pastelmenu2.webp'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/pastelmenu3.webp'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/pastelmenu4.webp'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/pastelmenu5.webp'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/pastelmenu6.webp'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
  </div>
  <div className="whatsbot">
    <Link href='https://api.whatsapp.com/send?phone=5514996232860&text=Gostaria%20de%20fazer%20um%20pedido!'>
        <Image
          src='/assets/images/whats.webp'
          alt='logo'
          width={100}
          height={100}
          className='whatsb'
        />
    </Link>
    </div>
  </section>
 );

export default Pasteldobairro;
