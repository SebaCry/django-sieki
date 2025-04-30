import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

const Home = () => <div className="text-center mt-10 text-xl"><h1 className="font-bold text-[50px]">Welcome to My app</h1></div>

const App = () => {
  return (
    <Router>
      <NavBar />
        <div className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
    </Router>
  )
}

export default App