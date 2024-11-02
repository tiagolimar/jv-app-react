import { useState } from 'react';
import './App.css';
import Campo from './components/Campo.jsx';

function App() {
    const [variant, setVariant] = useState('primary');

    const handleChange = (event) => {
        const newVariant = event.target.value;
        setVariant(newVariant);
    }

    return (
        <>
            <form className={`container border border-${variant} rounded shadow-sm mt-4 d-flex flex-column gap-4 p-4`}>
                <h1 className={`text-center text-${variant}`}>Formulário</h1>
                
                <div className="form-group w-25 mx-auto">
                    <label htmlFor="cor" className={`text-${variant}`}>Selecione a cor:</label>
                    <select id="cor" className={`form-select border border-${variant}`} onChange={handleChange}>
                        <option value="primary">Azul</option>
                        <option value="secondary">Cinza</option>
                        <option value="success">Verde</option>
                        <option value="danger">Vermelho</option>
                        <option value="warning">Amarelo</option>
                        <option value="info">Azul Claro</option>
                        <option value="light">Cinza Claro</option>
                        <option value="dark">Preto</option>
                    </select>
                </div>

                <Campo variant={variant} id="nome" label="Nome" />
                <Campo variant={variant} id="email" label="Email" type="email" />
                <Campo variant={variant} id="senha" label="Senha" type="password" />
                
                <button className={`btn btn-${variant} shadow-sm mb-4`}>Cadastrar</button>

            </form>
        </>
    )
}

export default App
