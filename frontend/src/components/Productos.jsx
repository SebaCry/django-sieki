import img1 from '../assets/images-products/IMG1.png';
import img2 from '../assets/images-products/IMG2.png';
import img3 from '../assets/images-products/IMG3.png';
import img4 from '../assets/images-products/IMG4.png';

const Productos = () => {
    return (
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <div class="border border-gray-300 rounded-lg overflow-hidden text-center transition-transform duration-300 hover:scale-105">
        <img src={img1} alt="Producto 1" class="w-full h-[300px] object-cover" />
        <div class="p-4">
          <h3 class="font-bold mb-2">Bondle Hidratante - Combo XL</h3>
          <p class="text-gray-800 text-lg">$250.000 COP</p>
          <button class="bg-black text-white py-2 px-4 mt-2 rounded">Añadir al Carrito</button>
        </div>
      </div>
      <div class="border border-gray-300 rounded-lg overflow-hidden text-center transition-transform duration-300 hover:scale-105">
        <img src={img2} alt="Producto 2" class="w-full h-[300px] object-cover" />
        <div class="p-4">
          <h3 class="font-bold mb-2">Bondle Hidratante - Combo XL</h3>
          <p class="text-gray-800 text-lg">$250.000 COP</p>
          <button class="bg-black text-white py-2 px-4 mt-2 rounded">Añadir al Carrito</button>
        </div>
      </div>
      <div class="border border-gray-300 rounded-lg overflow-hidden text-center transition-transform duration-300 hover:scale-105">
        <img src={img3} alt="Producto 3" class="w-full h-[300px] object-cover" />
        <div class="p-4">
          <h3 class="font-bold mb-2">Bondle Hidratante - Combo XL</h3>
          <p class="text-gray-800 text-lg">$250.000 COP</p>
          <button class="bg-black text-white py-2 px-4 mt-2 rounded">Añadir al Carrito</button>
        </div>
      </div>
      <div class="border border-gray-300 rounded-lg overflow-hidden text-center transition-transform duration-300 hover:scale-105">
        <img src={img4} alt="Producto 4" class="w-full h-[300px] object-cover" />
        <div class="p-4">
          <h3 class="font-bold mb-2">Bondle Hidratante - Combo XL</h3>
          <p class="text-gray-800 text-lg">$250.000 COP</p>
          <button class="bg-black text-white py-2 px-4 mt-2 rounded">Añadir al Carrito</button>
        </div>
      </div>
      <div class="border border-gray-300 rounded-lg overflow-hidden text-center transition-transform duration-300 hover:scale-105">
        <img src={img1} alt="Producto 5" class="w-full h-[300px] object-cover" />
        <div class="p-4">
          <h3 class="font-bold mb-2">Bondle Hidratante - Combo XL</h3>
          <p class="text-gray-800 text-lg">$250.000 COP</p>
          <button class="bg-black text-white py-2 px-4 mt-2 rounded">Añadir al Carrito</button>
        </div>
      </div>
      <div class="border border-gray-300 rounded-lg overflow-hidden text-center transition-transform duration-300 hover:scale-105">
        <img src={img2} alt="Producto 6" class="w-full h-[300px] object-cover" />
        <div class="p-4">
          <h3 class="font-bold mb-2">Bondle Hidratante - Combo XL</h3>
          <p class="text-gray-800 text-lg">$250.000 COP</p>
          <button class="bg-black text-white py-2 px-4 mt-2 rounded">Añadir al Carrito</button>
        </div>
      </div>
      <div class="border border-gray-300 rounded-lg overflow-hidden text-center transition-transform duration-300 hover:scale-105">
        <img src={img3} alt="Producto 6" class="w-full h-[300px] object-cover" />
        <div class="p-4">
          <h3 class="font-bold mb-2">Bondle Hidratante - Combo XL</h3>
          <p class="text-gray-800 text-lg">$250.000 COP</p>
          <button class="bg-black text-white py-2 px-4 mt-2 rounded">Añadir al Carrito</button>
        </div>
      </div>
      <div class="border border-gray-300 rounded-lg overflow-hidden text-center transition-transform duration-300 hover:scale-105">
        <img src={img4} alt="Producto 6" class="w-full h-[300px] object-cover" />
        <div class="p-4">
          <h3 class="font-bold mb-2">Bondle Hidratante - Combo XL</h3>
          <p class="text-gray-800 text-lg">$250.000 COP</p>
          <button class="bg-black text-white py-2 px-4 mt-2 rounded">Añadir al Carrito</button>
        </div>
      </div>
    </div>
    )
}

export default Productos