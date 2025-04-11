import { Header, Footer } from "@/components";
import Image from "next/image";

export default function BrindesPersonalizados() {
  return (
    <div className="flex flex-col min-h-screen bg-fundoGeral text-textoPrincipal">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-10 mt-10 px-6 mx-auto">
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl font-bold leading-tight mb-4 text-primario">
            Brindes<br />
            Personalizados
          </h1>
          <p className="text-lg text-textoSecundario mb-6">
            Chaveiros, tags e muito mais. Feitos em MDF e no capricho.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5514998237788&text=Ol%C3%A1!%20Tenho%20interesse%20em%20fazer%20um%20pedido%20de%20brindes%20personalizados%20com%20a%20Imagiluz.%20Pode%20me%20ajudar%20a%20come%C3%A7ar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primario text-white font-bold py-2 px-6 rounded-lg shadow hover:scale-105 transition-all"
          >
            Fazer pedido
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
      <section className="mt-24 max-w-6xl w-full mx-auto text-center px-6">
        <h2 className="text-2xl font-bold text-primario mb-10">Brindes Personalizados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Produto 1 */}
          <div className="bg-fundoCard p-4 rounded-xl shadow-md border-l-4 border-primario transition-all hover:scale-105 hover:shadow-lg">
            <div className="bg-white p-4 rounded shadow-sm">
              <Image
                src="/assets/images/chaveiro-frases.webp"
                alt="Chaveiros com frases"
                width={300}
                height={200}
                className="mx-auto rounded mb-4"
              />
              <p className="text-sm text-textoSecundario font-medium">Com frases, logos e nomes</p>
            </div>
          </div>

          {/* Produto 2 */}
          <div className="bg-fundoCard p-4 rounded-xl shadow-md border-l-4 border-primario transition-all hover:scale-105 hover:shadow-lg">
            <div className="bg-white p-4 rounded shadow-sm">
              <Image
                src="/assets/images/chaveiro-qr.webp"
                alt="Chaveiro com QR Code"
                width={300}
                height={200}
                className="mx-auto rounded mb-4"
              />
              <p className="text-sm text-textoSecundario font-medium">QR Codes para músicas personalizadas</p>
            </div>
          </div>

          {/* Produto 3 */}
          <div className="bg-fundoCard p-4 rounded-xl shadow-md border-l-4 border-primario transition-all hover:scale-105 hover:shadow-lg">
            <div className="bg-white p-4 rounded shadow-sm">
              <Image
                src="/assets/images/chaveiro-lembrancinha.webp"
                alt="Chaveiro para lembrancinhas"
                width={300}
                height={200}
                className="mx-auto rounded mb-4"
              />
              <p className="text-sm text-textoSecundario font-medium">Perfeitos como lembrancinhas</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
