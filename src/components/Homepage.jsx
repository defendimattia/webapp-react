import { useEffect, useState } from "react"
import axios from "axios"
import MovieCard from "./MovieCard"

export default function Homepage() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_BASE_URL + "/api/movies")
            .then((res) => setMovies(res.data))
    }, [])


    return (
        <>
            <h1>Homepage</h1>
            <h2>Lista film</h2>
            <div className="container">
                <div className="row g-4">
                    {movies.map(movie => (
                        <div key={movie.id} className="col-lg-3">
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}