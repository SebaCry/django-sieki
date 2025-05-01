import { use, useState } from 'react'
import axios from 'axios'
import fotoDiana from "../assets/EPA (3).png"

const Register = () => {
    const [formData, setFormData] = useState({
        username : "",
        tel_usua : "",
        first_name : "",
        last_name : "",
        email : "",
        password : "",
    })

    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Data sent to API:", formData); 
    
        try {
            const response = await axios.post("http://localhost:8000/auth/register/", formData);
            setMessage("Registration successful");
        } catch (err) {
            if (err.response) {
                console.error("Error response:", err.response.data); 
                setMessage("Error during registration: " + err.response.data);
            } else {
                setMessage("Error: Unable to connect to the server.");
            }
        }
    };

    return (
        <div className='max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg flex flex-col md:flex-row gap-4'>
            <div className="w-[34rem]">
                <img 
                    src={fotoDiana} 
                    alt="Diana" 
                    className="rounded-lg"
                />
            </div>
            <div className="w-full md:w-1/2 p-4 ">  
                <form onSubmit={handleSubmit}>
                    <h1 className='text-[40px] mb-6 text-center'>Registrate</h1>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Usuario</label>
                        <input 
                            type="text"
                            name='username'
                            value= {formData.username}
                            onChange= {handleChange}
                            className='w-full px-3 py-2 border border-gray-300 rounded'
                            required 
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Email</label>
                        <input 
                            type="email"
                            name='email'
                            value= {formData.email}
                            onChange= {handleChange}
                            className='w-full px-3 py-2 border border-gray-300 rounded'
                            required 
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Contraseña</label>
                        <input 
                            type="password"
                            name='password'
                            value= {formData.password}
                            onChange= {handleChange}
                            className='w-full px-3 py-2 border border-gray-300 rounded'
                            required 
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-fuchsia-400 text-[20px] text-white py-2 px-4 rounded-lg hover:bg-fuchsia-700"
                    >
                        Enviar
                    </button>
                </form>
                {message && <p className="mt-4 text-center">{message}</p>}
            </div>
        </div>
    )


}

export default Register
