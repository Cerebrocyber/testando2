const features = [
    {
      title: "Design Escalável",
      description: "Componentes modulares que crescem com o seu projeto.",
      icon: "🧱",
    },
    {
      title: "Código Semântico",
      description: "Facilita manutenção, colaboração e evolução do sistema.",
      icon: "🔤",
    },
    {
      title: "Performance",
      description: "Leve, rápido e otimizado para qualquer dispositivo.",
      icon: "⚡",
    },
  ];
  
  export default function Features() {
    return (
      <section className="bg-fundoGeral text-textoPrincipal py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-titulo">Por que escolher nosso sistema?</h2>
          <p className="text-textoSecundario mt-2">
            Soluções pensadas para produtividade, performance e longevidade.
          </p>
        </div>
  
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-fundoCard p-6 rounded-xl shadow hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-titulo mb-2">{feature.title}</h3>
              <p className="text-textoSecundario text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  