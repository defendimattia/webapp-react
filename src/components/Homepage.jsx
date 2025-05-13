import MovieCard from "./MovieCard"

export default function Homepage({ movies }) {




    return (
        <>
            <div className="container">


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

            </div>


        </>
    )
}