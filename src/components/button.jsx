import Button from 'react-bootstrap/Button';
import './button.css';

function Botao() {
  return (
    <>
      <Button 
      href='#sobre'
      className= "btn_principal">
        Conheça o projeto!
      </Button>
    </>
  );
}

export default Botao;