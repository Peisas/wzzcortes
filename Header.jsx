// src/components/Header.jsx
import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-black">
      {/* Logo no canto esquerdo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="w-12 h-12" />
      </div>

      {/* Menu no canto direito */}
      <nav className="flex gap-4 text-white font-medium">
        <a href="#pedra" className="hover:text-blue-400">Projetos</a>
        <a href="#contato" className="hover:text-blue-400">Contato</a>
      </nav>
    </header>
  );
}
