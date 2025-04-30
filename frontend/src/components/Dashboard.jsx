import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [userData, setUserData] = useState({})
    const {message, setMessage} = useState("")
    
    useEffect(() => {
        const fecthUserData = async () => {
            try {
                const token = localStorage.getItem('access_token');
                const response = await axios.get('http://localhost:8000/auth/profile/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                setUserData(response.data)
            } catch (err) {
                setMessage("Error fetching user data")
            }
        }
        fecthUserData()
    }, [])

    if (message) {
        return (
            <div className="text-center mt-10 text-red-500">
                {message}
            </div>
        )
    }

    return (
        <div className='max-w-2x1 mx-auto mt-10 p-6 bg-white shadow-md rounded-lg'>
            <h1 className='text-2x1 font-bold mb-6'>User Dashboard</h1>
            <div className='space-y-4'>
                <p>
                    <strong>Username:</strong> {userData.username}
                </p>
                <p>
                    <strong>Email:</strong> {userData.email}
                </p>
                <p>
                    <strong>Is Staff:</strong> {userData.is_staff ? "Yes" : "No"}
                </p>
                <p>
                    <strong>Is Active:</strong> {userData.is_active ? "Yes" : "No"}
                </p>
                <p>
                    <strong>Date Joined:</strong> {new Date(userData.date_joined).toLocaleString()}
                </p>
            </div>
        </div>
    )
}

export default Dashboard