import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#333333] text-fundoGeral shadow-md p-4 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2">
        <img
          src="/assets/images/Logo-texto.svg"
          alt="Logo Imagiluz"
          className="h-10 w-auto"
        />
      </Link>
      <nav className="flex gap-4 text-sm">
        <Link href="/" className="hover:text-secundario transition-colors">Home</Link>
        <Link href="/sobre" className="hover:text-secundario transition-colors">Sobre</Link>
        <Link href="#contato" className="hover:text-secundario transition-colors">Contato</Link>
      </nav>
    </header>
  );
}