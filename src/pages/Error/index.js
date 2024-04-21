import { Link } from 'react-router-dom';
function Error(){

    return(
        <div>
            <h1>Erro 404 Pagina não encontrada</h1>
            <Link to="/">Voltar</Link>
        </div>
    )
}
export default Error;