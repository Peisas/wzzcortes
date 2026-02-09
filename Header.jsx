// src/components/Header.jsx
import logo from "../assets/public/logo.png";
import bgHeader from "../assets/public/fundo.jpg";

export default function Header() {
  return (
    <header
      className="relative flex items-center justify-between px-6 py-4 text-white"
      style={{
        backgroundImage: `url(${bgHeader})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Camada de desfoque + escurecimento */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Conteúdo do header */}
      <div className="relative flex items-center w-full justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 rounded-full"
          />
        </div>

        {/* Menu */}
        <nav className="flex gap-4 font-medium">
          <a href="#pedra" className="hover:text-blue-400 transition">
            Projetos
          </a>
          <a href="#contato" className="hover:text-blue-400 transition">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}
