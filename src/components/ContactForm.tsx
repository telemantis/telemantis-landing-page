const ContactForm = () => {
  return (
    <section id="contacto" className="py-16 bg-[#f8f9fa]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2b3b1b]">
              CONTÁCTANOS
            </h2>
            <div className="w-16 h-1 bg-[#b5bd00] mx-auto mt-4"></div>
            <p className="text-lg mt-4 text-gray-700">
              Completa el formulario y nuestro equipo se pondrá en contacto
              contigo a la brevedad.
            </p>
          </div>
          <form
            action="https://formspree.io/f/mvgwjekv"
            method="POST"
            className="bg-white rounded-lg shadow-md p-8"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b5bd00] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b5bd00] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b5bd00] focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b5bd00] focus:border-transparent"
                />
              </div>
            </div>
            <div className="mt-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#b5bd00] focus:border-transparent"
              ></textarea>
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-[#2b3b1b] hover:bg-[#3c4c2c] text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
