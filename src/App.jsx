import './App.css'
import Topo from './components/navbar.jsx';
import Botao from './components/button.jsx';
import Card_Grupo from './components/card.jsx';

function App() {
  return (
    <>
     <Topo/>
      <div className="inicio-container">
          <section id="inicio">
              <div className="content">
                  <h3>
                      "A aprendizagem não é apenas um processo cognitivo, é também afetivo."
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
              <img className="imagem_hero" src="./src/assets/imagem_hero.png" alt="hero" />
          </section>
      </div>

      <section className='sobre-container' id="sobre">
        <div className='conteudo-sobre'>
          <h2 className='titulo'>Sobre <span> o projeto.</span></h2>
          <div className='row'>
            <div className='texto_sobre'>
              <h3>
                O que faz nosso projeto especial
              </h3>
              <p>
                Nosso objetivo com o Grupo de Estudos de Psicologia Escolar e Arte (GEPEA) é criar um espaço coletivo de estudos e 
                reflexões sobre temas que abordem as possibilidades de práticas em Psicologia Escolar e Educacional, considerando os 
                desafios e as demandas do contexto escolar, com ênfase no uso da arte como recurso de mediação, expressão e intervenção.
                Nosso objetivo com o Grupo de Estudos de Psicologia Escolar e Arte (GEPEA) é criar um espaço coletivo de estudos e reflexões sobre temas que abordem as possibilidades de práticas em Psicologia Escolar e Educacional, considerando os desafios e as demandas do contexto escolar, com ênfase no uso da arte como recurso de mediação, expressão e intervenção.
                Diante dessas demandas, o projeto busca desenvolver ações que contribuam para a reflexão crítica e a construção coletiva 
                de conhecimentos, procurando atendê-las por meio dos seguintes objetivos:
              </p>
              <Card_Grupo />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
