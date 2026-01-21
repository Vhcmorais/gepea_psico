import './App_new.css'
import './components/css_sections/apresentacao.css'
import './components/css_sections/estudos.css'
import './components/css_sections/contato.css'
import './components/css_sections/footer.css'
import Topo from './components/navbar.jsx';
import Botao from './components/button.jsx';
import Card_Grupo from './components/card.jsx';
import Card_Gestao from './components/card_nos.jsx';
import Carousel_Estudos from './components/carousel.jsx';
import Contato from './components/card_contato.jsx';

function App() {
  return (
    <>
     <Topo/>
      <div className="inicio-container">
          <section id="inicio" className='section_inicio'>
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
              <img className="imagem_hero" src="assets/imagem_hero.png" alt="hero" />
          </section>
      </div>

      <section className='sobre-container' id="sobre">
        <div className='conteudo-sobre'>
          <h2 className='titulo'>Sobre <span> o projeto.</span></h2>
          <div className='row'>
            <div className='texto_sobre'>
              <h3>
                GEPEA - Grupo de Estudos de Psicologia Escolar e Arte
              </h3>
              <p>
                Nosso objetivo com o Grupo de Estudos de Psicologia Escolar e Arte (GEPEA) é criar um espaço coletivo de estudos e 
                reflexões sobre temas que abordem as possibilidades de práticas em Psicologia Escolar e Educacional, considerando os 
                desafios e as demandas do contexto escolar, com ênfase no uso da arte como recurso de mediação, expressão e intervenção.
                Diante dessas demandas, o projeto busca desenvolver ações que contribuam para a reflexão crítica e a construção coletiva 
                de conhecimentos, procurando atendê-las por meio dos seguintes objetivos:
              </p>
              <Card_Grupo />
            </div>
          </div>
        </div>
      </section>

      <section className='equipe_container' id='quem_somos'>
        <div className="conteudo-equipe">
          <h3 className='titulo_apresentacao' >
            Quem <span> somos</span>?
          </h3>
          <Card_Gestao />
        </div>
      </section>

      <section className='estudos_sessao' id='estudos'>
        <div className='conteudo-estudos'>
          <h3>Veja um pouco mais sobre <span>nossos estudos</span>.</h3>
          <Carousel_Estudos/> 
        </div>
      </section>

      <section className='contato_sessao' id='contato'>
        <div className='container_contato'>
          <h3><span>Quer fazer</span> parte?</h3>
          <p>
            Entre em contato conosco através do instagram ou entre no nosso grupo no WhatsApp para ficar por dentro de todas as novidades.<br/>
            Você também faz parte dessa construção coletiva.<br/>
          </p>
          <Contato/>
        </div>
      </section>

      <footer>
      <div className='footer_content'>
        <p>© 2026 GEPEA - Grupo de Estudos de Psicologia Escolar e Arte. Todos os direitos reservados.</p>
        <a href="https://www.instagram.com/gepeapsi" target="_blank">Instagram</a>
        <p className='desenvolvimento'> Desenvolvido por: <a href="https://www.instagram.com/vhcmoorais" target="_blank">@vhcmoorais</a></p>
      </div>
      </footer>
    </>
  )
}

export default App