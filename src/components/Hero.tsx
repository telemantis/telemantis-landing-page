const Hero = () => {
  return (
    <section id="inicio" className="relative bg-[#2b3b1b] text-white">
      <div className="grid md:grid-cols-2 min-h-[90vh]">
        <div className="flex flex-col justify-center p-8 md:p-16 z-10">
          <div className="border-l-4 border-[#b5bd00] pl-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Calidad desde la raíz hasta la exportación.
            </h1>
          </div>
          <p className="text-lg md:text-xl mt-6 max-w-xl">
            Sistemas inteligentes de monitoreo y gestión agrícola que
            transforman datos en decisiones para maximizar la calidad y
            productividad de sus cultivos.
          </p>
          <div className="mt-8">
            <a
              href="#contacto"
              className="bg-[#b5bd00] hover:bg-[#9da300] text-[#2b3b1b] font-bold py-3 px-8 rounded-full inline-block"
            >
              Conocé más
            </a>
          </div>
        </div>
        <div className="relative h-[50vh] md:h-auto">
          <div className="absolute inset-0 bg-black/30 z-10"></div>
          <img
            src="https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg"
            alt="Campos agrícolas"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default Hero;
