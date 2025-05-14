import axios from "axios"
import { useState } from "react"


export default function ReviewForm({ movieID, refresh }) {

    const [data, setData] = useState({

        name: "",
        vote: 1,
        text: ""

    })


    function submitData(event) {
        event.preventDefault()


        axios.post(import.meta.env.VITE_API_BASE_URL + `/api/movies/${movieID}/reviews`, data)
            .then(refresh)
            .catch(err => console.log(err))

    }

    return (
        <>
            <form onSubmit={submitData}>
                <div className="card">
                    <div className="card-header">
                        Aggiungi recensione
                    </div>
                    <div className="card-body">
                        <label htmlFor="formName" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="formName" placeholder="Inserisci il tuo nome" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} />
                    </div>

                    <div className="card-body">
                        <label htmlFor="formVote" className="form-label">Voto</label>
                        <input type="number" className="form-control" id="formVote" min="1" max="5" value={data.vote} onChange={(e) => setData({ ...data, vote: e.target.value })} />
                    </div>

                    <div className="card-body">
                        <label htmlFor="textForm" className="form-label">Testo</label>
                        <textarea className="form-control" id="textForm" rows="3" placeholder="Inserisci testo" value={data.text} onChange={(e) => setData({ ...data, text: e.target.value })}></textarea>
                    </div>

                    <div className="card-body">
                        <button type="submit" className="btn btn-primary">Aggiungi</button>
                    </div>
                </div >
            </form>
        </>
    )

}