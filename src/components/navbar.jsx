import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

function Topo() {
  return (
    <>
      <Navbar className='navbar-topo' expand="lg" fixed='top'>
        <Container fluid className="navbar-container">
            <Navbar.Brand href="#inicio" className='navbar-brand'>
                <img src="./src/assets/logo_gepea.png" 
                alt="logo" 
                className='navbar-image'/>
                <h3>GEPEA - Grupo de Estudos de Psicologia e Arte</h3>
            </Navbar.Brand>
          <Nav className="ms-auto gap-4 navbar-menu">
            <Nav.Link href="#inicio">Início</Nav.Link>
            <Nav.Link href="#sobre">Sobre o projeto</Nav.Link>
            <Nav.Link href="#quem_somos">Quem somos</Nav.Link>
            <Nav.Link href="#estudos">Estudos</Nav.Link>
            <Nav.Link href="#contato">Contato</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Topo;