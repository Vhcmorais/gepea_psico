import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";

function Contato() {
  return (
    <Card className="card_contato">
      <Tab.Container defaultActiveKey="insta">
        <Card.Header>
          <Nav variant="pills">
            <Nav.Item>
              <Nav.Link eventKey="insta" className="item">Instagram</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="whatsapp" className="item">Formulário</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>

        <Card.Body>
          <Tab.Content>
            <Tab.Pane eventKey="insta" className="ativo">
              <Card.Title>
                <img src="assets/insta.png" alt="instagram" className="image" />
                Instagram
              </Card.Title>
              <Card.Text>
                Acompanhe nossas atividades e publicações.
              </Card.Text>
              <Button className="btn"
                as="a"
                href="https://www.instagram.com/gepeapsi"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                @gepeapsi
              </Button>
            </Tab.Pane>

            <Tab.Pane eventKey="whatsapp" className="ativo">
              <Card.Title>
                <img src="assets/formulario.png" alt="formulario" className="image" />
                Formulário
                </Card.Title>
              <Card.Text>
                Demonstre seu interesse de participar preenchendo o formulário.
              </Card.Text>
              <Button className="btn"
                as="a"
                href="https://docs.google.com/forms/d/e/1FAIpQLSeZola-MRks7dC5Zh0MF2JJ677JeS8KcNsQ5erH_f4_x4KybA/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                Preencher formulário.
              </Button>
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
      </Tab.Container>
    </Card>
  );
}

export default Contato;