import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './card.css';

function Card_Grupo() {
  return (
    <CardGroup>
      <Card>
          <Card.Img variant="top" src="./src/assets/espaco.png" className='card-img-cima'/>
        <Card.Body>
          <Card.Title className='title_card'>Ambiente Afetivo</Card.Title>
          <Card.Text className='description'>
            Promover um ambiente coletivo permeado pela arte e pelo afeto, favorecendo discussoes sobre as poss~iveis praticas
            no contexto escolar e educacional.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Grupo de Estudos de Psicologia Escolar e Arte</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="./src/assets/duvidas.png" className='card-img-meio' />
        <Card.Body>
          <Card.Title className='title_card'>Encontros baseados em leitura</Card.Title>
          <Card.Text className='description'>
            Desenvolver encontros baseados em dialogos a partir de leituras previamente realizadas, garantindo um espaco aberto,
            etico e seguro para duvidas, questionamentos e a construcao coletiva do conhecimento.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Grupo de Estudos de Psicologia Escolar e Arte</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="./src/assets/arte.png" className="card-img-ultima" />
        <Card.Body>
          <Card.Title className='title_card'>Recursos Artísticos</Card.Title>
          <Card.Text className='description'>
            Utilizar recursos artisticos como mediadores nas discussoes e nas producoes grupais, possibilitando a expressao,
            a reflexao critica e a elaboracao de sentidos sobre as praticas em Psicologia Escolar e Educacional.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Grupo de Estudos de Psicologia Escolar e Arte</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Card_Grupo;