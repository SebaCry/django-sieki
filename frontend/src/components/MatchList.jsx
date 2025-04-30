import { useEffect, useState } from 'react'
import axios from 'axios'

const MatchList = () => {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/matches")
            .then((response) => setMatches(response.data))
            .catch((err) => console.error(err))
    }, [])

    return (
        <div className='p-4'>
            <h1 className='text-2x1 font-bold mb-4'>Matches</h1>
            <ul className="space-y-4">
                {matches.map((match) => (
                    <li key={match.id} className="p-4 border rounded shadow">
                        <h2 className="text-xl font-semibold">{match.title}</h2>
                        <p>{match.description}</p>
                        <p>
                            <strong>Start:</strong> {new Date(match.start_time).toLocaleString()}
                        </p>
                        <p>
                            <strong>End:</strong> {new Date(match.end_time).toLocaleString()}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
