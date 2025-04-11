import { Header, Footer } from "@/components";
import Image from "next/image";

export default function MusicasParaCriancas() {
  return (
    <div className="flex flex-col min-h-screen bg-fundoGeral text-textoPrincipal">
      <Header />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mt-10 px-6">
        <div className="mb-8">
          <Image
            src="/assets/images/music-hero.webp"
            alt="Criança ouvindo música com a mãe"
            width={1200}
            height={600}
            className="rounded-xl w-full object-cover"
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-titulo mb-4">Músicas para Crianças</h1>
          <p className="text-lg text-textoSecundario mb-6">
            Uma canção feita com amor, cheia de carinho e personalizada com o nome da criança.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5514998237788&text=Ol%C3%A1!%20Tenho%20interesse%20em%20criar%20uma%20m%C3%BAsica%20personalizada%20com%20a%20Imagiluz.%20Pode%20me%20ajudar%20a%20come%C3%A7ar%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primario text-white font-bold py-2 px-6 rounded-lg shadow hover:scale-105 transition-all"
          >
            Pedir música personalizada
          </a>
        </div>
      </section>

      {/* Blocos Informativos */}
      <section className="mt-24 max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
        {/* Bloco 1 */}
        <div className="bg-fundoCard p-4 rounded-xl shadow-md border-l-4 border-primario transition-all hover:scale-105 hover:shadow-lg">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="text-xl font-semibold text-titulo mb-2">🧒 Briefing com os pais</h3>
            <p className="text-textoSecundario">
              A gente escuta tudo sobre a criança: gostos, jeitos, apelidos e tudo que faz ela brilhar.
            </p>
          </div>
        </div>
        <Image
          src="/assets/images/passo1.webp"
          alt="Mãe usando computador"
          width={600}
          height={400}
          className="rounded-lg"
        />

        {/* Bloco 2 */}
        <Image
          src="/assets/images/passo2.webp"
          alt="Notas musicais coloridas"
          width={600}
          height={400}
          className="rounded-lg"
        />
        <div className="bg-fundoCard p-4 rounded-xl shadow-md border-l-4 border-primario transition-all hover:scale-105 hover:shadow-lg">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="text-xl font-semibold text-titulo mb-2">🎼 Letra sob medida</h3>
            <p className="text-textoSecundario">
              Transformamos as histórias e sentimentos em uma letra única, feita só para ela.
            </p>
          </div>
        </div>

        {/* Bloco 3 */}
        <div className="bg-fundoCard p-4 rounded-xl shadow-md border-l-4 border-primario transition-all hover:scale-105 hover:shadow-lg">
          <div className="bg-white p-4 rounded shadow-sm">
            <h3 className="text-xl font-semibold text-titulo mb-2">📲 QR code exclusivo</h3>
            <p className="text-textoSecundario">
              A criança recebe uma música para ouvir quando quiser, onde quiser. É só escanear!
            </p>
          </div>
        </div>
        <Image
          src="/assets/images/passo3.webp"
          alt="Pessoa escaneando QR code com celular"
          width={600}
          height={400}
          className="rounded-lg"
        />
      </section>

      <Footer />
    </div>
  );
}
