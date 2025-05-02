import React from 'react'
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <nav className="bg-neutral-900 bg-opacity-50 w-full h-[8rem] text-white p-4 text-[18px] pt-10">
            <div className="container mx-auto flex justify-center items-center">
                <div className="hidden md:flex space-x-6 gap-30">
                    <Link to="/" className="hover:text-gray-300 transition-colors duration-300">
                        Bienvenidos
                    </Link>
                    <Link to="/" className="hover:text-gray-300 transition-colors duration-300">
                        Acerca de nosotros
                    </Link>
                    <Link to="/reserva" className="hover:text-gray-300 transition-colors duration-300">
                        Reserva
                    </Link>
                    <Link to="/catalogo" className="hover:text-gray-300 transition-colors duration-300">
                        Catalogo
                    </Link>
                    <Link to="/contact" className="hover:text-gray-300 transition-colors duration-300">
                        Contactanos
                    </Link>
                    
                </div>
            </div>
        </nav>     
    )
}

export default Footer