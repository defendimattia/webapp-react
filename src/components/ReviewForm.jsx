export default function ReviewForm() {

    return (
        <>
            <form action="">
                <div class="card">
                    <div class="card-header">
                        Aggiungi recensione
                    </div>
                    <div class="card-body">
                        <label for="formName" className="form-label">Nome</label>
                        <input type="text" className="form-control" id="formName" placeholder="Inserisci il tuo nome" />
                    </div>

                    <div class="card-body">
                        <label for="formVote" className="form-label">Voto</label>
                        <input type="number" className="form-control" id="formVote" min="1" max="5" />
                    </div>

                    <div class="card-body">
                        <label for="textForm" className="form-label">Testo</label>
                        <textarea class="form-control" id="textForm" rows="3"></textarea>
                    </div>

                    <div class="card-body">
                        <a href="#" class="btn btn-primary">Aggiungi</a>
                    </div>
                </div >
            </form>
        </>
    )

}