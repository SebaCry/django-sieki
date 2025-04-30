import Productos from './Productos';
import img5 from '../assets/images-products/IMG 5.png';
import img6 from '../assets/images-products/IMG 6.png';
import img7 from '../assets/images-products/IMG 7.png';
import img8 from '../assets/images-products/IMG 8.png';


const Catalogo = () => {
    return (
        <main>
        <div class="px-5 max-w-[1200px] mx-auto">
          <h1 class="text-center font-serif mb-5 mt-[100px] tracking-[6px] text-5xl">CATALOGO</h1>
          <div class="flex flex-col items-center mb-10">
            <p class="mb-10 font-semibold">Productos y servicios</p>
            <p class="max-w-[700px] mb-[50px] text-center">
              Descubre nuestro catálogo de belleza diseñado para realzar tu cabello y
              transformar tu estilo. Ofrecemos productos de alta calidad como
              keratina profesional para un alisado perfecto, shampoos libres de
              sulfatos que cuidan y protegen tu melena, y sérums nutritivos que
              eliminan el frizz y brindan un brillo deslumbrante. Además, contamos con
              servicios exclusivos como alisados con keratina y tratamientos de spa
              capilar personalizados, realizados por expertos para hidratar y
              revitalizar tu cabello. ¡Haz que tu rutina de cuidado sea excepcional
              con nuestra línea de productos y servicios especializados!
            </p>
          </div>
          <h2 class="text-center font-serif mb-[70px] tracking-[6px] text-3xl">Productos</h2>
          <Productos />
          <div class="flex justify-center mt-8">
            <span>2/7</span>
          </div>
          <div class="grid grid-cols-5 gap-2 mt-8">
            <img src={img5} alt="Imagen 1" class="w-full h-auto object-cover" />
            <img src={img6} alt="Imagen 2" class="w-full h-auto object-cover" />
            <img src={img7} alt="Imagen 3" class="w-full h-auto object-cover" />
            <img src={img8} alt="Imagen 4" class="w-full h-auto object-cover" />
            <img src={img5} alt="Imagen 5" class="w-full h-auto object-cover" />
          </div>
          <section class="py-12 flex flex-col items-center">
            <h2 class="font-cursive text-3xl text-gray-800 mb-12 font-semibold">Lo que dicen nuestros clientes</h2>
            <div class="flex flex-wrap justify-center gap-10">
              <div class="bg-white p-5 rounded-lg shadow-md text-center">
                <p>"¡Increíble transformación de mi cabello!"</p>
                <p>- María Fernanda</p>
              </div>
              <div class="bg-white p-5 rounded-lg shadow-md text-center">
                <p>"Productos de alta calidad y resultados sorprendentes"</p>
                <p>- Carolina Rojas</p>
              </div>
              <div class="bg-white p-5 rounded-lg shadow-md text-center">
                <p>"Mi cabello nunca se ha visto tan saludable"</p>
                <p>- Valentina Gómez</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    
    )
}



export default Catalogo;