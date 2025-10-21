import {
  DatabaseIcon,
  LineChartIcon,
  AlertTriangleIcon,
  BarChart4Icon,
} from "lucide-react";
const Features = () => {
  return (
    <section id="servicios" className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2b3b1b]">
            El rol de la AI en la agricultura
          </h2>
          <div className="w-16 h-1 bg-[#b5bd00] mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="border-l-4 border-[#b5bd00] pl-4 mb-6">
              <h3 className="text-2xl font-bold text-[#2b3b1b]">
                Recolección de datos en campo
              </h3>
            </div>
            <p className="text-gray-700 mb-6">
              Sensores inteligentes y cámaras instalados en puntos estratégicos
              del campo capturan datos que luego se transmiten a una sede
              central para un procesamiento eficiente.
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/2255801/pexels-photo-2255801.jpeg"
                alt="Recolección de datos"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="border-l-4 border-[#b5bd00] pl-4 mb-6">
              <h3 className="text-2xl font-bold text-[#2b3b1b]">
                Procesamiento y análisis
              </h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <DatabaseIcon className="h-6 w-6 text-[#b5bd00] mr-3 mt-1" />
                <span>
                  Procesamiento de imágenes capturadas para identificar patrones
                  y anomalías.
                </span>
              </li>
              <li className="flex items-start">
                <AlertTriangleIcon className="h-6 w-6 text-[#b5bd00] mr-3 mt-1" />
                <span>
                  Detección temprana de plagas en plantaciones antes de que
                  causen daños significativos.
                </span>
              </li>
              <li className="flex items-start">
                <BarChart4Icon className="h-6 w-6 text-[#b5bd00] mr-3 mt-1" />
                <span>
                  Clasificación de riesgos y evaluación de calidad en tiempo
                  real.
                </span>
              </li>
              <li className="flex items-start">
                <LineChartIcon className="h-6 w-6 text-[#b5bd00] mr-3 mt-1" />
                <span>
                  Mejora continua con nuevos datos y retroalimentación del
                  sistema.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
