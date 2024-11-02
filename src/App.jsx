import './App.css';
import Campo from './components/Campo.jsx';

function App() {
    return (
        <>
            <form className="container border border-dark rounded shadow-sm mt-4 d-flex flex-column gap-4 p-4">
                <h1 className="text-center">Formulário</h1>
                
                <Campo id="nome" label="Nome" />
                <Campo id="email" label="Email" type="email" />
                <Campo id="senha" label="Senha" type="password" />
                
                <button className="btn btn-primary shadow-sm mb-4">Cadastrar</button>

            </form>
        </>
    )
}

export default App
