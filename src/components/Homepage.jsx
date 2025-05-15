import MovieCard from "./MovieCard"
import Loader from "./Loader"
import { useContext } from "react"
import GlobalContext from "../../contexts/GlobalContext"

export default function Homepage({ movies }) {


    const { isLoading } = useContext(GlobalContext)

    return (
        <>

            <div className="container">
                <h1>Homepage</h1>
                <h2>Lista film</h2>
                {isLoading && <div className="container"><Loader /></div>}
                
                <div className="container">
                    <div className="row g-4">
                        {movies.map(movie => (
                            <div key={movie.id} className="col-lg-3">
                                <MovieCard movie={movie} />
                            </div>
                        ))}
                    </div>
                </div>


            </div>


        </>
    )
}