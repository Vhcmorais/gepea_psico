import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

function Carousel_Estudos() {
  return (
    <Carousel className="carrossel_estudos" interval={5000}>
      <Carousel.Item>
        <img
          className="d-block w-100 imagem"
          src="./src/assets/encontros/teste1.jpeg"
          alt="Primeiro slide"
        />
        <Carousel.Caption>
          <h3>Título do primeiro slide</h3>
          <p>Descrição ou texto explicativo do primeiro slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 imagem"
          src="./src/assets/encontros/teste2.jpeg"
          alt="Segundo slide"
        />
        <Carousel.Caption>
          <h3>Título do segundo slide</h3>
          <p>Descrição ou texto explicativo do segundo slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 imagem"
          src="./src/assets/encontros/teste3.jpeg"
          alt="Terceiro slide"
        />
        <Carousel.Caption>
          <h3>Título do terceiro slide</h3>
          <p>Descrição ou texto explicativo do terceiro slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel_Estudos;
