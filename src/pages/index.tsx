
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-6">
      {/* Hero Section */}
      <section className="text-center mt-10">
        <Image
          src="/assets/images/imagiluz.svg"
          alt="Logo Imagiluz"
          width={120}
          height={120}
          className="mx-auto mb-4 logo-float"
        />

        {/* <h1 className="text-3xl font-bold mb-2">IMAGILUZ</h1> */}
        <p className="text-lg max-w-md mx-auto">
          A magia de aprender brincando em forma de música personalizada.
        </p>
        <Link href="#contato">
          <button className="mt-6 bg-white text-yellow-700 font-bold py-2 px-6 rounded-lg shadow-md hover:scale-105 transition-all">
            Quero meu projeto
          </button>
        </Link>
      </section>

      {/* Sobre o Projeto */}
      <section className="mt-16 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4">O que é o projeto Imagiluz?</h2>
        <p className="text-base">
          Criamos páginas interativas com músicas personalizadas para crianças,
          presentes, eventos e datas especiais. Cada projeto é único e feito com
          muito carinho.
        </p>
      </section>

      {/* Exemplos */}
      <section className="mt-16 max-w-3xl w-full">
        <h2 className="text-xl font-semibold text-center mb-6">Veja alguns exemplos</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/LeonardoSamadello">
            <div className="bg-white p-4 rounded-lg text-black w-40 text-center shadow-lg hover:scale-105 transition-all">
              <p className="font-semibold">Leonardo</p>
              <p className="text-sm">🎵 Página musical</p>
            </div>
          </Link>
          <Link href="/ManuLemos">
            <div className="bg-white p-4 rounded-lg text-black w-40 text-center shadow-lg hover:scale-105 transition-all">
              <p className="font-semibold">Manu</p>
              <p className="text-sm">🎵 Página musical</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="mt-20 mb-10 text-center">
        <h2 className="text-xl font-semibold mb-4">Fale com a gente</h2>
        <p className="mb-4">Clique no botão abaixo e tire suas dúvidas pelo WhatsApp:</p>
        <a
          href="https://api.whatsapp.com/send?phone=5514998237788&text=Olá!%20Tenho%20interesse%20em%20criar%20uma%20música%20personalizada%20com%20a%20Imagiluz.%20Pode%20me%20ajudar%20a%20começar?"

          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:scale-105 transition-all">
            Falar pelo WhatsApp
          </button>
        </a>
      </section>

      {/* Rodapé */}
      <footer className="text-sm text-white opacity-80 text-center mt-10">
        <p>© 2025 Imagiluz. Todos os direitos reservados.</p>
          <div className="flex justify-center items-center mt-2">
            <Link href="/" target="_blank" rel="noopener noreferrer">
              <Image
                src="/assets/images/imagiluz-sol-branco.svg"
                alt="Logo"
                width={30}
                height={30}
                className="footer-logo"
              />
            </Link>
          </div>
        </footer>
    </div>
  );
}
