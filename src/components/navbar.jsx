import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

function Topo() {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-100px 0px -50% 0px', // compensa navbar fixa
        threshold: 0.3
      }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
  <Navbar className="navbar-topo" expand="lg" fixed="top">
    <Container fluid className="navbar-container">
      <Navbar.Brand href="#inicio" className="navbar-brand">
        <img
          src="assets/logo_gepea.png"
          alt="logo"
          className="navbar-image"
        />
        <h3>Grupo de Estudos de Psicologia Escolar e Arte - GEPEA</h3>
      </Navbar.Brand>

      {/* BOTÃO HAMBÚRGUER */}
      <Navbar.Toggle aria-controls="navbar-nav" />

      {/* CONTEÚDO COLAPSÁVEL */}
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto navbar-menu">
          <Nav.Link href="#inicio" className={activeSection === 'inicio' ? 'active' : ''}>
            Início
          </Nav.Link>

          <Nav.Link href="#sobre" className={activeSection === 'sobre' ? 'active' : ''}>
            Sobre o projeto
          </Nav.Link>

          <Nav.Link href="#quem_somos" className={activeSection === 'quem_somos' ? 'active' : ''}>
            Quem somos
          </Nav.Link>

          <Nav.Link href="#estudos" className={activeSection === 'estudos' ? 'active' : ''}>
            Estudos
          </Nav.Link>

          <Nav.Link href="#contato" className={activeSection === 'contato' ? 'active' : ''}>
            Contato
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

}

export default Topo;