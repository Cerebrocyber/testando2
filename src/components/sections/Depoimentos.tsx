const depoimentos = [
    {
      nome: "Maria Oliveira",
      texto: "O sistema é intuitivo e trouxe agilidade para nosso time. Recomendo demais!",
    },
    {
      nome: "Carlos Lima",
      texto: "Depois que implementamos o design system, tudo ficou mais claro e escalável.",
    },
    {
      nome: "Fernanda Souza",
      texto: "A estrutura é perfeita pra quem quer crescer sem perder organização.",
    },
  ];
  
  export default function Depoimentos() {
    return (
      <section className="bg-fundoGeral text-textoPrincipal py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-titulo text-center mb-10">O que estão dizendo</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {depoimentos.map((dep, index) => (
              <div
                key={index}
                className="bg-fundoCard p-6 rounded-xl shadow-md text-sm text-textoSecundario"
              >
                <p className="italic mb-4">“{dep.texto}”</p>
                <p className="font-semibold text-titulo">— {dep.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  