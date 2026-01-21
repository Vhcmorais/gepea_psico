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
              <Nav.Link eventKey="whatsapp" className="item">WhatsApp</Nav.Link>
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
                <img src="assets/whatsapp.png" alt="zap" className="image" />
                WhatsApp
                </Card.Title>
              <Card.Text>
                Faça parte da comunidade no WhatsApp.
              </Card.Text>
              <Button className="btn"
                as="a"
                href="#."
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
              >
                Entrar no grupo!
              </Button>
            </Tab.Pane>
          </Tab.Content>
        </Card.Body>
      </Tab.Container>
    </Card>
  );
}

export default Contato;