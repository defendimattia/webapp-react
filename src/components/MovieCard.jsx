export default function MovieCard({ movie }) {
    return (
        <>

            <div className="card" style={{ width: "18rem" }}>
                <img src={`http://127.0.0.1:3000/movies/${movie.image}`} className="card-img-top" alt={movie.title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.abstract}</p>
                    <a href="#" className="btn btn-primary">Dettagli</a>
                </div>
            </div>

        </>
    )
}