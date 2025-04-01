import Image from "next/image";

const Constru = () => (
    <section className='homepastel-content'>
      <Image
        src='/assets/images/constru.webp'
        alt=''
        width={650}
        height={650}
        className='constru'
      />      
      <p className="fraseconstru">
        <h1>EM MANUTENÇÃO!!</h1>
      </p>
    </section>
);

export default Constru;
