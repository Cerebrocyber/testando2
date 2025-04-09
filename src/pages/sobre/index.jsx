import Image from "next/image";

export default function SobreNos() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFF8F3] text-black p-6">
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

      {/* Seção de abertura */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto gap-10 mt-10">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Sobre Nós</h1>
          <h2 className="text-xl font-semibold text-orange-500 mb-6">Histórias que brilham</h2>
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
      <section className="max-w-4xl mx-auto mt-20">
        <h3 className="text-2xl font-semibold text-orange-500 mb-4">Conceito</h3>
        <p className="text-gray-800">
          ImagiLuz é uma marca criada por Carilo e Renata Lemos, dentro do Grupo Lemos, que une criatividade, tecnologia e emoção. A proposta é transformar ideias em experiências memoráveis com produtos personalizados que encantam tanto crianças quanto empresas.
        </p>
      </section>

      {/* Frentes de atuação */}
      <section className="max-w-6xl mx-auto mt-16">
        <h3 className="text-2xl font-semibold text-orange-500 mb-10">Frentes de Atuação da ImagiLuz</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Música para Crianças */}
          <div className="flex items-center gap-4 bg-orange-50 p-4 rounded-lg">
            <Image
              src="/assets/images/sobre-musica.webp"
              alt="Criança com fone"
              width={120}
              height={120}
              className="rounded"
            />
            <div>
              <h4 className="text-lg font-semibold text-orange-600">Músicas Personalizadas para Crianças</h4>
              <p className="text-sm text-gray-700">Uma canção só dela. Com nome, emoção e carinho.</p>
            </div>
          </div>

          {/* Jingles Comerciais */}
          <div className="flex items-center gap-4 bg-orange-50 p-4 rounded-lg">
            <div>
              <h4 className="text-lg font-semibold text-orange-600">Jingles Comerciais</h4>
              <p className="text-sm text-gray-700">Sua marca com voz própria. A música que conecta e vende.</p>
            </div>
            <Image
              src="/assets/images/sobre-jingle.webp"
              alt="Mulher no estúdio"
              width={120}
              height={120}
              className="rounded"
            />
          </div>

          {/* Brindes Personalizados */}
          <div className="flex items-center gap-4 bg-orange-50 p-4 rounded-lg md:col-span-2">
            <Image
              src="/assets/images/sobre-brinde.webp"
              alt="Chaveiros personalizados"
              width={120}
              height={120}
              className="rounded"
            />
            <div>
              <h4 className="text-lg font-semibold text-orange-600">Brindes Personalizados</h4>
              <p className="text-sm text-gray-700">Lembranças que encantam. Em cada detalhe, uma história.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
