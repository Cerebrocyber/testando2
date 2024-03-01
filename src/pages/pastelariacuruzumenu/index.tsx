import Image from "next/image";
import Link from "next/link";

const Pastelariacuruzumenu = () => (
  <section className='teste-content'>
   <div className="imageteste-container">
    <Image
      src='/assets/images/curuzumenu1.webp'
      alt=''
      width={700}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/curuzumenu2.webp'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/curuzumenu3.webp'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/curuzumenu4.webp'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/curuzumenu5.webp'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/curuzumenu6.webp'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/curuzumenu7.webp'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/curuzumenu8.webp'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/curuzumenu9.webp'
      alt=''
      width={650}
      height={150} /* Defina a altura desejada */
      className='pastelmenu-image'
    />
    <Image
      src='/assets/images/curuzumenu10.webp'
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

export default Pastelariacuruzumenu;
