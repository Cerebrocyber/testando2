import Image from "next/image";
import Link from "next/link";

export default function MusicasParaCriancas() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black p-6">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-10 mt-10 mx-auto">
        <div className="md:w-1/2 text-left">
          <h1 className="text-4xl font-bold leading-tight mb-4 text-blue-900">
            Músicas<br />
            para Crianças
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Uma canção só dela, com emoção, carinho e o seu nome.
          </p>
          <Link href="#contato">
            <button className="bg-yellow-400 text-black font-bold py-2 px-6 rounded-lg shadow hover:scale-105 transition-all">
              Pedir música personalizada
            </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/assets/images/music-hero.webp"
            alt="Criança ouvindo música com a mãe"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Como Funciona */}
      <section className="mt-24 max-w-6xl w-full mx-auto">
        <h2 className="text-2xl font-bold text-center mb-16 text-blue-900">Como Funciona</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Passo 1 */}
          <div className="flex items-start gap-4">
            <div className="text-yellow-500 font-bold text-2xl">1</div>
            <div>
              <h3 className="font-semibold text-lg text-blue-900">Briefing com as mães</h3>
              <p className="text-gray-700">Conte sobre a criança e o que faz ela brilhar</p>
            </div>
          </div>
          <Image
            src="/assets/images/passo1.webp"
            alt="Mãe usando notebook"
            width={400}
            height={300}
            className="rounded-lg"
          />

          {/* Passo 2 */}
          <Image
            src="/assets/images/passo2.webp"
            alt="Letra personalizada"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <div className="flex items-start gap-4">
            <div className="text-yellow-500 font-bold text-2xl">2</div>
            <div>
              <h3 className="font-semibold text-lg text-blue-900">Letra personalizada</h3>
              <p className="text-gray-700">Criamos uma letra única que celebra a sua história</p>
            </div>
          </div>

          {/* Passo 3 */}
          <div className="flex items-start gap-4">
            <div className="text-yellow-500 font-bold text-2xl">3</div>
            <div>
              <h3 className="font-semibold text-lg text-blue-900">Envio digital e rápido</h3>
              <p className="text-gray-700">Receba a música com QR code para ouvir quando quiser</p>
            </div>
          </div>
          <Image
            src="/assets/images/passo3.webp"
            alt="Celular com player e QR code"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </section>
    </div>
  );
}
