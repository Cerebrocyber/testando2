# 🎨 Design System – Projeto Carilo

Bem-vindo ao guia de design system do seu projeto em Next.js com Tailwind.
Essa estrutura foi criada para ser **escalável, semântica e de fácil manutenção**, pensando já em um futuro com equipe.

---

## 📁 Estrutura de tokens

### Cores (tailwind.config.ts)
```ts
colors: {
  primario: '#FF8100',         // Botões, ícones, destaques
  secundario: '#FFCE00',       // Alertas, hover, indicadores
  fundoCard: '#E0E0E0',         // Fundo de cards, caixas
  textoSecundario: '#BDBDBD',   // Subtítulos, descrições
  titulo: '#333333',            // Títulos fortes
  textoPrincipal: '#000000',    // Corpo do texto
  fundoGeral: '#FFFFFF',        // Background principal
},
```
> Todos os componentes devem usar essas **nomenclaturas semânticas**.

---

## 🧩 Componentes base (exemplos)

### Botão primário
```tsx
export function BotaoPrimario({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-primario text-fundoGeral hover:bg-secundario font-bold py-2 px-4 rounded">
      {children}
    </button>
  );
}
```

### Card
```tsx
export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-fundoCard text-textoPrincipal p-4 rounded shadow-md">
      {children}
    </div>
  );
}
```

---

## 🧭 Padrões e boas práticas

- **Use tokens semânticos** para tudo: cores, fontes, sombras, etc.
- **Evite valores diretos** como `#fff`, `#000`, `px`, etc. Use as classes nomeadas.
- **Crie componentes reutilizáveis** com base nesses padrões.
- **Documente tudo** aqui ou no Notion.

---

## 🛠️ To-do futuro

- [ ] Adicionar tokens de tipografia
- [ ] Adicionar tokens de espaçamento e radius
- [ ] Criar mais componentes (Input, Header, Footer, etc.)
- [ ] Documentar variantes para dark mode (se necessário)

---

> Essa base é só o começo. Você está criando um sistema que vai durar. 🚀

Tamo junto, time do futuro. 👊
