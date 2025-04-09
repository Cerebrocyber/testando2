import Image from "next/image";
import Link from "next/link";

export default function BrindesPersonalizados() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black p-6">
      {/* Logo no topo */}
      <div className="w-full max-w-6xl flex justify-center mb-4">
        <Image
          src="/assets/images/Logo-texto.svg"
          alt="Logo Imagiluz"
          className="h-auto w-full max-w-[80%] md:max-w-[40%]"
          width={0}
          height={0}
          sizes="(max-width: 768px) 80vw, 40vw"
        />
      </div>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-10 mt-10 mx-auto">
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl font-bold leading-tight mb-4 text-orange-500">
            Brindes<br />
            Personalizados
          </h1>
          <p className="text-lg text-gray-800 mb-6">
            Chaveiros, tags e muito mais. Feitos em MDF e no capricho.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5514998237788&text=Ol%C3%A1!%20Tenho%20interesse%20em%20fazer%20um%20pedido%20de%20brindes%20personalizados%20com%20a%20Imagiluz.%20Pode%20me%20ajudar%20a%20come%C3%A7ar%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-orange-400 text-white font-bold py-2 px-6 rounded-lg shadow hover:scale-105 transition-all">
              Fazer pedido
            </button>
          </a>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/assets/images/brindes-hero.webp"
            alt="Mulher segurando chaveiro personalizado"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Produtos em Destaque */}
      <section className="mt-24 max-w-6xl w-full mx-auto text-center">
        <h2 className="text-2xl font-bold text-orange-500 mb-10">Brindes Personalizados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <Image
              src="/assets/images/chaveiro-frases.webp"
              alt="Chaveiros com frases"
              width={300}
              height={200}
              className="mx-auto rounded mb-4"
            />
            <p className="text-sm text-gray-800 font-medium">Com frases, logos e nomes</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <Image
              src="/assets/images/chaveiro-qr.webp"
              alt="Chaveiro com QR Code"
              width={300}
              height={200}
              className="mx-auto rounded mb-4"
            />
            <p className="text-sm text-gray-800 font-medium">QR Codes para músicas personalizadas</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <Image
              src="/assets/images/chaveiro-lembrancinha.webp"
              alt="Chaveiro para lembrancinhas"
              width={300}
              height={200}
              className="mx-auto rounded mb-4"
            />
            <p className="text-sm text-gray-800 font-medium">Perfeitos como lembrancinhas</p>
          </div>
        </div>
      </section>
    </div>
  );
}