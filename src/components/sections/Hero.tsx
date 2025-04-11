export default function Hero() {
    return (
      <section className="bg-fundoGeral text-textoPrincipal py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-titulo mb-4">Bem-vindo ao Projeto Carilo</h1>
        <p className="text-lg md:text-xl text-textoSecundario mb-8">
          Criando experiências digitais com design inteligente, escalável e cheio de propósito.
        </p>
        <button className="bg-primario text-fundoGeral hover:bg-secundario font-bold py-3 px-6 rounded">
          Comece agora
        </button>
      </section>
    );
  }
  