import Input from "../ui/Input";
import Button from "../ui/Button";

export default function Contato() {
  return (
    <section className="bg-fundoCard text-textoPrincipal py-16 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-titulo mb-6 text-center">Fale com a gente</h2>
        <form className="flex flex-col gap-4">
          <Input label="Nome" name="nome" placeholder="Digite seu nome" />
          <Input label="Email" name="email" type="email" placeholder="Digite seu email" />
          <Input label="Mensagem" name="mensagem" placeholder="Escreva sua mensagem" />
          <Button type="submit">Enviar</Button>
        </form>
      </div>
    </section>
  );
}
