import './App.css'
import Topo from './components/navbar.jsx';
import Botao from './components/button.jsx';

function App() {
  return (
    <>
     <Topo/>
      <div className="inicio-container">
          <section id="inicio">
              <div className="content">
                  <h3>
                      "O aprendizado, quando mediado, impulsiona o desenvolvimento."
                  </h3>
                  <h2>
                      - Lev Vygotsky
                  </h2>
                  <p>
                    Seja bem-vindo(a).<br/>
                    Este é um espaço coletivo de encontro, escuta e criação, dedicado à reflexão sobre a Psicologia Escolar e Educacional em diálogo com a arte. Aqui, compreendemos a escola como um território vivo, atravessado por afetos, histórias, desafios e possibilidades de transformação.
                  </p>
                  <Botao/>
              </div>
          </section>
      </div>
    </>
  )
}

export default App
