import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import Reserva from "./components/Reserva";
import Catalogo from "./components/Catalog";
import Index from "./components/Index";
import Footer from "./components/Footer";

const Home = () => <div className="text-center mt-10 text-xl"><h1 className="font-bold text-[50px]">Welcome to My app</h1></div>

const App = () => {
  return (
    <Router>
      <NavBar />
        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reserva" element={<Reserva />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/" element={<Index />} />
          </Routes>
        </div>
      <Footer />
    </Router>
  )
}

export default App