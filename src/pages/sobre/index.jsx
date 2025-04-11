import { Header, Footer } from "@/components";
import Image from "next/image";

export default function SobreNos() {
  return (
    <div className="flex flex-col min-h-screen bg-fundoGeral text-textoPrincipal">
      <Header />

      {/* Logo no topo */}
      <div className="w-full max-w-6xl flex justify-center mt-10 px-6">
        <Image
          src="/assets/images/Logo-texto.svg"
          alt="Logo Imagiluz"
          className="h-auto w-full max-w-[80%] md:max-w-[40%]"
          width={0}
          height={0}
          sizes="(max-width: 768px) 80vw, 40vw"
        />
      </div>

      {/* Seção de abertura */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto gap-10 mt-16 px-6">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-titulo mb-2">Sobre Nós</h1>
          <h2 className="text-xl font-semibold text-primario mb-6">Histórias que brilham</h2>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/assets/images/sobre-hero.webp"
            alt="Mãe e filha sorrindo"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Conceito */}
      <section className="max-w-4xl mx-auto mt-20 px-6">
        <div className="bg-fundoCard p-4 rounded-xl shadow-md border-l-4 border-primario">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="text-2xl font-semibold text-primario mb-4">Conceito</h3>
            <p className="text-textoSecundario">
              ImagiLuz é uma marca criada por Carilo e Renata Lemos, dentro do Grupo Lemos, que une criatividade, tecnologia e emoção. A proposta é transformar ideias em experiências memoráveis com produtos personalizados que encantam tanto crianças quanto empresas.
            </p>
          </div>
        </div>
      </section>

      {/* Frentes de atuação */}
      <section className="max-w-6xl mx-auto mt-16 px-6">
        <h3 className="text-2xl font-semibold text-primario mb-10">Frentes de Atuação da ImagiLuz</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Música para Crianças */}
          <div className="bg-fundoCard p-4 rounded-xl shadow-md border-l-4 border-primario">
            <div className="bg-white p-4 rounded shadow-sm flex gap-4 items-center">
              <Image
                src="/assets/images/sobre-musica.webp"
                alt="Criança com fone"
                width={120}
                height={120}
                className="rounded"
              />
              <div>
                <h4 className="text-lg font-semibold text-titulo">Músicas Personalizadas para Crianças</h4>
                <p className="text-sm text-textoSecundario">Uma canção só dela. Com nome, emoção e carinho.</p>
              </div>
            </div>
          </div>

          {/* Jingles Comerciais */}
          <div className="bg-fundoCard p-4 rounded-xl shadow-md border-l-4 border-primario">
            <div className="bg-white p-4 rounded shadow-sm flex gap-4 items-center">
              <div>
                <h4 className="text-lg font-semibold text-titulo">Jingles Comerciais</h4>
                <p className="text-sm text-textoSecundario">Sua marca com voz própria. A música que conecta e vende.</p>
              </div>
              <Image
                src="/assets/images/sobre-jingle.webp"
                alt="Mulher no estúdio"
                width={120}
                height={120}
                className="rounded"
              />
            </div>
          </div>
        </div>

        {/* Brindes Personalizados - Centralizado */}
        <div className="flex justify-center mt-10">
          <div className="max-w-xl w-full bg-fundoCard p-4 rounded-xl shadow-md border-l-4 border-primario">
            <div className="bg-white p-4 rounded shadow-sm flex gap-4 items-center">
              <Image
                src="/assets/images/sobre-brinde.webp"
                alt="Chaveiros personalizados"
                width={120}
                height={120}
                className="rounded"
              />
              <div>
                <h4 className="text-lg font-semibold text-titulo">Brindes Personalizados</h4>
                <p className="text-sm text-textoSecundario">Lembranças que encantam. Em cada detalhe, uma história.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
