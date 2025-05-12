import { useEffect, useState } from "react"
import axios from "axios"
import MovieCard from "./MovieCard"

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
            <div className="container">
                <ul className="d-flex row gap-5 list-unstyled">
                    {movies.map(movie => <li key={movie.id} className="col-lg-3"><MovieCard /></li>)}
                </ul>
            </div>

        </>
    )
}