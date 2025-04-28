import { Header, Footer } from '@/components';
import Head from 'next/head';
import Image from 'next/image';

export default function Leonardo5Anos() {
  return (
    <>
      <Head>
        <title>Leonardo 5 Anos - Missão com os Vingadores!</title>
        <meta property="og:title" content="Leonardo 5 Anos - Missão com os Vingadores!" />
        <meta property="og:description" content="Você foi convocado para a missão especial no aniversário do Leonardo!" />
        <meta property="og:image" content="https://imagiluz.com.br/banners/leonardo-og.jpg" />
        <meta property="og:image:secure_url" content="https://imagiluz.com.br/banners/leonardo-og.jpg" />
        <meta property="og:url" content="https://imagiluz.com.br/leonardo5anos" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <div className="flex flex-col min-h-screen bg-green-900 text-white">
        <Header />

        {/* Banner Principal */}
        <section className="relative w-full h-96 flex items-center justify-center">
          <Image
            src="/banners/leonardo-banner.webp"
            alt="Banner Aniversário Leonardo"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute bottom-4 flex flex-col items-center text-center px-4">
            <h1 className="text-3xl font-extrabold text-white drop-shadow-lg border-2 border-white inline-block px-2 bg-black bg-opacity-70 rounded-lg">
              Leonardo 5 Anos
            </h1>
            <p className="text-lg font-semibold text-white drop-shadow-md mt-2 bg-black bg-opacity-70 inline-block px-2 rounded-lg">
              Missão: Celebrar com os Vingadores!
            </p>
          </div>
        </section>

        {/* Detalhes do Evento */}
        <section className="max-w-3xl mx-auto p-6 text-center">
          <p className="text-xl mb-4">Você foi convocado para uma missão especial no aniversário do Leonardo!</p>
          <div className="bg-green-800 p-4 rounded-lg">
            <p><strong>📍 Local:</strong> Parks & Games - Shopping Park Botucatu</p>
            <p>Av. Dr. José Amaro Faraldo, 1050 – Vila Real, Botucatu – SP</p>
            <p className="mt-2"><strong>📅 Data:</strong> 31/05/2025</p>
            <p><strong>⏰ Início:</strong> 18h30</p>
            <p><strong>🎂 Parabéns:</strong> 20h30</p>
          </div>
        </section>

        {/* Botões de Ação */}
        <p className="text-yellow-300 font-semibold mb-2 text-center px-4">
          ⚠️ Confirme sua presença até <strong>21/05/2025</strong>!
        </p>
        <section className="flex flex-col sm:flex-row justify-center items-center gap-y-4 sm:gap-x-4 mb-10 px-4 max-w-2xl mx-auto">
          {/* Botão Pai - Azul */}
          <a
            href="https://wa.me/5514997555002?text=Al%C3%B4%2C%20central%20dos%20Vingadores%3F%20%F0%9F%98%84%20Estou%20confirmando%20que%20estarei%20no%20anivers%C3%A1rio%20do%20Leonardo!%20Sou%20[Digite%20seu%20nome]%20(Convidado%20do%20Pai)"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full flex-1 sm:flex-none text-center"
          >
            <span className="block">Papai me convidou</span>
            <span className="block text-sm">Confirmar presença</span>
          </a>

          {/* Botão Mãe - Rosa */}
          <a
            href="https://wa.me/5514997661464?text=Al%C3%B4%2C%20central%20dos%20Vingadores%3F%20%F0%9F%98%84%20Estou%20confirmando%20que%20estarei%20no%20anivers%C3%A1rio%20do%20Leonardo!%20Sou%20[Digite%20seu%20nome]%20(Convidado%20da%20Mam%C3%A3e)"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full flex-1 sm:flex-none text-center"
          >
            <span className="block">Mamãe me convidou</span>
            <span className="block text-sm">Confirmar presença</span>
          </a>
        </section>

        {/* Botão Local - Verde */}
        <section className="flex justify-center mb-10 px-4 md:px-0">
          <a
            href="https://www.google.com/maps/place/Parks+%26+Games+-+Botucatu/@-22.9138422,-48.4681278,1007m/data=!3m1!1e3!4m10!1m2!2m1!1sPark+Games!3m6!1s0x94c6df2364319375:0x6099cb53a87d87aa!8m2!3d-22.914879!4d-48.4641308!15sCgpQYXJrIEdhbWVzIgOIAQFaDCIKcGFyayBnYW1lc5IBDmFtdXNlbWVudF9wYXJrqgFCEAEqDiIKcGFyayBnYW1lcygMMh4QASIaM_RH5dtMA0gFc0_qK2pePYs18tGri61Y0oIyDhACIgpwYXJrIGdhbWVz4AEA!16s%2Fg%2F11g6yhnh_7?entry=ttu&g_ep=EgoyMDI1MDQyMy4wIKXMDSoJLDEwMjExNjM5SAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg"
          >
            Ver Local no Google Maps
          </a>
        </section>

        <Footer />
      </div>
    </>
  );
}
