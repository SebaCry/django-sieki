import Productos from "./Productos";
const Index = () => {
  return (
    <div>
      <header className="header-container bg-cover bg-center bg-fixed h-screen" style={{ backgroundImage: "url('/assets/images-diana/IMG0.png')" }}>
        
        <div className="text-center text-white pt-40">
          <p className="text-xl">BIENVENIDO A</p>
          <h1 className="text-4xl font-bold">Epa Keratinas Ibagué</h1>
          <div className="mt-8">
            <a href="/pages/appointment.html" className="btn-header bg-transparent border border-white text-white px-12 py-3 rounded-full hover:bg-white hover:text-black transition">
              Reserva
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* About Section */}
        <section id="main-about-container" className="py-16">
          <h3 className="text-center text-2xl font-bold uppercase tracking-wider mb-8">Acerca De</h3>
          <div className="flex flex-wrap justify-center items-start gap-8 px-4">
            <img className="flex-1 max-w-md" src="assets/images-diana/FOTOBYNPNG.png" alt="Diana Cedano" />
            <div className="flex-1 max-w-lg text-justify">
              <h3 className="text-xl font-semibold mb-4">Diana Cedano</h3>
              <p className="mb-4">
                Diana Cedano es Administradora de Empresas, Presentadora Comercial y Especialista en Alisados y Recuperación Capilar, con más de 18 años de experiencia en el sector de la belleza y la estética capilar...
              </p>
              <img className="w-24 mx-auto" src="assets/icons/certification-guaranteed.png" alt="Certificación garantizada" />
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="/pages/catalog.html" className="px-8 py-3 border border-black rounded-full text-black hover:bg-black hover:text-white transition">Ver Nuestro Catálogo</a>
          </div>
        </section>

        {/* Services Section */}
        <section className="main-services-details bg-pink-100 py-16">
        <div>
            <div class="px-5 max-w-[1200px] mx-auto">
            <h2 class="text-center font-serif mb-[70px] tracking-[6px] text-3xl">Productos</h2>
                <Productos />
            </div>
        </div>
        </section>

        {/* Location Section */}
        <section className="main-ubication-container text-white text-center py-16">
          <h3 className="text-2xl font-semibold mb-4">Ubicado</h3>
          <p className="mb-2">@keratinaslasenoradeibague</p>
          <p className="mb-2">Calle 59#5-36 Barrio Limonar, Ibagué, Tolima</p>
          <p className="mb-6">+57 304 549 1548</p>
          <div className="flex justify-center space-x-4">
            <a href="" className="bg-pink-500 px-6 py-2 rounded-full hover:bg-pink-600">Reserva</a>
            <a href="" className="bg-pink-500 px-6 py-2 rounded-full hover:bg-pink-600">Instagram</a>
            <a href="" className="bg-pink-500 px-6 py-2 rounded-full hover:bg-pink-600">WhatsApp</a>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="main-gmaps-container">
          <iframe
            className="w-full h-96 border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.9329695973408!2d-75.20440277192786!3d4.436053399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38c509479e7e33%3A0xd216221d7d10e23a!2sEPA%20KERATINAS%20IBAGUE!5e0!3m2!1ses!2sco!4v1723867477780!5m2!1ses!2sco"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
    </div>
  );
};

export default Index;