import { LeafIcon, PhoneIcon, GlobeIcon, MailIcon } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-[#2b3b1b] text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <LeafIcon className="h-6 w-6" />
              <span className="text-2xl font-bold">TELEMANTIS</span>
            </div>
            <p className="text-gray-300 mb-4">
              Soluciones tecnológicas para la agricultura moderna. Optimizamos
              la calidad de tus cultivos desde la raíz hasta la exportación.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 border-l-4 border-[#b5bd00] pl-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-3 text-[#b5bd00]" />
                <span>+123 456 7890</span>
              </li>
              <li className="flex items-center">
                <GlobeIcon className="h-5 w-5 mr-3 text-[#b5bd00]" />
                <span>www.telemantis.com</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-3 text-[#b5bd00]" />
                <span>info@telemantis.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 border-l-4 border-[#b5bd00] pl-4">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-[#b5bd00] transition duration-300"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#servicios"
                  className="hover:text-[#b5bd00] transition duration-300"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#beneficios"
                  className="hover:text-[#b5bd00] transition duration-300"
                >
                  Beneficios
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-[#b5bd00] transition duration-300"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Telemantis. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
