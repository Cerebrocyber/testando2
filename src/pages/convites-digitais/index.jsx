import Image from "next/image";

export default function ConvitesDigitais() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black p-6">
      {/* Intro Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-10 mt-10 mx-auto">
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl font-bold leading-tight mb-4 text-gray-900">
            Convites<br />Digitais
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Convide com brilho. Para crianças, adultos e empresas.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5514998237788&text=Ol%C3%A1!%20Tenho%20interesse%20em%20criar%20um%20convite%20digital%20com%20a%20Imagiluz.%20Pode%20me%20ajudar%20a%20come%C3%A7ar%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg shadow hover:scale-105 transition-all">
              Criar convite agora
            </button>
          </a>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/assets/images/convite-hero.webp"
            alt="Mulher segurando celular com convite"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Destaque */}
      <section className="mt-20 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Torne seus convites inesquecíveis</h2>
        <p className="text-gray-700">
          Surpreenda seus convidados com convites digitais animados, cheios de música e uma identidade visual personalizada que encanta.
        </p>
      </section>

      {/* Tipos de Convites */}
      <section className="mt-16 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {/* Infantil */}
        <div className="flex flex-col items-start">
          <Image
            src="/assets/images/convite-infantil.webp"
            alt="Convite infantil"
            width={500}
            height={300}
            className="rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Infantil</h3>
          <p className="text-gray-700">Convites alegres para festas infantis, feitos especialmente para os pequenos.</p>
        </div>

        {/* Adulto */}
        <div className="flex flex-col items-start">
          <Image
            src="/assets/images/convite-adulto.webp"
            alt="Convite adulto"
            width={500}
            height={300}
            className="rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Adulto</h3>
          <p className="text-gray-700">Convites sofisticados para uma variedade de celebrações, de festas a aniversários.</p>
        </div>

        {/* Comercial */}
        <div className="flex flex-col items-start">
          <Image
            src="/assets/images/convite-comercial.webp"
            alt="Convite comercial"
            width={500}
            height={300}
            className="rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-900 mb-1">Comercial</h3>
          <p className="text-gray-700">Convites profissionais adaptados às necessidades da sua empresa.</p>
        </div>
      </section>
    </div>
  );
}