import NavBar from "./NavBar";
import celularContactanos from "../assets/IMG/CELULAR_CONTACTANOS.png";
import logoFacebook from "../assets/IMG/LOGO_FACEBOOK.png";
import logoInstagram from "../assets/IMG/LOGO_INSTAGRAM.png";
import logoWhatsapp from "../assets/IMG/LOGO_WHATSAPP.png";


const Contact = () => {
    return (
        <div className="min-h-full flex flex-row items-center justify-center p-4">
            <div className="bg-white shadow-lg rounded-lg flex flex-row gap-6 p-6 w-full max-w-5xl">
                <div className="w-full md:w-1/2 max-w-md flex justify-center items-center">
                    <img src={celularContactanos} alt="Phone Mockup" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
                    <h1 className="text-2xl font-bold mb-4">CONTACTANOS</h1>
                    <p className="text-gray-600 mb-6">
                        Estamos siempre disponibles para atenderte, visítanos en nuestras redes sociales y conoce más sobre nosotros,
                        no dudes en dejarnos tus datos para brindarte más información.
                    </p>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Nombre*"
                            required
                            className="w-full p-3 border border-purple-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <input type="text" placeholder="Apellido*" required className="w-full p-3 border border-purple-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        <div className="flex items-center gap-2">
                            <select className="p-3 border border-purple-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400">
                                <option>+57</option>
                            </select>
                            <input type="tel" placeholder="Teléfono celular" required className="flex-1 p-3 border border-purple-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"/>
                        </div>
                        <input type="email" placeholder="Email" required className="w-full p-3 border border-purple-200 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"/>
                        <button type="submit" className="w-full py-3 bg-pink-400 text-white font-semibold rounded-full hover:bg-pink-500">
                            Enviar
                        </button>
                    </form>
                    <div className="social-icons flex gap-4 mt-6">
                        <a href="#" className="facebook">
                            <img src={logoFacebook} alt="Facebook" className="h-8" />
                        </a>
                        <a href="https://www.instagram.com/dianacedanokeratinasibague/" className="instagram">
                            <img src={logoInstagram} alt="Instagram" className="h-8" />
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=573045491548&text&type=phone_number&app_absent=0" className="whatsapp">
                            <img src={logoWhatsapp} alt="WhatsApp" className="h-8" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact