import { LeafIcon } from "lucide-react";
const Header = () => {
  return (
    <header className="bg-[#2b3b1b] text-white py-4 px-6 md:px-12">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <LeafIcon className="h-6 w-6" />
          <span className="text-2xl font-bold">TELEMANTIS</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#inicio" className="hover:text-[#b5bd00]">
            Inicio
          </a>
          <a href="#servicios" className="hover:text-[#b5bd00]">
            Servicios
          </a>
          <a href="#beneficios" className="hover:text-[#b5bd00]">
            Beneficios
          </a>
          <a href="#contacto" className="hover:text-[#b5bd00]">
            Contacto
          </a>
        </nav>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};
export default Header;
