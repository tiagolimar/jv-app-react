import { useEffect, useState } from 'react';
import './App.css';
import Campo from './components/Campo.jsx';

function App() {
    const [variant, setVariant] = useState('primary');
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleColor = (event) => {
        const newVariant = event.target.value;
        setVariant(newVariant);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            nome,
            email,
            senha,
        }

        console.log(formData);
    }

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch('https://viacep.com.br/ws/01001000/json/');
            const data = await response.json();
            console.log(data);
        }
        
        fetchData();
    },[]);

    return (
        <>
            <form className={`container border border-${variant} rounded shadow-sm mt-4 d-flex flex-column gap-4 p-4`} onSubmit={handleSubmit}>
                <h1 className={`text-center text-${variant}`}>Formulário</h1>
                
                <div className="form-group w-25 mx-auto">
                    <label htmlFor="cor" className={`text-${variant}`}>Selecione a cor:</label>
                    <select id="cor" className={`form-select border border-${variant}`} onChange={handleColor}>
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

                <Campo
                    variant={variant} 
                    id="nome" 
                    label="Nome" 
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                />

                <Campo 
                    variant={variant} 
                    id="email" 
                    label="Email" 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <Campo
                    variant={variant} 
                    id="senha" 
                    label="Senha" 
                    type="password" 
                    value={senha} 
                    onChange={e => setSenha(e.target.value)}  
                />

                <button className={`btn btn-${variant} shadow-sm mb-4`}>Cadastrar</button>

            </form>
        </>
    )
}

export default App
