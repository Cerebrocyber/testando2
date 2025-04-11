// HomePage.jsx
import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "@/components";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-fundoGeral text-textoPrincipal">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6 gap-10 mt-10">
        <div className="md:w-1/2 text-left">
          <h1 className="text-tituloGrande font-bold leading-tight mb-4 text-titulo">
            Toda história<br />
            <span className="text-secundario">pode brilhar.</span><br />
            A sua também.
          </h1>
          <p className="text-lg text-textoSecundario mb-6">
            Dê vida às suas ideias com músicas, brindes e convites que encantam.
          </p>
          <div className="flex gap-4">
            <Link href="#servicos" className="bg-primario text-white font-bold py-2 px-6 rounded shadow hover:scale-105 transition-all">
              Ver serviços
            </Link>
            <Link href="/sobre" className="bg-fundoCard text-black font-bold py-2 px-6 rounded shadow hover:scale-105 transition-all">
              Sobre nós
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/assets/images/hero-familia.webp"
            alt="Família ouvindo música"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Serviços em Destaque */}
      <section id="servicos" className="mt-24 max-w-6xl w-full mx-auto px-6">
        <h2 className="text-2xl font-bold text-center mb-10">Serviços em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Música para Crianças", desc: "Uma canção só dela. Com nome, emoção e carinho.", img: "/assets/images/musica-criancas.webp", link: "/musicas-para-criancas" },
            { title: "Jingles Comerciais", desc: "Sua marca com voz própria. A música que conecta e vende.", img: "/assets/images/jingles.webp", link: "/jingles-comerciais" },
            { title: "Brindes Personalizados", desc: "Lembranças que encantam.", img: "/assets/images/brindes.webp", link: "/brindes-personalizados" },
            { title: "Convites com brilho", desc: "Para crianças, adultos e empresas.", img: "/assets/images/convites.webp", link: "/convites-digitais" }
          ].map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="bg-fundoCard p-4 rounded-xl shadow-md border-l-4 border-primario hover:scale-105 transition-all"
            >
              <div className="bg-white p-4 rounded shadow-sm text-center flex flex-col items-center">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="rounded mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-titulo">{item.title}</h3>
                <p className="text-sm text-textoSecundario mb-4">{item.desc}</p>
                <span className="bg-primario text-white font-bold py-1 px-4 rounded">
                  Conheça
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Botão WhatsApp */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://api.whatsapp.com/send?phone=5514998237788&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20Imagiluz."
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
      </section>

      <Footer />
    </div>
  );
}
