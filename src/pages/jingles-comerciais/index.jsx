import Image from "next/image";
import Link from "next/link";

export default function JinglesComerciais() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F9F9F9] text-black p-6">
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
      <section className="max-w-6xl mx-auto mt-10">
        <div className="mb-8">
          <Image
            src="/assets/images/jingle-hero.webp"
            alt="Cantor em estúdio"
            width={1200}
            height={600}
            className="rounded-xl w-full object-cover"
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Jingles Comerciais</h1>
          <p className="text-lg text-gray-700 mb-6">
            Dê uma identidade sonora única para sua marca.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5514998237788&text=Ol%C3%A1!%20Tenho%20interesse%20em%20criar%20um%20jingle%20personalizado%20com%20a%20Imagiluz.%20Pode%20me%20ajudar%20a%20come%C3%A7ar%3F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg shadow hover:scale-105 transition-all">
              Fazer um briefing
            </button>
          </a>
        </div>
      </section>

      {/* Blocos Informativos */}
      <section className="mt-24 max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Bloco 1 */}
        <div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Para o rádio e redes sociais</h3>
          <p className="text-gray-700">
            Fixe sua marca com música em anúncios e publicações.
          </p>
        </div>
        <Image
          src="/assets/images/jingle-radio.webp"
          alt="Microfone em estúdio"
          width={600}
          height={400}
          className="rounded-lg"
        />

        {/* Bloco 2 */}
        <Image
          src="/assets/images/jingle-conexao.webp"
          alt="Equipe reunida"
          width={600}
          height={400}
          className="rounded-lg"
        />
        <div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Conexão que gera vendas</h3>
          <p className="text-gray-700">
            Crie vínculo com o público e destaque sua marca no mercado.
          </p>
        </div>

        {/* Bloco 3 */}
        <div>
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Produção sob medida</h3>
          <p className="text-gray-700">
            Elaboramos o jingle do jeitinho que a sua marca precisa.
          </p>
        </div>
        <Image
          src="/assets/images/jingle-producao.webp"
          alt="Mesa de som colorida"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </section>
    </div>
  );
}
