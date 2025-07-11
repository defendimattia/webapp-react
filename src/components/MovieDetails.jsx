import { useParams } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
import ReviewCard from "./ReviewCard"
import ReviewForm from "./ReviewForm"
import { useContext } from "react"
import GlobalContext from "../../contexts/GlobalContext"
import Loader from "./Loader"


export default function MovieDetail() {

    const { id } = useParams()

    const [movie, setMovie] = useState([])

    const { isLoading, setIsLoading } = useContext(GlobalContext)

    function getMovie() {
        setIsLoading(true)
        axios.get(import.meta.env.VITE_API_BASE_URL + "/api/movies/" + id)
            .then((res) => setMovie(res.data))
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))


    }
    
    useEffect(() => getMovie, [id])


    return (
        <>

                
                {isLoading && <div className="container"><Loader /></div>}
                
                <div className="container movie-details">

                <div className="img-container">
                    <img src={import.meta.env.VITE_API_BASE_URL + "/movies/" + movie.image} className="card-img-top" alt={movie.title} />
                </div>
                <div className="details-container">
                    <h1>{movie.title}</h1>
                    <h4>{`Regista: ${movie.director}`}</h4>
                    <h4>{`Genere: ${movie.genre}`}</h4>
                    <h4>{`Anno di uscita: ${movie.release_year}`}</h4>
                    <p>{`Estratto: ${movie.abstract}`}</p>
                </div>


            </div>

            <div className="container reviews my-3">
                <h4>Recensioni</h4>
                {movie.reviews?.map(review => <ReviewCard review={review} key={review.id} />)}
            </div>



            <div className="container my-3">
                <hr />
                <h4>Aggiungi recensione</h4>
                <ReviewForm movieID={movie.id} refresh={getMovie} />
            </div>

        </>
    )
}