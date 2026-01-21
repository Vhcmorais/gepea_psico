import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

function Carousel_Estudos() {
  return (
    <Carousel className="carrossel_estudos" interval={5000}>
      <Carousel.Item>
        <img
          className="d-block w-100 imagem"
          src="assets/encontros/em_breve.png"
          alt="Primeiro encontro"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>

      </Carousel.Item>

    </Carousel>
  );
}

export default Carousel_Estudos;
