import './App.css'
import {Campo2} from './components/Campo'

function App() {
  return (
    <>
      <form className="container border border-dark rounded shadow-sm mt-4 d-flex flex-column gap-4 p-4">
        <h1 className="text-center">Formulário</h1>

        <Campo2 />

        <div className="form-group">
          <label htmlFor="nome" className="form-label">Nome:</label>
          <input type="text" id="nome" name="nome" className="form-control border border-dark shadow-sm" />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" name="email" className="form-control border border-dark shadow-sm" />
        </div>

        <div className="form-group">
          <label htmlFor="senha" className="form-label">Senha:</label>
          <input type="password" id="senha" name="senha" className="form-control border border-dark shadow-sm" />
        </div>
        
        <button className="btn btn-dark shadow-sm mb-4">Cadastrar</button>

      </form>
    </>
  )
}

export default App
