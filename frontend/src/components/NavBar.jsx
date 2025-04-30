import { Link } from "react-router-dom";
import logoBlanco from "../assets/LOGOBLANCO.png"
import registerBlanco from "../assets/register_icon_2.png"
import perfilBlanco from "../assets/account_circle_white.png"

const NavBar = () => {
    const isAuthenticated = !!localStorage.getItem("access_token")

    return (
        <nav className="bg-neutral-900 bg-opacity-50 w-full text-white p-4 text-[18px]">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2x1 font-bold hover:text-gray-300">
                    <img src={logoBlanco} alt="logo epa" className="w-30 h-auto p-0" />
                </Link>
                <div className="hidden md:flex space-x-6">
                    <Link to="/" className="hover:text-gray-300 transition-colors duration-300">
                        Bienvenidos
                    </Link>
                    <Link to="/" className="hover:text-gray-300 transition-colors duration-300">
                        Acerca de nosotros
                    </Link>
                    <Link to="/" className="hover:text-gray-300 transition-colors duration-300">
                        Catalogo
                    </Link>
                    <Link to="/contact" className="hover:text-gray-300 transition-colors duration-300">
                        Contactanos
                    </Link>
                    {isAuthenticated ? (
                        <>
                            <Link to="/dashboard" className="hover:text-gray-300 transition-colors duration-300">
                                Dashboard
                            </Link>
                            <button onClick={() => {
                                localStorage.removeItem("access_token")
                                localStorage.removeItem("refresh_token")
                                window.location.href = "/login"
                            }}
                            className="hover:text-gray-300 transition-colors duration-300">
                                Logout
                            </button>

                            <Link to="/" className="hover:text-gray-300 transition-colors duration-300">
                                Reserva
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/register" className="hover:text-gray-300 transition-colors duration-200">
                                <img src={registerBlanco} className="w-9" />
                            </Link>
                            <Link to="/login" className="hover:text-gray-300 transition-colors duration-150">
                                <img src={perfilBlanco} alt="" className="w-8" />
                            </Link>
                            

                            {/* //Aprendiendo React y Django para hacer el proyeto */}
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default NavBar