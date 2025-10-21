import { ClockIcon, TrendingUpIcon, BrainCircuitIcon } from "lucide-react";
const Benefits = () => {
  return (
    <section id="beneficios" className="py-16 bg-[#2b3b1b] text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="border-l-4 border-[#b5bd00] pl-4 inline-block text-left">
            <h2 className="text-3xl md:text-4xl font-bold">Beneficios</h2>
          </div>
          <div className="w-16 h-1 bg-[#b5bd00] mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#3c4c2c] p-8 rounded-lg">
            <ClockIcon className="h-12 w-12 text-[#b5bd00] mb-4" />
            <h3 className="text-xl font-bold mb-4">
              Información en tiempo real
            </h3>
            <p>
              Acceda a datos actualizados sobre el estado de sus cultivos en
              cualquier momento y desde cualquier dispositivo.
            </p>
          </div>
          <div className="bg-[#3c4c2c] p-8 rounded-lg">
            <TrendingUpIcon className="h-12 w-12 text-[#b5bd00] mb-4" />
            <h3 className="text-xl font-bold mb-4">
              Visualización de tendencias
            </h3>
            <p>
              Identifique patrones y tendencias que le permitan anticiparse a
              problemas y optimizar la producción.
            </p>
          </div>
          <div className="bg-[#3c4c2c] p-8 rounded-lg">
            <BrainCircuitIcon className="h-12 w-12 text-[#b5bd00] mb-4" />
            <h3 className="text-xl font-bold mb-4">Mejor toma de decisiones</h3>
            <p>
              Utilice datos concretos para tomar decisiones informadas que
              maximicen la calidad y rendimiento de sus cultivos.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <p className="text-xl italic">
            "Entendé el presente, elegí el futuro."
          </p>
          <div className="mt-8">
            <a
              href="#contacto"
              className="bg-[#b5bd00] hover:bg-[#9da300] text-[#2b3b1b] font-bold py-3 px-8 rounded-full inline-block"
            >
              Detectá, protegé y mejorá la calidad de tus cultivos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Benefits;
