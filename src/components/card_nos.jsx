import Card from 'react-bootstrap/Card';
import './card_nos.css';

function Card_Gestao() {
  return (
    <div className='gestao_container'>
    <Card style={{ width: '30rem' }} className='yasmin'>
      <Card.Img variant="top" src="assets/yasmin_vitoria.jpeg" />
      <Card.Body>
        <Card.Title className='titulo_card'>Eu sou <span>Yasmin Vitória</span>!</Card.Title>
        <Card.Text className='texto_yasmin'>
          Meu nome é Yasmin Vitória, sou graduanda em Psicologia pela Universidade Federal de Uberlândia, atualmente no 10º período, aguardando
           a colação de grau. Durante a graduação, transitei por diferentes espaços da Psicologia Escolar e Educacional, atuando como extensionista, 
           estagiária e monitora. Essas experiências fortaleceram meu desejo de atuar na área da educação, ampliando meu olhar para os processos educativos. 
           A arte esteve presente de forma potente ao longo da formação, possibilitando expressão, reflexão e construção de sentidos.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '30rem' }} className='luisa'>
      <Card.Img variant="top" src="assets/luisa_maria.jpeg" />
      <Card.Body>
        <Card.Title className='titulo_card'>Eu sou <span>Luísa Maria</span>!</Card.Title>
        <Card.Text className='texto_luisa'>
          Meu nome é Luísa Maria, sou graduanda em Psicologia pela Universidade Federal de Uberlândia, atualmente no 9º período. Ao longo 
          da minha trajetória como estudante, vivenciei diferentes experiências e encontros no campo da Psicologia Escolar e Educacional, 
          atuando como extensionista e estagiária. Para mim, a arte constitui um elemento potente, que afeta, conecta e mobiliza sentidos, 
          tendo sido fundamental nas experiências formativas vividas ao longo da graduação.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
  );
}

export default Card_Gestao;