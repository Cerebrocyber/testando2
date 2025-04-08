import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between bg-white text-black p-6">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-10 mt-10">
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl font-bold leading-tight mb-4 text-gray-900">
            Toda história<br />
            <span className="text-yellow-500">pode brilhar.</span><br />
            A sua também.
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Dê vida às suas ideias com músicas, brindes e convites que encantam.
          </p>
          <div className="flex gap-4">
            <Link href="#servicos">
              <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg shadow hover:scale-105 transition-all">
                Ver serviços
              </button>
            </Link>
            <Link href="/sobre">
              <button className="bg-gray-200 text-black font-bold py-2 px-6 rounded-lg shadow hover:scale-105 transition-all">
                Sobre nós
              </button>
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
      <section id="servicos" className="mt-24 max-w-6xl w-full">
        <h2 className="text-2xl font-bold text-center mb-10">Serviços em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Música para Crianças",
              desc: "Uma canção só dela. Com nome, emoção e carinho.",
              img: "/assets/images/musica-criancas.webp",
              link: "/musicas-para-criancas",
            },
            {
              title: "Jingles Comerciais",
              desc: "Sua marca com voz própria. A música que conecta e vende.",
              img: "/assets/images/jingles.webp",
              link: "/jingles-comerciais",
            },
            {
              title: "Brindes Personalizados",
              desc: "Lembranças que encantam.",
              img: "/assets/images/brindes.webp",
              link: "/brindes-personalizados",
            },
            {
              title: "Convites com brilho",
              desc: "Para crianças, adultos e empresas.",
              img: "/assets/images/convites.webp",
              link: "/convites-digitais",
            },
          ].map((item, index) => (
            <Link key={index} href={item.link}>
              <div className="bg-gray-100 p-4 rounded-lg shadow text-center hover:scale-105 transition-all flex flex-col items-center">
                <div className="w-full flex justify-center">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="rounded mb-4"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 mb-4">{item.desc}</p>
                <button className="bg-yellow-400 text-black font-bold py-1 px-4 rounded">
                  Conheça
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Rodapé */}
      <footer className="text-sm text-gray-500 text-center mt-24 mb-6">
        <p>© 2025 Imagiluz. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}