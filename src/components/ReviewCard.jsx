export default function ReviewCard({ review }) {

    return (

        <>

            <div className="card my-3">
                <div className="card-body">
                    <span>Nome: {review.name}</span><br />
                    <span>Voto: {review.vote}</span><br />
                    <span>Testo: {review.text}</span>
                </div>
            </div>

        </>
    )
}