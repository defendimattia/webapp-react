import { useParams } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
import ReviewCard from "./ReviewCard"
import ReviewForm from "./ReviewForm"


export default function MovieDetail() {

    const { id } = useParams()

    const [movie, setMovie] = useState([])

    useEffect(() => {
        axios.get(import.meta.env.VITE_API_BASE_URL + "/api/movies/" + id)
            .then((res) => setMovie(res.data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <>
            <div className="container">

                <img src={import.meta.env.VITE_API_BASE_URL + "/movies/" + movie.image} className="card-img-top" alt={movie.title} />
                <h1>{movie.title}</h1>
                <h4>{`Regista: ${movie.director}`}</h4>
                <h4>{`Genere: ${movie.genre}`}</h4>
                <h4>{`Anno di uscita: ${movie.release_year}`}</h4>
                <p>{`Estratto: ${movie.abstract}`}</p>

                <hr />
                <h4>Recensioni</h4>
                {movie.reviews?.map(review => <ReviewCard review={review}/>)}
                
                <hr />
                <h4>Aggiungi recensione</h4>
                <ReviewForm />

            </div>

        </>
    )
}