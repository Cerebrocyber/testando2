import { Header, Footer } from "@/components";
import Image from "next/image";

export default function JinglesComerciais() {
  return (
    <div className="flex flex-col min-h-screen bg-fundoGeral text-textoPrincipal">
      <Header />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mt-10 px-6">
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
          <h1 className="text-4xl font-bold text-titulo mb-4">Jingles Comerciais</h1>
          <p className="text-lg text-textoSecundario mb-6">
            Dê uma identidade sonora única para sua marca.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5514998237788&text=Ol%C3%A1!%20Tenho%20interesse%20em%20criar%20um%20jingle%20personalizado%20com%20a%20Imagiluz.%20Pode%20me%20ajudar%20a%20come%C3%A7ar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primario text-white font-bold py-2 px-6 rounded-lg shadow hover:scale-105 transition-all"
          >
            Fazer um briefing
          </a>
        </div>
      </section>

      {/* Blocos Informativos */}
      <section className="mt-24 max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {/* Bloco 1 */}
        <div className="bg-fundoCard p-4 rounded-xl shadow-md border-l-4 border-primario transition-all hover:scale-105 hover:shadow-lg">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="text-xl font-semibold text-titulo mb-2">🔊 Sua marca cantando alto</h3>
            <p className="text-textoSecundario">
              Transforme seu nome em melodia. De rádios locais a vídeos virais, um jingle marcante coloca sua marca na cabeça — e no coração — do público.
            </p>
          </div>
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
        <div className="bg-fundoCard p-4 rounded-xl shadow-md border-l-4 border-primario transition-all hover:scale-105 hover:shadow-lg">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="text-xl font-semibold text-titulo mb-2">💡 Música que conecta e converte</h3>
            <p className="text-textoSecundario">
              Nada emociona mais que som. Um jingle bem-feito ativa lembranças, cria empatia e impulsiona vendas com autenticidade.
            </p>
          </div>
        </div>

        {/* Bloco 3 */}
        <div className="bg-fundoCard p-4 rounded-xl shadow-md border-l-4 border-primario transition-all hover:scale-105 hover:shadow-lg">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="text-xl font-semibold text-titulo mb-2">🎙️ Jingle exclusivo, do seu jeito</h3>
            <p className="text-textoSecundario">
              Você passa a ideia, a gente transforma em trilha sonora. Profissional, criativo e com a sua cara — do briefing à entrega.
            </p>
          </div>
        </div>
        <Image
          src="/assets/images/jingle-producao.webp"
          alt="Mesa de som colorida"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </section>

      <Footer />
    </div>
  );
}
