import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    return (
        <>

            <div className="card" style={{ width: "18rem" }}>
                <img src={import.meta.env.VITE_API_BASE_URL + "/movies/" + movie.image} className="card-img-top" alt={movie.title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.abstract}</p>
                    <Link to={import.meta.env.VITE_URL + `/${movie.id}`} className="btn btn-primary">Dettagli</Link>
                </div>
            </div>

        </>
    )
}