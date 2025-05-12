import { useEffect, useState } from "react"
import axios from "axios"

export default function Homepage() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get("http://127.0.0.1:3000/api/movies")
            .then((res) => setMovies(res.data))
    }, [])


    return (
        <>
            <h1>Homepage</h1>
            <h2>Lista film</h2>
            <ul>
                {movies.map(movie => <li>{movie.title}</li>)}
            </ul>
        </>
    )
}